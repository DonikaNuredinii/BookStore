import React, { useState, useEffect } from "react";
import axios from "axios";
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
      const pdfPath = preprocessPdfPath(response.data.content);
      fetchPdfContent(pdfPath);
    } catch (error) {
      console.error("Error fetching ebook details:", error);
      setError("Failed to load ebook details.");
      setLoading(false);
    }
  };

  const preprocessPdfPath = (path) => {
    if (!path) return path;

    const normalizedPath = path.replace(/\/{2,}/g, "/");
    const fileName = normalizedPath.split("/").pop();

    const shortUrl = `/${fileName}`;
    const host = window.location.origin;
    return `${host}${shortUrl}`;
  };

  const fetchPdfContent = async (url) => {
    try {
      console.log("Fetching PDF from URL:", url);
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
