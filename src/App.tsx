import "./App.css";
import Hero from "./pages/Hero/Hero.tsx";
import Overview from "./pages/Overview/Overview.tsx";
import Footer from "./components/Footer/Footer.tsx";
import Cta from "./pages/CTA/CTA.tsx";
import Pricing from "./pages/Pricing/Pricing.tsx";
import Faq from "./pages/FAQ/FAQ.tsx";
import Deliverables from "./pages/Deliverables/Deliverables.tsx";
import Process from "./pages/Process/Process.tsx";
import ProductInformation from "./pages/ProductInformation/ProductInformation.tsx";
import Service from "./pages/Service/Service.tsx";
import ServiceBar from "./pages/ServiceBar/ServiceBar.tsx";

export default function App() {
    return (
        <main className="page" id="page">
            {/*/!*<Navigation />*!/ TODO: Update Navigation styling*/}
            <Hero/>
            <ServiceBar/>
            <Service/>
            <Overview/>
            <ProductInformation/>
            <Process/>
            <Deliverables/>
            <Faq/>
            <Pricing/>
            <Cta/>
            <Footer/>
        </main>
    );
}
