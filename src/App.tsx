import Intro from "./pages/Intro/Intro";
import About from "./pages/About/About.tsx";
import Experience from "./pages/Experience/Experience.tsx";
import Projects from "./pages/Projects/Projects.tsx";
import Skills from "./pages/Skills/Skills.tsx";
import Contact from "./pages/Contact/Contact.tsx";
import "./App.css";

export default function App() {
    return (
        <>
            <main className="page" id="page">
                <section id="intro"><Intro/></section>
                <section id="about"><About /></section>
                <section id="experience"><Experience /></section>
                <section id="projects"><Projects /></section>
                <section id="skills"><Skills /></section>
                <section id="contact"><Contact /></section>
            </main>
        </>
    );
}
