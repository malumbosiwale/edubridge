import hero_image from './assets/hero.jpg'
import HeroComponent from './components/hero/hero.component.jsx'
import About from './components/about/About'
import Social from './components/social/Social';
import Products from './components/products/Products';
// import Workstation from './components/workstation/Workstation'
import Contact from './components/contact/Contact';
// import Language from "./components/social/Social.jsx";
import Footer from "./Footer.jsx";
// import StudyAbroadCarousel from "./components/study-abroad/ui/StudyAbroadCarousel.jsx";
import {useEffect} from "react";
import DefaultNavbar from "./components/navbar/navbar.component.jsx";
import Banner from "./components/banner/Banner.jsx";
import Book from "./components/workstation/Workstation";
import Slider from "./components/slider/Slider.jsx";
import Subscribe from "./components/subscribe/Subscribe.jsx";
import Carousel from "./components/carousel/carousel.component.jsx";



const App = () => {
    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    return (
    <div className="">
        <DefaultNavbar />

        <div className="">
            <HeroComponent
                title="We ensure you that we are the Best Study center"
                image={hero_image}
                description="
                At our online study center, we pride ourselves on
                 delivering personalized, high-quality education 
                 tailored to each student's unique needs, ensuring they 
                 receive the most effective support possible. Our cutting-edge
                  technology and expert instructors provide an engaging and interactive learning
                 experience, making complex subjects accessible and enjoyable.
                "
                button="Get Started"
           />
            <div className="bg-white">
             <About />
            </div>

            {/*<Banner />*/}
            <Products />
            <Social />
            {/*<Book />*/}
            <Contact />

            <Slider />
            {/*<Carousel />*/}
            <Subscribe />
        </div>
        <Footer />
    </div>
  )
}

export default App
