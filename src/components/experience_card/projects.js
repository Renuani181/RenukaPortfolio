import React from 'react';
// import CreditCard from "../../assets/credit_card.png";
import Cards from '../cards/cards';

import styles from "./projects.module.scss"


const Projects = () => {

    const ProjectsData = [
        {
            heading: "Personal Finance Tracker",
            description: "Developed a comprehensive Personal Finance Tracker application using React.js and Chart.js. The app enables users to track expenses, set budgets, and analyze spending habits through interactive charts and reports. Incorporated responsive design and data persistence with local storage for seamless cross-device usage.",
            technologies: ["ReactJS", "Javascript", "Chart.js", "HTML5", "CSS3"],
        },
        {
            heading: "Health and Fitness App",
            description: "Designed a Health and Fitness mobile application using React Native. Features include a daily workout planner, calorie tracker, and personalized diet recommendations based on user inputs. Leveraged Firebase for real-time data storage and user authentication, ensuring a secure and dynamic experience.",
            technologies: ["React Native", "Firebase", "Javascript", "CSS3", "Redux"],
        },
        {
            heading: "AI Chatbot for Customer Support",
            description: "Built an AI-driven Chatbot using React.js and Flask for eCommerce customer support. The bot assists users in navigating the website, answering common queries, and resolving complaints. Integrated natural language processing (NLP) capabilities for contextual understanding.",
            technologies: ["ReactJS", "Flask", "Python", "NLP", "MaterialUI"],
        },
        {
            heading: "Travel Booking Website",
            description: "Developed a fully responsive Travel Booking website with dynamic search and filter capabilities. Integrated APIs to display live ticket availability, weather updates, and destination details. Enhanced the user experience with interactive animations and streamlined booking flows.",
            technologies: ["Angular", "Javascript", "Bootstrap", "HTML5", "CSS3"],
        },
        {
            heading: "Cryptocurrency Dashboard",
            description: "Created a Cryptocurrency Dashboard using React.js and Redux for real-time price tracking and portfolio management. The dashboard integrates with public APIs to fetch live market data and historical trends. Features include candlestick charts, portfolio analytics, and a news feed.",
            technologies: ["ReactJS", "Redux", "APIs", "D3.js", "SCSS"],
        },
        {
            heading: "Language Learning Platform",
            description: "Developed a gamified language learning platform with an intuitive UI for students. The platform includes interactive exercises, quizzes, and real-time pronunciation feedback using Web Speech API. Implemented leaderboards and progress tracking to encourage user engagement.",
            technologies: ["ReactJS", "Javascript", "Web Speech API", "HTML5", "CSS3"],
        },
        {
            heading: "Recipe Finder App",
            description: "Built a Recipe Finder mobile app that allows users to search for recipes by ingredients, dietary preferences, and cuisine type. Features include an interactive shopping list and step-by-step cooking instructions. Leveraged RESTful APIs for dynamic recipe fetching.",
            technologies: ["React Native", "REST APIs", "Redux", "HTML5", "CSS3"],
        },
        {
            heading: "Event Management System",
            description: "Designed and implemented an Event Management System where users can create, join, and manage events. Features include real-time notifications, interactive event calendars, and integration with Google Maps for location tracking. Optimized for mobile-first design.",
            technologies: ["VueJS", "Firebase", "CSS3", "Javascript", "SCSS"],
        }
    ];

    return (
        <section id="projects" className={styles.projects}>
            <div className={`xl:mt-12 flex xl:flex-row flex-col-reverse gap-10 justify-left overflow-hidden `}>
                <div className={`flex-[0.6] p-10 md:p-16 lg:p-20 rounded-2xl`}>
                    <p className={`main_color`}>
                        My Work
                    </p>
                    <h2 className={`main_color`}>
                        Projects
                    </h2>
                    <div className={`text-lg`}>
                        Following are some projects and Websites i worked on that showcases my skills I gained throughout my Professional experience.
                        It reflects my ability to solve complex problems, work with different technologies, and manage projects effectively.
                    </div>
                </div>
            </div>
            <div className={` p-10 md:p-16 lg:p-20 md:pt-0 lg:pt-0 pt-0 ` + styles.projects_container}>
                {ProjectsData.map((project, index) => {
                    return (
                        <Cards data={project} index={index} key={index} />
                    )
                })
                }
            </div>
        </section>
    )
}

export default Projects;