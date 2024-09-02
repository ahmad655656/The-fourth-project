import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './Pages/Home/Home'
import About from './Pages/About/About'
import SmallNavBar from './Sections/SmallNavBar/SmallNavBar'
import Portfolio from './Pages/Portfolio/Portfolio'
import Contact from './Pages/Contact/Contact';
import Footer from './Sections/Footer/Footer';
function App() {
  return (
    <div className=" bg-mainBackground text-secondTextColor relative flex flex-col items-center justify-between w-full m-auto overflow-hidden min-h-[100vh]">
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
