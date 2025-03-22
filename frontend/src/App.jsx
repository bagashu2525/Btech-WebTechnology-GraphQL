import { ApolloProvider } from "@apollo/client";
import client from "./apolloClient";
import Books from "./components/Books";
import AddBook from "./components/AddBook";
import AddAuthor from "./components/AddAuthor";

function App() {
  return (
    <ApolloProvider client={client}>
      <div
        style={{
          fontFamily: "Roboto, sans-serif",
          background: "linear-gradient(135deg, #f0f2f5, #e1e6eb)",
          minHeight: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: "40px 20px",
        }}
      >
        <h1
          style={{
            textAlign: "center",
            marginBottom: "40px",
            color: "#2c3e50",
            textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
            fontSize: "2.5rem",
            fontWeight: "700",
          }}
        >
          Library System
        </h1>
        <div
          style={{
            maxWidth: "800px",
            width: "100%",
            display: "flex",
            flexDirection: "column",
            gap: "30px",
          }}
        >
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
              padding: "30px",
            }}
          >
            <AddBook />
          </div>
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
              padding: "30px",
            }}
          >
            <AddAuthor />
          </div>
          <div
            style={{
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.15)",
              padding: "30px",
            }}
          >
            <Books />
          </div>
        </div>
      </div>
    </ApolloProvider>
  );
}

export default App;