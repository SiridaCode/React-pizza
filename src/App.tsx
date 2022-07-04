import React from "react";
import "./App.scss";
import PizzaBlock from "./components/PizzaBlock/PizzaBlock";
import Layout from "./hoc/Layout/Layout";

function App() {
  return (
    <Layout>
      <PizzaBlock />
    </Layout>
  );
}

export default App;
