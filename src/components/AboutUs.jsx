import React from "react";
import './about.css';
import { Typography, Image } from 'antd'
import image from '../images/cryptocurrency1.png';
const { Title } = Typography

const AboutUs = () => {
    return (
        <>
            <Title level={1} className="heading" style={{ display: "flex", alignItems: "center", justifyContent: "center", marginTop: "1rem" }}>
                About Us
            </Title>
            <div className="container heading">
                <div id="welcomeText">
                    Welcome to our Coinverse information website! We are a team of passionate individuals dedicated to providing you with the latest and most comprehensive information about the world of crypto-currencies.
                </div>
                <Image className='icon-logo' src={image} preview={false} />
            </div>
            <div className="heading">

                <div class="welcomeText2">

                    Our team consists of experienced professionals with a deep understanding of the blockchain technology and the crypto-currency market. We are committed to bringing you accurate, reliable, and up-to-date information about the most popular crypto-currencies, as well as the emerging ones.

                    We understand that the world of crypto-currencies can be overwhelming, and that's why we are here to help. Our goal is to provide you with easy-to-understand explanations of complex concepts, and to help you navigate the fast-paced and ever-changing world of crypto-currencies.
                </div>
            </div>
            <div className="heading">

            <div class="welcomeText2">

                Whether you are a seasoned crypto-currency investor or just starting out, our website has something for you. From in-depth analyses of the most popular crypto-currencies to beginner-friendly guides on how to buy and sell crypto-currencies, we've got you covered.

                At our website, we are committed to providing you with a safe and secure platform to learn about crypto-currencies. We prioritize your security and privacy, and we are dedicated to protecting your personal information at all times.

            </div>
            </div>
            <div className="welcomeText2" id="gradient">

                Thank you for choosing our website as your go-to source for all things crypto-currency. We look forward to helping you navigate the exciting world of crypto-currencies!
            </div>
        </>
    );
}

export default AboutUs;