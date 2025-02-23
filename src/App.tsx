import { Routes, Route } from "react-router";
import Layout from "./components/Layout";
import Home from "./pages/home";
import Week01 from "./pages/week01";
import Week02 from "./pages/week02";
import Week03 from "./pages/week03";
import Week04 from "./pages/week04";
import SignIn from "./pages/auth/signIn";
import Register from "./pages/auth/register";
import { AuthProvider } from "./context/AuthProvider";
import ProtectedRoute from "./routes/ProtectedRoute";

const App = () => {
  return (
    <>
      <AuthProvider>
        <Layout>
          <Routes>
            <Route index element={<Home />}></Route>
            <Route path="week01" element={<Week01 />}></Route>
            <Route
              path="week02"
              element={
                <ProtectedRoute>
                  <Week02 />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="week03"
              element={
                <ProtectedRoute>
                  <Week03 />
                </ProtectedRoute>
              }
            ></Route>
            <Route
              path="week04"
              element={
                <ProtectedRoute>
                  <Week04 />
                </ProtectedRoute>
              }
            ></Route>
            <Route path="signIn" element={<SignIn />}></Route>
            <Route path="register" element={<Register />}></Route>
          </Routes>
        </Layout>
      </AuthProvider>
    </>
  );
};

export default App;
