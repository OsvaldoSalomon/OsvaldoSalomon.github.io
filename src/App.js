import './App.css';
import Header from "./components/header/Header";
import Home from "./components/home/Home";
import About from "./components/about/About";
import Skills from "./components/skills/Skills";
import Work from "./components/work/Work";
import Footer from "./components/footer/Footer";
import Contact from "./components/contact/Contact";
import Qualification from "./components/qualification/Qualification";

function App() {
    return (
        <>
            <Header />
            <main className="main">
                <Home />
                <About />
                <Skills />
                <Qualification />
                <Work />
                <Contact />
                <Footer />
            </main>
        </>
    );
}

export default App;
