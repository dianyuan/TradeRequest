import React from 'react';
import TRType from '../containers/trade-request';
import TypeDetail from '../containers/request-details';
import LoginForm from '../containers/SubmissionForm';
import showResults from "./showResults";

const App = () => (
  <div>
    Hello
    <TRType />
    <TypeDetail />
    <LoginForm onSubmit={showResults} />
  </div>
);

export default App;