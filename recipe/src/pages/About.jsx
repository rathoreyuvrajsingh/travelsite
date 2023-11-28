import React from 'react';
import "./About.css";
import Navbar from "../components/Navbar"
import Footer from '../components/Footer';
const About = () => {
    return (
        <div>
            <Navbar />
            <div className="background" id='about'>
                <img src="https://plus.unsplash.com/premium_photo-1661631018149-a0268211bbd3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" alt="" />
                <h2>Who We Are?</h2>
                <p>Yumm is here to help you cook delicious meals with less stress and more joy. <br /> We offer recipes and cooking advice for home cooks, by home cooks. <br /> Helping create “kitchen wins” is what we’re all about.</p>
            </div>
            <Footer />
        </div>
    )
}

export default About;
