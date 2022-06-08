import React from "react";
import { Route, Switch } from "react-router-dom";

import AllQuotes from "./pages/AllQuotes";
import QuoteDetail from "./pages/QuoteDetail";
import AddQuote from "./pages/AddQuote";

function App() {
  return (
   
    <Switch>
      <Route path="/quotes" exact>
        <AllQuotes />
      </Route>
      <Route path="/quotes/:quoteId" exact>
        <QuoteDetail />
      </Route>
      <Route path="/add-quote" exact>
        <AddQuote />
      </Route>
    </Switch>
  );
}

export default App;
