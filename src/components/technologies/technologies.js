import React from 'react'
import styles from "./technologies.module.scss";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
    faHtml5,
    faCss3,
    faJs,
    faJava,
    faReact,
    faNode,
    faSass,
    faPython,
    faAngular,
    faAws,

    faGithub,  // GitHub icon
    faGoogle,  // GCP (Google Cloud Platform) icon
} from '@fortawesome/free-brands-svg-icons'

// Import faMobileAlt from the solid icons only
import { faMobileAlt } from '@fortawesome/free-solid-svg-icons';

const Technologies = () => {
    const techIcons = [
        {
            icon: faHtml5,
            name: "HTML5"
        }, {
            icon: faCss3,
            name: "CSS3"
        }, {
            icon: faJs,
            name: "JavaScript"
        }, {
            icon: faReact,
            name: "ReactJS"
        }, {
            icon: faAngular,
            name: "Angular"
        }, {
            icon: faJava,
            name: "Java"
        }, {
            icon: faNode,
            name: "NodeJS"
        }, {
            icon: faSass,
            name: "SASS"
        }, {
            icon: faPython,
            name: "Python"
        }, {
            icon: faAws,
            name: "AWS"
        }, {
            icon: faGithub,
            name: "GitHub"
        }, {
            icon: faGoogle,
            name: "GCP"  // Google Cloud Platform
        }, {
            icon: faMobileAlt,
            name: "React Native"
        }, {
            icon: faJs,
            name: "Single Page Apps (SPA)"
        }, {
            icon: faJs,
            name: "REST APIs"
        }
    ];

    return (
        <section className="p-5 md:p-16 lg:p-20 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
            {techIcons.map((item, index) => (
                <div key={index} className="flex flex-col items-center text-center">
                    <FontAwesomeIcon icon={item.icon} className="text-4xl mb-2" />
                    <p>{item.name}</p>
                </div>
            ))}
        </section>


    );
};

export default Technologies;
