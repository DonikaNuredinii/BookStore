import React, { useState, useEffect } from "react";
import axios from "axios";
import { getDocument, GlobalWorkerOptions } from "pdfjs-dist/build/pdf";
import { useParams } from "react-router-dom";
import "pdfjs-dist/build/pdf.worker.entry";
import "../App.css";

const EbookDetails = () => {
  const { id } = useParams();
  const [ebook, setEbook] = useState(null);
  const [pdfUrl, setPdfUrl] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetchEbookDetails();
  }, [id]);

  const fetchEbookDetails = async () => {
    try {
      const response = await axios.get(
        `https://localhost:7061/api/Ebooks/${id}`
      );
      setEbook(response.data);
      fetchPdfContent(response.data.content);
    } catch (error) {
      console.error("Error fetching ebook details:", error);
      setError("Failed to load ebook details.");
      setLoading(false);
    }
  };

  const fetchPdfContent = async (url) => {
    try {
      setLoading(true);
      const response = await axios.get(url, { responseType: "blob" });
      const blob = new Blob([response.data], { type: "application/pdf" });
      const pdfUrl = URL.createObjectURL(blob);
      setPdfUrl(pdfUrl);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching PDF content:", error);
      setError("Failed to load PDF content.");
      setLoading(false);
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>{error}</div>;
  }

  return (
    <div className="ebook-details-container">
      {ebook && (
        <>
          <div className="ebook-header">
            <h1 className="ebook-title">{ebook.title}</h1>
          </div>
          <div className="ebook-info">
            <p className="ebook-description">{ebook.description}</p>
            {pdfUrl && (
              <div className="pdf-viewer">
                <iframe src={pdfUrl} title="PDF Viewer" />
              </div>
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default EbookDetails;
