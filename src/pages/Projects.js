import Project from "../components/Project";

const projects = [
    {
      title: 'Appointment Setter',
      description: "User's can sign in and make appointments which will then trigger an email or SMS message confirmation depending on their choice",
      github: 'https://github.com/Pettyjohnboi/react-appointment-setter',
      demo: 'https://pettyjohnboi.github.io/react-appointment-setter',
    },
    {
      title: 'Vice Virture Vouche',
      description: 'Description for Project 2',
      github: 'https://github.com/yourusername/project2',
      demo: 'https://yourusername.github.io/project2',
    },
    // Add more projects as needed
  ];

function Projects(){

    return (
        <div className="project-main">
            {projects.map((project, index) => (
                        <Project key={index} {...project} />
            ))}
        </div>
    );
}

export default Projects;