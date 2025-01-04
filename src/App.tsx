import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Sample from "./pages/Sample";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route index element={<Home />}></Route>
          <Route path="sample" element={<Sample />}></Route>
        </Routes>
      </Layout>
    </>
  );
};

export default App;
