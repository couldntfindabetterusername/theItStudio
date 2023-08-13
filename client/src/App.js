import Header from "./components/Header.js";
import Table from "./components/Table.js";
import Form from "./components/Form.js";

import { getUsers } from "./actions.js";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import "./styles.css";

function App() {
  const [loading, setLoading] = useState(true);

  const [currentId, setCurrentId] = useState("");
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(getUsers());
  }, [dispatch]);

  return (
    <BrowserRouter>
      <main>
        <Header setCurrentId={setCurrentId} />{" "}
        <Table currentId={currentId} setCurrentId={setCurrentId} />{" "}
        <Routes>
          <Route
            path="/form"
            exact
            element={
              <Form currentId={currentId} setCurrentId={setCurrentId}>
                {" "}
              </Form>
            }
          />{" "}
        </Routes>{" "}
      </main>{" "}
    </BrowserRouter>
  );
}

export default App;
