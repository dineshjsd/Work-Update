import React from "react";

import QuoteList from "../components/quotes/QuoteList";

const DUMMY_QUOTES = [
  {
    id: "q1",
    author: "Lao Tzu",
    text: "The journey of a thousand miles begins with one step.",
  },
  {
    id: "q2",
    author: "Mahatma Gandhi",
    text: "You must be the change you wish to see in the world.",
  },
  {
    id: "q3",
    author: "Mae West",
    text: "You only live once, but if you do it right, once is enough.",
  },
  {
    id: "q4",
    author: "Eleanor Roosevelt",
    text: "Great minds discuss ideas; average minds discuss events; small minds discuss people.",
  },
];

function AllQuotes() {
  return <QuoteList quotes={DUMMY_QUOTES} />;
}

export default AllQuotes;
