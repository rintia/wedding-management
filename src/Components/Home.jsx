
import { useEffect, useState } from "react";
import Banner from "./Banner";
import Card from "./Card";
import Footer from "./Footer";
import FAQ from "./FAQ";
import AboutUs from "./AboutUs";
import Aos from "aos";
import 'aos/dist/aos.css'



const Home = () => {
    const [cards, setCards] = useState([]);
    useEffect(() => {
        fetch('/data.json')
        .then(res => res.json())
        .then(data => setCards(data))
    }, [])

    useEffect(()=> {
        Aos.init({duration:500})
    },[])
    
    return (
        <div>
            <Banner></Banner>
            <h2 className="text-4xl text-dark mt-20 font-semibold text-center">Our Services</h2>
           <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 my-8 max-w-screen-xl  mx-auto">
           {
                cards.map(card => <Card key={card.id} card={card}></Card>)
            }
           </div>
           <div className="px-12" data-aos='fade-right'>
           <AboutUs></AboutUs>
           </div>
          
           <FAQ></FAQ>
            <Footer></Footer>
        </div>
    );
};

export default Home;