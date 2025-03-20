import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";

const QuoteMachine = () => {
  const [quote, setQuote] = useState("");
  const [author, setAuthor] = useState("");

  const fetchQuote = async () => {
    try {
      const response = await axios.get("https://api.quotable.io/random?tags=inspirational");
      setQuote(response.data.content);
      setAuthor(response.data.author);
    } catch (error) {
      console.error("Error fetching quote:", error);
    }
  };

  useEffect(() => {
    fetchQuote(); 
  }, []);

  return (
    <div id="quote-box" style={{ textAlign: "center", marginTop: "50px" }}>
      <h2 id="text">"{quote}"</h2>
      <p id="author">- {author}</p>
      <button id="new-quote" onClick={fetchQuote}>
        New Quote
      </button>
      <br />
      <a
        id="tweet-quote"
        href={`https://twitter.com/intent/tweet?text=${encodeURIComponent(
          `"${quote}" - ${author}`
        )}`}
        target="_blank"
        rel="noopener noreferrer"
      >
        Tweet this Quote
      </a>
    </div>
  );
};

export default function App() {
  return <QuoteMachine />;
}
