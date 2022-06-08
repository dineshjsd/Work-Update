import { Fragment } from "react";
import { useParams, Route } from "react-router-dom";

import Comments from "../components/comments/Comments";
import HighLightedQuote from '../components/quotes/HighlightedQuotes';

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

const QuoteDetail = () => {
  const params = useParams();

  const quote = DUMMY_QUOTES.find((quote) => quote.id === params.quoteId);

  if(!quote) {
    return <p>No Quote Found</p>
  }

  return (
    <Fragment>
     <HighLightedQuote text={quote.text} author={quote.author}/>
      <Route path={`/quotes/${params.quoteId}/comments`}>
        <Comments />
      </Route>
    </Fragment>
  );
};

export default QuoteDetail;
