import React from 'react';
import Cards from '../cards/cards';
import styles from "./projects.module.scss";
import { Timeline, TimelineItem, TimelineSeparator, TimelineConnector, TimelineContent, TimelineOppositeContent } from '@mui/lab';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';

const Projects = () => {

    const ProjectsData = [
        {
            heading: "Credit One Bank",
            description: "Developed a Weather Forecasting application using React.js and Material-UI. The application allows users to search for weather forecasts by city name, providing detailed predictions for the next 5-6 days at 3-hour intervals. Simplifies weather tracking and planning, providing users with precise weather insights for effective decision-making.",
            technologies: ["ReactJS", "JavaScript (ES6+)", "React Native", "State Management (Redux, Context API, Redux Toolkit)", "TypeScript", "Jest", "Cypress", "CSS3", "SASS", "UI/UX Design Implementation", "Responsive Design", "Web Accessibility ", "GitHub", "CI/CD Pipelines", "RESTful API Integration", "Performance Optimization", "Mobile-first Design", "Cross-Platform Development (Web & Mobile)", "Agile Methodologies", "Webpack & Babel", "Stencil.js", "Visual Studio Code", "Node.js", "ESLint & Prettier", "WebSocket Integration", "Material-UI", "Tailwind CSS", "HTML5"],

        },
        {
            heading: "Indian Vendors",
            description: "In the pandemic, vendors were not able to sell their products, so we developed a centralized website where the admin can add vendors through the dashboard. Vendors can upload or delete their products from their dashboard. Users can comment, and the system detects slang words to prevent inappropriate comments using sentiment analysis. Developed a login/signup page for authentication.",
            technologies: ["Angular12", "JavaScript", "Firebase", "HTML5", "CSS3", "Bootstrap4"],

        },
        {
            heading: "SONG/ARTIST RECOMMENDATION SYSTEM USING SPARK STREAMING",
            description: "The Song/Artist Recommendation System using Spark Streaming enhances user experience on music streaming platforms by providing personalized recommendations in real-time. Using Apache Spark, PySpark, PySpark SQL, FindSpark, and MLlib, the system processes user data to recommend songs and artists based on listening history.",
            technologies: ["Apache Spark", "PySpark", "SQL", "MLLIB", "Python", "Big Data", "Data Visualization"],

        },
        {
            heading: "Portfolio",
            description: "A responsive personal portfolio showcasing my skills, projects, and professional experience. This website serves as a central hub for visitors to learn about my background, view my projects, and contact me for opportunities.",
            technologies: ["JavaScript", "HTML5", "CSS3", "SCSS", "UI/UX", "Version Control"],

        },
        // Other projects...
    ];

    return (
        <section id="projects" className={styles.projects}>
            <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 justify-left overflow-hidden`}>
                <div className={`flex-[0.6] p-10 md:p-16 lg:p-20 rounded-2xl`}>
                    <p className={`main_color`}>
                        My Work
                    </p>
                    <h2 className={`main_color`}>
                        Projects
                    </h2>
                    <div className={`text-lg`}>
                        Here are some of the projects and websites I've worked on that demonstrate the skills I've developed throughout my education and 10+ years of professional experience.
                        These projects highlight my ability to tackle complex challenges, collaborate with diverse teams, utilize various technologies, and effectively manage projects to deliver high-quality results.
                    </div>
                </div>
            </div>

            <div className={`p-10 md:p-16 lg:p-20 md:pt-0 lg:pt-0 pt-0 ${styles.projects_container}`}>
                <Timeline>
                    {ProjectsData.map((project, index) => {
                        return (
                            <TimelineItem className={styles.timeline_item} key={index}>
                                <TimelineOppositeContent color="text.secondary">
                                    <h6>{project.heading}</h6>
                                </TimelineOppositeContent>

                                <TimelineSeparator>
                                    <span className={styles.experience_icon}>
                                        <WorkIcon />
                                    </span>
                                    <TimelineConnector />
                                </TimelineSeparator>

                                <TimelineContent>
                                    <Cards data={project} index={index} />
                                </TimelineContent>
                            </TimelineItem>
                        )
                    })}
                </Timeline>
            </div>
        </section>
    );
}

export default Projects;
