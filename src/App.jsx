import Home from "./view/Home/Home";
import ProjectDetails from "./view/ProjectDetails/ProjectDetails";
import Layout from "./components/Layout/Layout";
import {Route, Routes, useLocation} from "react-router-dom";
import {AnimatePresence} from "framer-motion";
import {Toaster} from "react-hot-toast";

function App() {
  const location = useLocation();
  return (
    <>
      <AnimatePresence>
        <Toaster />
        <Routes location={location} key={location.pathname}>
          <Route element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="/projectdetails/:id" element={<ProjectDetails />} />
          </Route>
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
