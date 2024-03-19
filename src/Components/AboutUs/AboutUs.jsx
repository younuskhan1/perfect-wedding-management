import "./AboutUs.css";
import aboutUs from "../../aboutUsImages/about-us.jpg";
import vision from "../../aboutUsImages/vision.jpg";
import mission from "../../aboutUsImages/mission.jpg";

const AboutUs = () => {
    return (
        <div>
            <div className="about-us-image-container">
                <img src={aboutUs} alt="" />
            </div>
            <div className="story">
                <h1>Our Story</h1>
                <p className="story-first-para">In 2014, after eight years of corporate events work in Dhaka, creating and running events ranging from three days conferences for 300 people to small breakfast workshops and celebratory dinners, I moved to Dohar with my wife Layla Chowdhury .Working with an outstanding team of local industry professionals, I have the privilege of running Island Collection, combining my penchant for creating memorable, beautiful and seamless events with a comprehensive knowledge of Dohar. People my City Collection clients are at the heart of what I do. Everyone has a dream, a vision, a wish-list for their wedding or special event and my role is to transform ideas into reality.</p>
                <p className="story-second-para">When Layla Chowdhury and I married on my parents property in the Gulshan, we had a marquee and planned every detail ourselves, hiring pretty much everything, right down to the teaspoons. It was fun, but so much work! I really learned the value of getting help, especially having someone come in and run the day, enabling the bride, groom and their families to be in the moment and enjoy themselves.</p>
            </div>
            <div className="vision-container">
                <div>
                    <img src={vision} alt="" />
                </div>
                <p>The vision statement is the North Star of your overall company strategy, it is where you want to be as a business in the future. A good vision statement acts as motivation for employees and provides guidance on long-term goal setting. Wondering why it matters? According to a January 2022 survey by Gartner, 52% of surveyed employees said the pandemic made them question the purpose of their day-to-day job. What can you get from unmotivated employees? Well, probably wasted money and slower business growth. But that is a story for another day.</p>
            </div>
            <div className="mission-container">
                <p>The mission statement is the North Star of your overall company strategy, it is where you want to be as a business in the future. A good vision statement acts as motivation for employees and provides guidance on long-term goal setting. Wondering why it matters? According to a January 2022 survey by Gartner, 52% of surveyed employees said the pandemic made them question the purpose of their day-to-day job. What can you get from unmotivated employees? Well, probably wasted money and slower business growth. But that is a story for another day.</p>
                <div>
                    <img src={mission} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AboutUs;