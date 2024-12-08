import React from 'react';
import styles from "./experience_card.module.scss";
import { motion } from "framer-motion";

const ExperienceCard = ({ project, index }) => {
    // Check if project is defined
    if (!project) {
        return <div>Project data is missing</div>; // Or return nothing
    }

    return (
        <motion.section
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{
                duration: 0.8,
                delay: index + 1 !== 1 ? (index + 1) / 10 : 0,
                type: "spring",
                stiffness: 80,
                damping: 15
            }}
            className={`text-left ${styles.experience_card}`}>

            {/* Project Title */}
            {project.title && (
                <h4 className={`text-[1.2rem] lg:text-[1.4rem] font-semibold`}>
                    {project.title}
                </h4>
            )}

            {/* Timeline and Company */}
            <section>
                {project.timeline && (
                    <h5 className={`pb-2 text-[0.9rem] md:text-[1rem] font-medium`}>
                        {project.timeline}
                    </h5>
                )}
                {project.company && (
                    <h5 className={`pb-2 text-[0.9rem] md:text-[1rem] font-medium`}>
                        {project.company}
                    </h5>
                )}

                {/* Location */}
                {project.location && (
                    <p className={`text-[0.8rem] md:text-[1rem] text-gray-600`}>
                        {project.location}
                    </p>
                )}

                {/* Skills */}
                {project.skills && project.skills.length > 0 && (
                    <div className={`mt-4`}>
                        <h6 className={`font-semibold text-[1rem]`}>Skills:</h6>
                        <ul className={`mt-2 flex flex-wrap gap-2 list-disc ${styles.experience_card_list}`}>
                            {project.skills.map((skill, idx) => (
                                <li key={idx} className={`inline-block bg-gray-100 px-2 py-1 rounded-lg`}>
                                    {skill}
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </section>
        </motion.section>
    );
};

export default ExperienceCard;
