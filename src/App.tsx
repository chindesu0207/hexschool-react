import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Week01 from "./pages/week01";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="week01" element={<Week01 />}></Route>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
