import Project from "../components/Project";
import Image from "../assets/images/appointment.jpg";

const projects = [
    {
      title: 'Appointment Setter',
      description: "User's can sign in and make appointments which will then trigger an email or SMS message confirmation depending on their choice. Built in React with Javascript",
      github: 'https://github.com/Pettyjohnboi/react-appointment-setter',
      demo: 'https://pettyjohnboi.github.io/react-appointment-setter',
      image: {Image},
    },
    {
      title: 'Vice Virture Vouche',
      description: ' A fresh new way to look at Tic Tac Toe built with PHP. Vice side tics with alcohol, weed, etc. Virtues tacs with water, sleep, etc. ',
      github: 'https://github.com/yourusername/project2',
      demo: 'https://yourusername.github.io/project2',
      image: {Image},
    },
    {
      title: 'Test',
      description: 'Test',
      github: 'https://github.com/yourusername/test',
      demo: 'https://yourusername.github.io/test',
      image: {Image},
    },
    {
      title: 'Test',
      description: 'Test',
      github: 'https://github.com/yourusername/test',
      demo: 'https://yourusername.github.io/test',
      image: {Image},
    },
    
    // Add more projects as needed
  ];

function Projects(){
    return (
      <div className="project-main">
        <div className="project-container">
            {projects.map((project, index) => (
                        <Project key={index} {...project} />
            ))}
        </div>
      </div>
    );
}

export default Projects;