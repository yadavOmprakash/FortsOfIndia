import { React, useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
//install this npm i react-router-dom//
import TopNavbar from "./components/TopNavbar";
import Menubar from "./components/Menubar";
import Footer from "./components/Footer";
import About from "./pages/About";
import Archives from "./pages/Archives";
import Manuscripts from "./pages/Manuscripts";
import Stories from "./pages/Stories";
import Videos from "./pages/Videos";
import Audios from "./pages/Audios";
import Images from "./pages/Images";
import HomeGalleryList from "./components/HomeGalleryList";
import Home from "./pages/Home";
import { ArrowUp } from "react-feather";
import UnderConst from "./components/UnderConst";
import { useContext } from "react";
import { ThemeContext } from "./ThemeContext";
import AllCategories from "./components/AllCategories";
import FreedomArchive from "./components/FreedomArchive";
import LtwoDidYouKnow from "./components/LtwoDidYouKnow";
import LtwoTodayinHistory from "./components/LtwoTodayinHistory";
import Rarebooks from "./pages/Rarebooks";
import ReportsandProceedings from "./pages/Reports_and_proceedings";
import ResearchPaper from "./pages/ReseacrhPaper";
import Paintings from "./pages/Paintings";
import Unesco from "./pages/Unesco";
import PhotoArchives from "./pages/Photo_archives";
import Ebooks from "./pages/E-books";
import GazettesAndGazetteers from "./pages/Gazettes_and_gazetteers";
import FortsOfIndia from "./pages/FortsOfIndia";
import UnderstandingForts from "./components/UnderstandingForts";
import FortHistory from "./components/FortHistory";
import FortsOfIndiaListpage from "./components/FortsOfIndiaListpage";
import FortsFreedom from "./components/FortsFreedom";
import FortsFreedomResultpage from "./components/FortsFreedomResultpage";

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  // back to top btn
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);

    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className={`theme-${theme}`}>
        <label className="switch toggle">
          <input type="checkbox" />
          <span className="slider round" onClick={toggleTheme}></span>

          {/* <a href="#/" onClick={toggleTheme}><span className="" ></span> <span className="btnborder">A</span></a> */}
        </label>

        {isVisible && (
          <button onClick={scrollToTop} className="back-to-top-button">
            <ArrowUp style={{ marginLeft: "-1px" }} />
          </button>
        )}

        <Router>
          <TopNavbar />
          <Menubar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/archives" element={<Archives />} />
            <Route path="/Gazettes_and_gazetteers" element={<GazettesAndGazetteers />} />
            <Route path="/videos" element={<Videos />} />
            <Route path="/Manuscripts" element={<Manuscripts />} />
            <Route path="/vudios" element={<Audios />} />
            <Route path="/E-books" element={<Ebooks />} />
            <Route path="/Stories" element={<Stories />} />
            <Route path="/Images" element={<Images />} />
            <Route path="/galleryview" element={<HomeGalleryList />} />
            <Route path="/underconstructor" element={<UnderConst />} />
            <Route path="/allcategories" element={<AllCategories />} />
            <Route path="/freedomarchive" element={<FreedomArchive />} />
            <Route path="/ltwodidyouknow" element={<LtwoDidYouKnow />} />
            <Route path="/ltwotodayinhistory" element={<LtwoTodayinHistory />} />
            <Route path="/rare_books" element={<Rarebooks />} />
            <Route path="/reports_&_proceedings" element={<ReportsandProceedings />} />
            <Route path="/research_papers" element={<ResearchPaper />} />
            <Route path="/paintings" element={<Paintings />} />
            <Route path="/unesco" element={<Unesco />} />
            <Route path="/photo_archives" element={<PhotoArchives />} />
            <Route path="/forts_of_india" element={<FortsOfIndia />} />
            <Route path='/historylistpage' element={<FortHistory/>}/>
            <Route path='/discoveringfortslistpage' element={<FortsOfIndiaListpage/>}/>


            <Route path="/fortsofindialistpage" element={<UnderstandingForts />} />
            <Route path="/understandingfortslistpage" element={<UnderstandingForts />} />


            <Route path='/fortsfreedom' element={<FortsFreedom/>}/>

            <Route path="/fortsfreedomresultpage" element={<FortsFreedomResultpage />} />


          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
