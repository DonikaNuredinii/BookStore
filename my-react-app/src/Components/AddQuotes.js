import React, { useState, useEffect } from "react";
import { Row, Col, Form, Button } from "react-bootstrap";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link, useNavigate } from "react-router-dom";

const AddQuotes = () => {
  const [text, setText] = useState("");
  const [selectedAuthors, setSelectedAuthors] = useState([]);
  const [authorsList, setAuthorsList] = useState([]);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate(); // Use useNavigate instead of useHistory

  useEffect(() => {
    getAuthors();
  }, []);

  const getAuthors = async () => {
    try {
      const response = await axios.get("https://localhost:7061/api/Author");
      setAuthorsList(response.data);
    } catch (error) {
      toast.error("Failed to fetch authors: " + error.message);
    }
  };

  const handleSave = async (e) => {
    e.preventDefault();

    if (!text || selectedAuthors.length === 0) {
      toast.error("Quote text and at least one author are required.");
      return;
    }

    setLoading(true);

    try {
      // Step 1: Add the quote
      const quoteResponse = await axios.post(
        "https://localhost:7061/api/Quotes",
        { text }
      );

      if (quoteResponse.status === 201) {
        const newQuoteID = quoteResponse.data.quoteID;

        // Step 2: Add the author-quote relationships
        const authorQuoteRequests = selectedAuthors.map((authorId) => ({
          authorID: parseInt(authorId),
          quoteID: newQuoteID,
        }));

        await Promise.all(
          authorQuoteRequests.map(async (authorQuote) => {
            const relationshipResponse = await axios.post(
              "https://localhost:7061/api/AuthorQuotes",
              authorQuote
            );

            if (relationshipResponse.status !== 201) {
              throw new Error("Failed to add author-quote relationship.");
            }
          })
        );

        toast.success("Quote has been added with authors");
        clear();
        navigate("../Quotes");
      } else {
        throw new Error("Failed to add quote.");
      }
    } catch (error) {
      toast.error("Failed to add Quote with Authors: " + error.message);
    } finally {
      setLoading(false);
    }
  };

  const clear = () => {
    setText("");
    setSelectedAuthors([]);
  };

  return (
    <Form className="quoteForm">
      <ToastContainer />
      <Row>
        <Col>
          <Form.Group controlId="formText">
            <Form.Label>Text</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter quote text"
              value={text}
              onChange={(e) => setText(e.target.value)}
            />
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Form.Group controlId="formAuthors">
            <Form.Label>Authors</Form.Label>
            <Form.Control
              as="select"
              multiple
              value={selectedAuthors}
              onChange={(e) =>
                setSelectedAuthors(
                  Array.from(e.target.selectedOptions, (option) => option.value)
                )
              }
            >
              {authorsList.map((author) => (
                <option key={author.authorID} value={author.authorID}>
                  {author.name}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Col>
      </Row>
      <Row>
        <Col>
          <Button
            variant="dark"
            className="btn-add"
            onClick={handleSave}
            disabled={loading}
          >
            {loading ? "Adding..." : "Add Quote"}
          </Button>
        </Col>
        <Col>
          <Button
            variant="dark"
            className="btn-add"
            onClick={clear}
            disabled={loading}
          >
            Clear
          </Button>
        </Col>
      </Row>
    </Form>
  );
};

export default AddQuotes;
