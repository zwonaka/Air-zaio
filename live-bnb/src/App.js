import Header from "./Components/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/Footer/Footer";
import { HashRouter,BrowserRouter, Route, Routes } from "react-router-dom";
import SearchPage from "./Components/SearchPage/SearchPage";

function App() {
  return (
    <HashRouter>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/search" element={<SearchPage />} />
          <Route path="/" element={<Home />} />
        </Routes>
        <Footer />
      </div>
    </HashRouter>
  );
}

export default App;
