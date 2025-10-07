import { useState } from "react";
import Nav from "./components/Nav";
import Intro from "./pages/Intro/Intro";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Experience from "./pages/Experience";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import Contact from "./pages/Contact";
import "./App.css";

export default function App() {
    // const [introDone, setIntroDone] = useState(false);
    //
    // if (!introDone) {
    //     // Only the intro is rendered
    //     return (
    //         <main className="intro">
    //             {/* Give Intro a callback so it can tell App when finished */}
    //             <Intro onDone={() => setIntroDone(true)} />
    //         </main>
    //     );
    // }

    // Once intro finishes, render the rest of the site
    return (
        <>
            <Nav />
            <main className="page" id="page">
                <section id="home"><Home /></section>
                <section id="about"><About /></section>
                <section id="experience"><Experience /></section>
                <section id="projects"><Projects /></section>
                <section id="skills"><Skills /></section>
                <section id="contact"><Contact /></section>
            </main>
        </>
    );
}
