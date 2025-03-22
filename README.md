# GraphQL Library System

This project is a simple library system built using GraphQL, Apollo Client, and React. It allows users to add authors and books, and view a list of books with their authors.

## Technologies Used

-   **GraphQL:** For querying and mutating data.
-   **Apollo Client:** For managing GraphQL data in the React application.
-   **React:** For building the user interface.
-   **Node.js/Express (Backend - if applicable):** For setting up a GraphQL server (if you have a separate backend).

## Prerequisites

-   Node.js and npm (or yarn) installed.
-   A GraphQL server running (either local or remote).

## Setup

1.  **Clone the Repository:**

    ```bash
    git clone <repository_url>
    cd <project_directory>
    ```

2.  **Install Dependencies:**

    ```bash
    npm install
    # or
    yarn install
    ```

3.  **Configure Apollo Client:**

    -   Ensure your `apolloClient.js` file is correctly configured to point to your GraphQL server's endpoint.

    ```javascript
    // apolloClient.js
    import { ApolloClient, InMemoryCache } from "@apollo/client";

    const client = new ApolloClient({
      uri: "YOUR_GRAPHQL_ENDPOINT", // Replace with your GraphQL server URL
      cache: new InMemoryCache(),
    });

    export default client;
    ```

    -   Replace `YOUR_GRAPHQL_ENDPOINT` with the actual URL of your GraphQL server.

4.  **Run the Application:**

    ```bash
    npm start
    # or
    yarn start
    ```

    -   The application should now be running in your browser, typically at `http://localhost:3000`.

## Project Structure
