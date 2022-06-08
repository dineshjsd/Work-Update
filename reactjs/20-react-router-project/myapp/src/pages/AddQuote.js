import React from "react";
import { useHistory } from "react-router-dom";

import QuoteForm from "../components/quotes/QuoteForm";

function AddQuote() {
  const history = useHistory();

  // function to add quote
  // will save quote
  const addQuoteHandler = (quoteData) => {
    console.log(quoteData);

    history.push('/quotes');
  };
  return <QuoteForm onAddQuote={addQuoteHandler} />;
}

export default AddQuote;
