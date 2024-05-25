
import './App.css';
import Home from './Components/Home/Home';
import About from './Components/About';
import Contact from './Components/contact';
import Footer from './Components/footer';

function App() {
  return (
    <div>


      <Home/>
     <About/>
     <Contact/>
     <Footer/> 
     
    {/* <BrowserRouter>
      <Routes>
        <Route index element ={<Home />} />
        <Route path='/home' element ={<Home />} />
        <Route path='/about' element ={<About />} />
        <Route path='/contact' element ={<Contact />} />
        <Route path='*' element ={<No_page />} />
      </Routes>
    </BrowserRouter>  */}

     
    </div>
  );
}

export default App;
