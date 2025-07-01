import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Rootlayout from "./component/layout/Rootlayout";
import Dashboard from "./component/pages/Dashboard";
import ExpenseForm from "./component/pages/ExpenseForm";
import ExpenseList from "./component/pages/ExpenseList";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Rootlayout />}>
            <Route index element={<Dashboard />} />
            <Route path="expenceform" element={<ExpenseForm />} />
            <Route path="expencelist" element={<ExpenseList />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
