import React, { useState } from "react";
import Header from "../components/header";
import Layout from "./../components/layout"

import styles from "./resume.module.css"

export const Resume = () => {
    const [PersonalDetailsIsVisible, setPersonalDetailsIsVisible] = useState(false);
    const [educationIsVisible, setEducationIsVisible] = useState(false);
    const [educationInIsVisible, setEducationInIsVisible] = useState(false);
    const [ProgrammingknowledgeIsVisible, setProgrammingknowledgeIsVisible] = useState(false);
    const [ProgrammingToolsIsVisible, setProgrammingToolsIsVisible] = useState(false);
    const [LanguageKnowledgelsIsVisible, setLanguageKnowledge] = useState(false);
    const [workExperienceIsVisible, setWorkExperienceIsVisible] = useState(false);
    const [competencesIsVisible, setCompetences] = useState(false);
    const [certificatesIsVisible, setCertificates] = useState(false);
    const [hobbiesIsVisible, setHobbies] = useState(false);


    return (
        <Layout>
            <div className={styles.contentContainer}>
                <div className={styles.cardContainer}>
                    <div className={`${styles.PersonalDetails} ${styles.card} ${styles.item1}`}>
                        <h1 className={styles.header} onClick={() => setPersonalDetailsIsVisible(!PersonalDetailsIsVisible)}>Personal details</h1>
                        <div className={PersonalDetailsIsVisible === true ? ` ${styles.cardContent} ` : `${styles.hideCardContent}`}>
                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={styles.item}>Name</p><p className={styles.value}>Sumaya</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={styles.item}>Last name</p><p className={styles.value}>Mohamed Ahmed</p></div>
                            <div className={`${styles.birthDate} ${styles.allCardItems}`}> <p className={styles.item}>Date of birth</p><p className={styles.value}>17/07/1989</p></div>
                            {/* <div className={`${styles.birthDate} ${styles.allCardItems}`}> <p className={styles.item}>Place of birth</p><p className={styles.value}>Mogadishu Somalia</p></div> */}
                            <div className={`${styles.birthDate} ${styles.allCardItems}`}> <p className={styles.item}>Marital status</p><p className={styles.value}>Single</p></div>
                            <div className={`${styles.birthDate} ${styles.allCardItems}`}> <p className={styles.item}>Nationality</p><p className={styles.value}>Belgium</p></div>
                        </div>
                    </div>

                    <div className={`${styles.education} ${styles.card}  ${styles.item2}`}>
                        <h1 className={styles.header} onClick={() => setEducationIsVisible(!educationIsVisible)}>Education</h1>
                        <div className={educationIsVisible === true ? `${styles.cardContent} ` : `${styles.hideCardContent}`}>
                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={styles.item}>Programming</p><p className={styles.value}> 2018 – 2023</p></div>
                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={styles.item}>Polyvalent Seller</p><p className={styles.value}>2015 – 2018</p></div>
                            <div className={`${styles.name} ${styles.allCardItems}`}> <p className={styles.item}>Secretarial clerk</p><p className={styles.value}>2013 – 2015</p></div>
                            <div className={`${styles.name} ${styles.allCardItems}`}> <p className={styles.item}>Administration office</p><p className={styles.value}>2011 – 2012</p></div>
                            <div className={`${styles.name} ${styles.allCardItems}`}> <p className={styles.item}>Logistics assistant nurse</p><p className={styles.value}>2010 – 2011</p></div>
                        </div>
                    </div>

                    <div className={`${styles.education} ${styles.card}  ${styles.item3}`}>
                        <h1 className={styles.header} onClick={() => setEducationInIsVisible(!educationInIsVisible)}>Education institutes</h1>
                        <div className={educationInIsVisible === true ? `${styles.cardContent}` : `${styles.hideCardContent}`}>
                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={styles.item}>Programming</p><p className={styles.value}> AP Hogeschool Ellermanstraat 33 2060 Antwerpen</p></div>
                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={styles.item}>Polyvalent Seller</p><p className={styles.value}>CVO Distelvinklaan 22 2660 Hoboken</p></div>
                            <div className={`${styles.name} ${styles.allCardItems}`}> <p className={styles.item}>Secretarial clerk</p><p className={styles.value}>CVO Distelvinklaan 22 2660 Hoboken</p></div>
                            <div className={`${styles.name} ${styles.allCardItems}`}> <p className={styles.item}>Administration office</p><p className={styles.value}>CDO Noord Bredastraat 37 2060 Antwerpen</p></div>
                            <div className={`${styles.name} ${styles.allCardItems}`}> <p className={styles.item}>Logistics assistant nurse</p><p className={styles.value}>TSM Frederik De Merodestraat 77 2800 Mechelen</p></div>
                        </div>
                    </div>

                    <div className={`${styles.PersonalDetails} ${styles.card} ${styles.item4}`}>
                        <h1 className={styles.header} onClick={() => setProgrammingknowledgeIsVisible(!ProgrammingknowledgeIsVisible)}>Programming knowledge</h1>
                        <div className={ProgrammingknowledgeIsVisible === true ? `${styles.cardContent} ` : `${styles.hideCardContent}`}>
                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={styles.item}>HTML</p><p className={styles.value}>Very good</p></div>
                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={styles.item}>CSS</p><p className={styles.value}>Very good</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={styles.item}>JavaScript</p><p className={styles.value}>Good</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={styles.item}>React</p><p className={styles.value}>Very good</p></div>
                            <div className={`${styles.birthDate} ${styles.allCardItems}`}> <p className={styles.item}>React Native</p><p className={styles.value}>Good</p></div>
                            <div className={`${styles.birthDate} ${styles.allCardItems}`}> <p className={styles.item}>PHP</p><p className={styles.value}>Basics</p></div>
                            <div className={`${styles.birthDate} ${styles.allCardItems}`}> <p className={styles.item}>C#</p><p className={styles.value}>Good</p></div>
                            <div className={`${styles.birthDate} ${styles.allCardItems}`}> <p className={styles.item}>SQL</p><p className={styles.value}>Good</p></div>
                            <div className={`${styles.birthDate} ${styles.allCardItems}`}> <p className={styles.item}>MySQL</p><p className={styles.value}>Good</p></div>
                        </div>
                    </div>

                    <div className={`${styles.PersonalDetails} ${styles.card} ${styles.item5}`}>
                        <h1 className={styles.header} onClick={() => setProgrammingToolsIsVisible(!ProgrammingToolsIsVisible)}>Programming tools skills</h1>
                        <div className={ProgrammingToolsIsVisible === true ? `${styles.cardContent} ` : `${styles.hideCardContent}`}>
                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={styles.item}>Visual Studio</p><p className={styles.value}>Good</p></div>
                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={styles.item}>Visual Studio Code</p><p className={styles.value}>Very good</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={styles.item}>MySQL Workbench</p><p className={styles.value}>Good</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={styles.item}>Microsoft SQL Server Management</p><p className={styles.value}>Good</p></div>
                            <div className={`${styles.birthDate} ${styles.allCardItems}`}> <p className={styles.item}>GitHub</p><p className={styles.value}>Very good</p></div>
                            <div className={`${styles.birthDate} ${styles.allCardItems}`}> <p className={styles.item}>WordPress</p><p className={styles.value}>Very good</p></div>
                            <div className={`${styles.birthDate} ${styles.allCardItems}`}> <p className={styles.item}>Contentful</p><p className={styles.value}>Very good</p></div>
                        </div>
                    </div>

                    <div className={`${styles.PersonalDetails} ${styles.card} ${styles.item6}`}>
                        <h1 className={styles.header} onClick={() => setLanguageKnowledge(!LanguageKnowledgelsIsVisible)}>Languages knowledge</h1>
                        <div className={LanguageKnowledgelsIsVisible === true ? `${styles.cardContent}` : `${styles.hideCardContent}`}>
                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.language}`}>Somali (mother tongue)</p><p className={`${styles.value} ${styles.languageLevelValue}`}></p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.languageLevel}`}>Speaking</p><p className={`${styles.value} ${styles.languageLevelValue}`}>Fluent</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.languageLevel}`}>Writing</p><p className={`${styles.value} ${styles.languageLevelValue}`}>Fluent</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.languageLevel}`}>Understanding</p><p className={`${styles.value} ${styles.languageLevelValue}`}>Fluent</p></div>

                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.language}`}>Dutch</p><p className={`${styles.value} ${styles.languageLevelValue}`}></p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.languageLevel}`}>Speaking</p><p className={`${styles.value} ${styles.languageLevelValue}`}>Excellent</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.languageLevel}`}>Writing</p><p className={`${styles.value} ${styles.languageLevelValue}`}>Good</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.languageLevel}`}>Understanding</p><p className={`${styles.value} ${styles.languageLevelValue}`}>Excellent</p></div>

                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.language}`}>English</p><p className={styles.value}></p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.languageLevel}`}>Speaking</p><p className={`${styles.value} ${styles.languageLevelValue}`}>Good</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.languageLevel}`}>Writing</p><p className={`${styles.value} ${styles.languageLevelValue}`} >Good</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.languageLevel}`}>Understanding</p><p className={`${styles.value} ${styles.languageLevelValue}`}>Excellent</p></div>

                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.language}`}>Arabic</p><p className={styles.value}></p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.languageLevel}`}>Speaking</p><p className={`${styles.value} ${styles.languageLevelValue}`}>Fluent</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.languageLevel}`}>Writing</p><p className={`${styles.value} ${styles.languageLevelValue}`}>Fluent</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.languageLevel}`}>Understanding</p><p className={`${styles.value} ${styles.languageLevelValue}`}>Fluent</p></div>
                        </div>
                    </div>

                    <div className={`${styles.PersonalDetails} ${styles.card}  ${styles.item7}`}>
                        <h1 className={styles.header} onClick={() => setWorkExperienceIsVisible(!workExperienceIsVisible)}>Work experience</h1>
                        <div className={workExperienceIsVisible === true ? `${styles.cardContent} ` : `${styles.hideCardContent}`}>
                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={styles.item}>Internship Programming by iCapps</p><p className={styles.value}>February 2023 – June 2023</p></div>
                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={styles.item}>Retail work by Lidl (Permanent contract)</p><p className={styles.value}>April 2015 – present</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={styles.item}>shop assistant (Student job)</p><p className={styles.value}>2013 - 2014</p></div>
                            <div className={`${styles.birthDate} ${styles.allCardItems}`}> <p className={styles.item}>Administration by Vollers Belgium (Student job)</p><p className={styles.value}>August 2014</p></div>
                        </div>
                    </div>

                    <div className={`${styles.PersonalDetails} ${styles.card}  ${styles.item8}`}>
                        <h1 className={styles.header} onClick={() => setCompetences(!competencesIsVisible)}>Competences</h1>
                        <div className={competencesIsVisible === true ? `${styles.cardContent} ` : `${styles.hideCardContent}`}>
                            <div className={`${styles.competencesCard} ${styles.allCardItems}`}><p className={styles.item}><span className={styles.dot}></span> Flexible</p></div>
                            <div className={`${styles.competencesCard} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.competences}`}><span className={styles.dot}></span> Creative</p></div>
                            <div className={`${styles.competencesCard} ${styles.allCardItems}`}> <p className={styles.item}><span className={styles.dot}></span> Can work well in a team also can perfectly work independently</p></div>
                            <div className={`${styles.competencesCard} ${styles.allCardItems}`}> <p className={styles.item}><span className={styles.dot}></span> Strong sense of responsibility</p></div>

                        </div>
                    </div>

                    <div className={`${styles.PersonalDetails} ${styles.card} ${styles.item9}`}>
                        <h1 className={styles.header} onClick={() => setCertificates(!certificatesIsVisible)}>Diploma and certificates</h1>
                        <div className={certificatesIsVisible === true ? `${styles.cardContent} ` : `${styles.hideCardContent}`}>
                            <div className={`${styles.name} ${styles.allCardItems}`}><p className={styles.item}>Graduate Programming</p><p className={styles.value}>Diploma obtained</p></div>
                            <div className={`${styles.lastName} ${styles.allCardItems}`}><p className={styles.item}>Administration</p><p className={styles.value}>Certificates</p></div>
                            <div className={`${styles.birthDate} ${styles.allCardItems}`}> <p className={styles.item}>Sales</p><p className={styles.value}>Diploma obtained</p></div>
                        </div>
                    </div>

                    <div className={`${styles.PersonalDetails} ${styles.card} ${styles.item10}`}>
                        <h1 className={styles.header} onClick={() => setHobbies(!hobbiesIsVisible)}>Hobbies</h1>
                        <div className={hobbiesIsVisible === true ? `${styles.cardContent} ` : `${styles.hideCardContent}`}>
                            <div className={`${styles.competencesCard} ${styles.allCardItems}`}><p className={styles.item}> <span className={styles.dot}></span> Travel</p></div>
                            <div className={`${styles.competencesCard} ${styles.allCardItems}`}><p className={`${styles.item} ${styles.competences}`}><span className={styles.dot}></span> Gym</p></div>
                            <div className={`${styles.competencesCard} ${styles.allCardItems}`}> <p className={styles.item}><span className={styles.dot}></span> Badminton</p></div>
                            <div className={`${styles.competencesCard} ${styles.allCardItems}`}> <p className={styles.item}><span className={styles.dot}></span> Going out with freinds</p></div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

