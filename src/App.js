import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import SmallNavBar from './Sections/SmallNavBar/SmallNavBar'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact';
import Footer from './Sections/Footer/Footer';
function App() {
  return (
    <div className="after:fixed after:w-[100px] after:h-[100px] after:top-[100px] after:right-[100px] after:bg-mainTextColor after:text-center after:content-['Download_Cv'] after:pt-[10px] after:text-[20px] after:text-theardTextColor bg-mainBackground text-secondTextColor relative flex flex-col items-center justify-between w-full m-auto overflow-hidden min-h-[100vh]">
      <Router>
        <SmallNavBar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/about' element={<About />} />
          <Route path='/portfolio' element={<Portfolio />} />
          <Route path='/contact' element={<Contact />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
