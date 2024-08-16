import React, { useState, useEffect } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist";
import "../App.css";

GlobalWorkerOptions.workerSrc = "/pdf.worker.min.js";

// Dynamically import image context
const images = require.context("../Images", false, /\.(png|jpe?g|svg)$/);

const EbookDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [ebook, setEbook] = useState(null);
  const [loanStatus, setLoanStatus] = useState(null);
  const [pdfText, setPdfText] = useState("");
  const [loadingText, setLoadingText] = useState(false);

  useEffect(() => {
    fetchEbookDetails();
    fetchLoanStatus();
  }, [id]);

  const fetchEbookDetails = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7061/api/Ebooks/${id}`
      );
      setEbook(response.data);

      if (response.data.content) {
        const pdfUrl = response.data.content;
        extractPdfText(pdfUrl);
      }
    } catch (error) {
      console.error("Error fetching ebook details:", error);
    }
  };

  const fetchLoanStatus = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7061/api/EbookLoans/isReturned/${id}`
      );
      setLoanStatus(response.data);
    } catch (error) {
      console.error("Error fetching loan status:", error);
    }
  };

  const extractPdfText = async (pdfUrl) => {
    try {
      console.log("Extracting PDF text from URL:", pdfUrl);
      setLoadingText(true);

      // Fetch the PDF file as arraybuffer
      const response = await axios.get(pdfUrl, { responseType: "arraybuffer" });
      if (response.status !== 200) {
        throw new Error(`Failed to fetch PDF: ${response.statusText}`);
      }

      // Create a PDF.js document from the fetched data
      const loadingTask = getDocument({ data: response.data });
      const pdf = await loadingTask.promise;
      console.log("PDF loaded:", pdf);

      let text = "";
      for (let pageNum = 1; pageNum <= pdf.numPages; pageNum++) {
        console.log(`Extracting text from page ${pageNum}`);
        const page = await pdf.getPage(pageNum);
        const content = await page.getTextContent();
        console.log(`Text content of page ${pageNum}:`, content);

        text += content.items.map((item) => item.str).join(" ") + "\n\n";
      }

      setPdfText(text);
    } catch (error) {
      console.error("Error extracting PDF text:", error);
      setPdfText("Failed to extract PDF text.");
    } finally {
      setLoadingText(false);
    }
  };

  const preprocessImagePath = (path) => {
    const imageName = path.split("/").pop();
    try {
      return images(`./${imageName}`);
    } catch (err) {
      console.error(`Image not found: ${imageName}`);
      return "/images/placeholder.jpg"; // Fallback image
    }
  };

  const handleLoan = async () => {
    try {
      await axios.post("https://localhost:7061/api/EbookLoans", {
        ebookID: ebook.bookID,
        loanStartDate: new Date(),
        loanDueDate: new Date(Date.now() + 7 * 24 * 60 * 60 * 1000), // 7 days loan
        userID: 1, // Replace with actual user ID from authentication
      });
      alert("Ebook loaned successfully!");
      fetchLoanStatus(); // Refresh loan status
    } catch (error) {
      console.error("Error loaning the ebook:", error);
    }
  };

  useEffect(() => {
    if (loanStatus) {
      if (loanStatus.isReturned) {
        navigate("/"); // Redirect to home if loan is returned
      } else if (new Date(loanStatus.loanDueDate) < new Date()) {
        alert("Your loan period has expired.");
        navigate("/"); // Redirect to home if loan is expired
      }
    }
  }, [loanStatus, navigate]);

  if (!ebook) return <div className="loading-state">Loading...</div>;

  return (
    <div className="ebook-details-container">
      <div className="ebook-header">
        <h1 className="ebook-title">{ebook.title}</h1>
        <img
          src={preprocessImagePath(ebook.image)}
          alt={ebook.title}
          className="ebook-image"
        />
      </div>
      <div className="ebook-info">
        <p className="ebook-description">{ebook.description}</p>
        <p className="ebook-price">Price: €{ebook.price}</p>
        {loadingText ? (
          <div className="loading-text">Loading PDF text...</div>
        ) : pdfText ? (
          <div className="pdf-text-container">
            <h2 className="pdf-text-header">Ebook Text</h2>
            <pre className="pdf-text-content">{pdfText}</pre>
          </div>
        ) : (
          ebook.content && (
            <div className="ebook-content-section">
              <h2 className="ebook-content-header">Ebook Content</h2>
              <a
                href={ebook.content}
                target="_blank"
                rel="noopener noreferrer"
                className="ebook-content-link"
              >
                Read Ebook
              </a>
            </div>
          )
        )}
        {loanStatus && loanStatus.isReturned ? (
          <p className="restricted-access-alert">
            This ebook has been returned. You can borrow it again.
          </p>
        ) : loanStatus && new Date(loanStatus.loanDueDate) < new Date() ? (
          <p className="restricted-access-alert">
            Your loan period has expired. Please return the ebook to extend your
            access.
          </p>
        ) : (
          <div className="ebook-actions">
            <button className="loan-button" onClick={handleLoan}>
              Loan Ebook
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default EbookDetails;
