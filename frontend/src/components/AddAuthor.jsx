import React, { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_AUTHOR } from "../queries";

const AddAuthor = () => {
  const [authorId, setAuthorId] = useState("");
  const [authorName, setAuthorName] = useState("");
  const [addAuthor, { loading, error }] = useMutation(ADD_AUTHOR);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!authorId || !authorName) {
      alert("Please enter all fields!");
      return;
    }

    try {
      await addAuthor({ variables: { id: authorId, name: authorName } });
      alert("Author added successfully!");
      setAuthorId("");
      setAuthorName("");
    } catch (err) {
      console.error("Error adding author:", err);
    }
  };

  return (
    <div style={{ maxWidth: "400px", margin: "5px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Add Author</h2>
      <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
        <input
          type="text"
          value={authorId}
          onChange={(e) => setAuthorId(e.target.value)}
          placeholder="Author ID"
          required
          style={{ padding: "10px", borderRadius: "5px", border: "1px solid #ccc" }}
        />
        <input
          type="text"
          value={authorName}
          onChange={(e) => setAuthorName(e.target.value)}
          placeholder="Author Name"
          required
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
          {loading ? "Adding..." : "Add Author"}
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

export default AddAuthor;