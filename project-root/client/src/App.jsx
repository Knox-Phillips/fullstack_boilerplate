import { Routes, Route } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import ListPage from "./pages/ListPage";
import NotFound from "./pages/NotFound";
import Navbar from "./components/Navbar";
import GlobalLoading from "./components/GlobalLoading";

function App() {
  return (
    <>
      <Navbar />
      <GlobalLoading />
      <Routes>
        <Route path="/" element={<ListPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Toaster position="bottom-right" />
    </>
  );
}

export default App;
