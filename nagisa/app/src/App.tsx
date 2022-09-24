import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Routes, useParams } from 'react-router-dom';

import { BalanceList, BalanceCreate } from './page/balances'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/balances" element={<BalanceList />}></Route>
        <Route path="/balances/create" element={<BalanceCreate />}></Route>
        <Route path="/test/:n" element={<Test name={"hoge"} />}></Route>
      </Routes>
    </Router>
  );
}

const Home = () => (
  <h2>Home</h2>
);
const Test = ({ name }: { name: string }) => {
  const { n } = useParams<{ n: string }>();
  return (
    <h2> Test {name} {n}</h2>
  )
};

export default App;
