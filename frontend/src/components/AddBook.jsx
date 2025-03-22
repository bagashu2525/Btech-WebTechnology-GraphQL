import { useMutation } from "@apollo/client";
import { useState } from "react";
import { ADD_BOOK, GET_BOOKS } from "../queries.js";

const AddBook = () => {
  const [title, setTitle] = useState("");
  const [authorId, setAuthorId] = useState("");

  const [addBook, { loading, error }] = useMutation(ADD_BOOK, {
    refetchQueries: [{ query: GET_BOOKS }],
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ variables: { id: Date.now().toString(), title, authorId } });
    setTitle("");
    setAuthorId("");
  };

  return (
    <div style={{ maxWidth: "400px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Add Book</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Book Title"
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
          placeholder="Author ID"
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "10px 15px",
            background: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "5px",
            cursor: loading ? "not-allowed" : "pointer",
            opacity: loading ? 0.7 : 1,
          }}
        >
          {loading ? "Adding..." : "Add Book"}
        </button>
      </form>
      {error && (
        <p style={{ color: "red", marginTop: "10px", textAlign: "center" }}>
          Error: {error.message}
        </p>
      )}
    </div>
  );
};

export default AddBook;