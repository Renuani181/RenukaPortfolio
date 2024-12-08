import React from 'react';
import Technologies from '../technologies/technologies';
import styles from "./overview.module.scss"

const Overview = () => {
    return (
        <section id="overview" className={` p-5 md:p-16 lg:p-20 ` + styles.overview}>
            <div className={` flex xl:flex-row flex-col-reverse gap-10 justify-left overflow-hidden `}>
                <div className={`flex-[0.6] p-5 rounded-2xl`}>
                    <p className={`main_color`}>
                        Introduction
                    </p>
                    <h2 className={`main_color`}>
                        Summary
                    </h2>
                    <div className={`text-lg`}>
                        As a Sr Front End Developer , I specialize in creating robust and scalable software solutions using a wide range of technologies.
                        My expertise includes React, Node.js, TypeScript, JavaScript, and modern frameworks like Vue.js and Angular.
                        I am skilled in various programming languages and frameworks, and
                        I am committed to continuous learning to stay updated with the latest technologies and best practices in software development
                    </div>
                </div>
            </div>
            <Technologies />
        </section>
    )
}

export default Overview;