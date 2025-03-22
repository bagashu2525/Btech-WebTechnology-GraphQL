import { useQuery } from "@apollo/client";
import { GET_BOOKS } from "../queries.js";

const Books = () => {
  const { loading, error, data } = useQuery(GET_BOOKS);

  if (loading) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px" }}>
        <p>Loading...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div style={{ textAlign: "center", marginTop: "50px", color: "red" }}>
        <p>Error: {error.message}</p>
      </div>
    );
  }

  return (
    <div style={{ maxWidth: "600px", margin: "20px auto", padding: "20px", border: "1px solid #ddd", borderRadius: "8px", boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)" }}>
      <h2 style={{ textAlign: "center", marginBottom: "20px", color: "#333" }}>Books List</h2>
      <ul style={{ listStyle: "none", padding: 0 }}>
        {data.books.map((book) => (
          <li
            key={book.id}
            style={{
              padding: "10px",
              borderBottom: "1px solid #eee",
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <span>{book.title}</span>
            <span style={{ color: "#777" }}>{book.author?.name}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Books;