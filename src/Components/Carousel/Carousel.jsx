import "./Carousel.css";
import wedPic1 from "../../assets/wed1.jpg";
import wedPic2 from "../../assets/wed2.jpg";
import wedPic3 from "../../assets/wed3.webp";
import wedPic4 from "../../assets/wed4.jpg";

const Carousel = () => {
    return (
        <section className="first-section">
        <div className="banner1">
            <img src={wedPic1} alt=""/>
            <div className="overlay">
                <div className="text-box text-box1">
                    <h1>“If I get married, I want to be very married.”</h1>
                    <span></span>
                     <p>A marriage in our society is perceived as a mere ritual to bring two families together. I don’t see it as a tradition that need to be followed just for the sake of it. You might not agree with the way I see this beautiful bond of two souls, but I think, the meaning of marriage is much bigger than our society tries to define.</p>
                </div>
            </div>
        </div>
        <div className="banner2">
            <img src={wedPic2}alt=""/>
            <div className="overlay">
                <div className="text-box text-box2">
                    <h1>“Grow old along with me; the best is yet to be.”</h1>
                    <span></span>
                     <p>Marriage is not a social or traditional compulsion. Two people decide to spend their lives together. They don’t enter into an agreement of compromise. Yes, we do need to make some sacrifices for our loved ones. But, it should not be taken for granted, which is quite common in our society.
                     </p>
                </div>
            </div>
        </div>
        <div className="banner3">
            <img src={wedPic3} alt=""/>
            <div className="overlay">
                <div className="text-box text-box3">
                    <h1>“Love is being stupid together.”</h1>
                    <span></span>
                     <p>Marriage can be described as a bond/commitment between a man and a woman. Also, this bond is strongly connected with love, tolerance, support, and harmony. Also, creating a family means to enter a new stage of social advancement. Marriages help in founding the new relationship between females and males.
                     </p>
                </div>
            </div>
        </div>
        <div className="banner4">
            <img src={wedPic4} alt=""/>
            <div className="overlay">
                <div className="text-box text-box4">
                    <h1>“We loved a love that was more than love.”</h1>
                    <span></span>
                     <p>Whenever we think about marriage, the first thing that comes to our mind is the long-lasting relationship. Also, for everyone, marriage is one of the most important decisions in their life. Because you are choosing to live your whole life with that 1 person. Thus, when people decide to get married, they think of having a lovely family.
                     </p>
                </div>
            </div>
        </div>
    </section>
    );
};

export default Carousel;