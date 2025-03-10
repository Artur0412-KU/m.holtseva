import About from "./components/About/About"
import Carousel from "./components/Carousel/Carousel"
import Contact from "./components/Contact/Contact"
import Courses from "./components/Courses/Courses"
import Footer from "./components/Footer/Footer"
import Header from "./components/Header/Header"
import Main from "./components/Main/Main"
import Sertificates from "./components/Sertificates/Sertificates"

function App() {
  return (
    <div>
      <Header/>
      <Main/>
      <About/>
      <Courses/>
      <Sertificates/>
      <Carousel/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App
