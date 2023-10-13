import Image from '../assets/images/icon.jpg';

function AboutMe(){


    return (
        <div className="about-main">
            <div className="about-container">
                <div className="about-img"> 
                    <img class="about-logo" src={Image} alt="This is me"></img>
                </div>
                <div className="about-message"> 
                    <span>&nbsp;&nbsp;&nbsp;I graduated at Queen's University in Computer Science in 2021.
                        Giving me skills in Java, Python, C#, and Javascript as my main programming
                        languages. My main concept skills would be Object oriented programming,
                        game development, and web development. The reason I chose programming as my main interest
                        is because my vision was to develop games geared towards 
                        mental illness. Now my passion is geared more towards Front-end 
                        development, looking to expand my knowledge each day.</span>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;