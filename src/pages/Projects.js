import Project from "../components/Project";
import Image from "../assets/images/appointment.jpg";
import { useState } from "react";

const projects = [
    {
        title: "Appointment Setter",
        description:
            "User's can sign in and make appointments which will then trigger an email or SMS message confirmation depending on their choice. Built in React with Javascript",
        github: "https://github.com/Pettyjohnboi/react-appointment-setter",
        demo: "https://pettyjohnboi.github.io/react-appointment-setter",
        image: { Image },
    },
    {
        title: "Vice Virture Vouche",
        description:
            " A fresh new way to look at Tic Tac Toe built with PHP. Vice side tics with alcohol, weed, etc. Virtues tacs with water, sleep, etc. ",
        github: "https://github.com/yourusername/project2",
        demo: "https://yourusername.github.io/project2",
        image: { Image },
    },
    {
        title: "Movie Rating",
        description:
            "User's can sign in to then rate different movies through a database populated with an API from themoviedb.org. User's can also view the average rating each movie gets across multiple users",
        github: "https://github.com/MarekAlexPolak/Rated-Movie-List",
        demo: "https://yourusername.github.io/test",
        image: { Image },
    },
    {
        title: "Test",
        description: "Test",
        github: "https://github.com/yourusername/test",
        demo: "https://yourusername.github.io/test",
        image: { Image },
    },

    // Add more projects as needed
];

function Projects() {
    const handleProjectDemo = (index) => {
        console.log(index);
        setProjectDetails(projects[index]);
        console.log(projectDetails);
    };

    const [projectDetails, setProjectDetails] = useState({});

    return (
        <div className="project-main">
            <div className="project-container">
                {projects.map((project, index) => (
                    <div onClick={() => handleProjectDemo(index)}>
                        <Project key={index} {...project} />
                    </div>
                ))}
            </div>
            <div className="project-details-container">
                <h2>{projectDetails.title}</h2>
                <p>{projectDetails.description}</p>
            </div>
        </div>
    );
}

export default Projects;
