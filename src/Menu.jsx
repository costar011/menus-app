import {Swiper, SwiperSlide} from "swiper/react";
import {Navigation} from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "./styles.css";
import { useState } from "react";

const navs = [
    <div>
        <h2>About</h2>
        <nav>
            <a style={{animationDelay: "0.8s"}}>Profile</a>
            <a style={{animationDelay: "0.9s"}}>Skills</a>
            <a style={{animationDelay: "1s"}}>Education</a>
        </nav>
    </div>
]

export const Menu = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => setIsOpen(!isOpen);

    const openClass = isOpen ? "open" : "";

    return (
        <>
            <div className={`backgorund ${openClass}`}></div>
            <button className={`burger ${openClass}`}onclick={toggleMenu}></button>
            <div className={`menu ${openClass}`}>
                <Swiper speed={750}></Swiper>
            </div>
        </>
    )
}