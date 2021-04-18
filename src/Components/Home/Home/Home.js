import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Service from '../Service/Service';
import Statistics from '../Statistics/Statistics';
import Contact from '../Contact/Contact';
import Review from '../Review/Review';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Service></Service>
            <Review></Review>
            <Statistics></Statistics>
            <Contact></Contact>
            <Footer></Footer>
        </div>
    );
};

export default Home;