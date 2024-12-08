import React from 'react';
import styles from "./experience.module.scss";
import useMediaQuery from '@mui/material/useMediaQuery';
import SchoolIcon from '@mui/icons-material/School';
import WorkIcon from '@mui/icons-material/Work';
import {
    TimelineConnector,
    TimelineContent,
    TimelineItem,
    TimelineOppositeContent,
    TimelineSeparator,
    Timeline,
    timelineContentClasses,
} from '@mui/lab';
import ExperienceCard from "../experience_card/ExperienceCard";

const Experience = () => {
    const matches = useMediaQuery('(min-width:600px)');
    const experienceData = [
        {
            timeline: "2023 - Present",
            type: "Work",
            title: "Sr Frontend UI React Lead",
            location: "Credit One Bank, Las Vegas, NV",
            summary: [
                "Spearheading frontend development for critical banking applications using React and Angular.",
                "Implemented a dynamic component library to improve code reusability across teams.",
                "Leading a project to redesign the bank’s customer portal, enhancing user engagement by 35%."
            ]
        },
        {
            timeline: "Mar 2023 - Jan 2024",
            type: "Work",
            title: "Sr Frontend React/Native",
            location: "Fiserv, GA",
            summary: [
                "Developed the frontend for an online payment gateway, enabling seamless transactions for millions of users.",
                "Led the migration of legacy Angular code to React, reducing application load time by 20%.",
                "Enhanced accessibility compliance (WCAG 2.0) across the entire application suite."
            ]
        },
        {
            timeline: "Jan 2022 - Feb 2023",
            type: "Work",
            title: "Sr UI React Developer",
            location: "Kaiser Permanente, Pleasanton, CA",
            summary: [
                "Developed a patient portal using React, improving appointment scheduling efficiency by 40%.",
                "Collaborated with backend teams to integrate APIs for real-time patient data retrieval.",
                "Optimized the performance of a healthcare dashboard, reducing load times by 15%."
            ]
        },
        {
            timeline: "Mar 2019 - Dec 2021",
            type: "Work",
            title: " Sr UI Application Developer/React JS",
            location: "TIAA, TX",
            summary: [
                "Built and maintained a secure retirement planning application using React and Redux.",
                "Implemented dynamic charting libraries (e.g., D3.js) for data visualization.",
                "Enhanced application security features, aligning with financial compliance standards."
            ]
        },
        {
            timeline: "Aug 2016 - Dec 2018",
            type: "Work",
            title: "UI Application Developer",
            location: "UV Fortune, Hyderabad, India",
            summary: [
                "Developed an e-commerce platform with Angular, supporting over 50,000 active users.",
                "Created reusable Angular components for a streamlined shopping experience.",
                "Collaborated with UX designers to implement responsive design principles."
            ]
        },
        {
            timeline: "May 2013 - Jul 2016",
            type: "Work",
            title: "Front End Engineer",
            location: "Sonata Software Ltd, Hyderabad, India",
            summary: [
                "Contributed to the development of a CRM application using HTML, CSS, and JavaScript.",
                "Implemented cross-browser compatibility fixes, enhancing the application’s reach.",
                "Led UI redesign efforts, improving usability metrics by 25%."
            ]
        }
    ];

    return (
        <section id="experience" className={`p-5 md:p-16 lg:p-20 rounded-2xl ${styles.experience}`}>
            <p className={`px-5 md:px-0 main_color`}>
                What I have done so far
            </p>
            <h2 className={`px-5 md:px-0 main_color`}>
                Professional Summary
            </h2>
            <Timeline position={matches ? 'alternate' : 'left'}>
                {experienceData.map((item, index) => (
                    <TimelineItem
                        key={index}
                        className={styles.timeline_item}
                        sx={matches ? {
                            [`& .${timelineContentClasses.root}:before`]: {
                                flex: 0.2,
                            },
                        } : {}}
                    >
                        {matches ? (
                            <TimelineOppositeContent color="text.secondary">
                                <h6>{item.timeline}</h6>
                            </TimelineOppositeContent>
                        ) : null}

                        <TimelineSeparator>
                            <span className={styles.experience_icon}>
                                {item.type === "School" ? <SchoolIcon /> : <WorkIcon />}
                            </span>
                            <TimelineConnector />
                        </TimelineSeparator>

                        <TimelineContent>
                            <ExperienceCard project={item} index={index} />
                        </TimelineContent>
                    </TimelineItem>
                ))}
            </Timeline>
        </section>
    );
};

export default Experience;
