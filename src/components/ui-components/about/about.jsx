import React from "react";
import './about.scss'
import Trans from "../translator/trans";
import { useTranslation } from "react-i18next";

const About = () => {
    const { t } = useTranslation();
    const organizations = t('about.experience.organizations', { returnObjects: true });
    const technical = t('about.technologies.courses', { returnObjects: true });
    return (
        <div className="portfolio-about">
            <section className="portfolio-main-header">
                <div className="owner-name">
                    <div className="owner-name-outline"><Trans Translate={'about.my.name'}></Trans></div>
                    <div className="owner-full-name"><Trans Translate={'about.my.fullName'}></Trans></div>
                </div>
                <div className="owner-designation-main">
                    <div className="dash-line"></div>
                    <div className="owner-designation">
                        <Trans Translate={'about.my.designation'}></Trans>
                    </div>
                    <div className="dash-line"></div>
                </div>
            </section>

            <div className="container-fluid section p-5">
                <div className="container py-5">
                    <div className="section-title">
                        <div className="section-text-light"><Trans Translate={'about.aboutMe.section.title1'}></Trans></div>
                        <div className="section-text-high-light"><Trans Translate={'about.aboutMe.section.title2'}></Trans></div>
                    </div>
                    <div className="section-content py-4 about-content">
                        {/* <Trans Translate={'about.aboutMe.content'}></Trans> */}
                        <div className="d-none">
                            <div className="owner-designation-conent text-center">As a seasoned web developer with over 5 years of hands-on experience, I bring a wealth of expertise in client-side programming and a specialization in cutting-edge technologies such as React JS, Redux, Javascript, HTML, CSS, and various front-end frameworks. My commitment to delivering high-quality solutions is driven by a genuine passion for my work, coupled with a proven track record of successfully meeting and exceeding client expectations.</div>
                            <div className="owner-designation-conent-header">Technical Proficiency:</div>
                            <div className="owner-designation-conent">Proficient in Client-Side Programming: Adept at crafting dynamic and interactive user interfaces, ensuring a seamless user experience through comprehensive client-side programming.</div>
                            <div className="owner-designation-conent">Specialization in React JS, Redux, and Front-End Technologies: Extensive experience and mastery in React JS, Redux, Javascript, HTML, and CSS, along with proficiency in leveraging other front-end frameworks to create robust and scalable web applications.</div>
                            <div className="owner-designation-conent-header">Key Strengths:</div>
                            <div className="owner-designation-conent">Passionate Work Ethic: My enthusiasm for web development fuels a proactive and results-driven work ethic. I am deeply committed to staying updated with industry trends and embracing new technologies to deliver cutting-edge solutions.</div>
                            <div className="owner-designation-conent">Quick and Self-Learner: Known for rapidly acquiring new skills and adapting to emerging technologies, I thrive in dynamic environments where continuous learning is essential.</div>
                            <div className="owner-designation-conent">Requirement Understanding: Adept at comprehending project requirements with precision, ensuring a clear and comprehensive understanding of client needs to deliver tailored and effective solutions.</div>
                            <div className="owner-designation-conent">Collaboration with Product Management: Skilled in collaborating with Product Management teams, providing valuable insights, and contributing to discussions that enhance the overall product strategy. I am proactive in suggesting improvements and optimizations based on my technical expertise.</div>
                            <div className="owner-designation-conent">Problem-Solving Methodology: Approach challenges with a strategic and analytical mindset, employing a problem-solving methodology that combines creativity and technical acumen to overcome obstacles and deliver optimal solutions.</div>
                            <div className="owner-designation-conent">On-Time Deliverables: Consistently demonstrate a commitment to meeting project timelines and delivering high-quality results within stipulated deadlines.</div>
                        </div>

                        <div className="about-content d-none">
                            <p className="about-content-text">I am a seasoned web developer with over 5 years of specialized experience in client-side programming, with a particular focus on React JS, Redux, Javascript, HTML, CSS, and various front-end frameworks. My professional journey is characterized by a passion for web development and a commitment to delivering high-quality solutions that exceed client expectations.</p>
                            <p className="about-content-text">In terms of technical expertise, I possess a deep understanding of React JS, Redux, and other front-end technologies, allowing me to craft dynamic and user-centric interfaces. This proficiency is driven by a proactive and results-driven work ethic, reflecting my continuous learning and adaptation to emerging technologies.</p>
                            <p className="about-content-text">My key strengths lie in being a quick and self-learner, a meticulous requirement understanding, active collaboration with Product Management teams, a problem-solving methodology that combines creativity and technical acumen, and a consistent track record of on-time project deliverables. These strengths underscore my commitment to success and make me a valuable asset in dynamic environments where adaptability and innovation are crucial.</p>
                            <p className="about-content-text">In summary, my experience, technical proficiency, and passion for excellence position me as an ideal candidate to contribute significantly to your team's projects, bringing a holistic and forward-thinking approach to web development. I look forward to the opportunity to leverage my skills and expertise to enhance the success of your web initiatives.</p>
                        </div>
                        <div className="owner-designation-conent about-content d-none">
                            <p className="about-content-text">I am a seasoned web developer with an extensive background spanning over 5 years, specializing in client-side programming and exhibiting a particular expertise in React JS, Redux, Javascript, HTML, CSS, and a diverse array of front-end frameworks. Throughout my professional journey, I have consistently demonstrated a passion for web development, underpinned by a dedicated commitment to delivering solutions that not only meet but exceed the expectations of clients and end-users alike.</p>
                            <p className="about-content-text">My proficiency in client-side programming is underscored by a deep understanding of cutting-edge technologies, particularly React JS, Redux, and various front-end frameworks. This technical acumen enables me to craft dynamic and user-centric interfaces that seamlessly integrate with evolving industry standards.</p>
                            <p className="about-content-text">At the core of my professional ethos is an unwavering passion for web development, driving a proactive and results-oriented work ethic. This passion fuels a continuous pursuit of knowledge, ensuring that my skill set remains at the forefront of the rapidly evolving technological landscape. I am dedicated to staying ahead of industry trends and adapting quickly to emerging technologies.</p>
                            <p className="about-content-text">My key strengths include being a quick and self-learner, demonstrating a meticulous understanding of project requirements, active collaboration with Product Management teams, and employing a problem-solving methodology that amalgamates creativity with technical acumen. Additionally, my track record of consistently delivering on-time project results speaks to my commitment to success in every endeavor.</p>
                            <p className="about-content-text">I thrive in dynamic environments where adaptability and innovation are crucial. My professional journey is marked by a commitment to on-time project deliverables, reflecting a disciplined approach to project management and an unwavering dedication to achieving success for both clients and the broader team.</p>
                        </div>
                        <div className="owner-designation-conent about-content">
                            <p className="about-content-text"><Trans Translate={'about.aboutMe.description.content1'}></Trans></p>
                            <p className="about-content-text"><Trans Translate={'about.aboutMe.description.content2'}></Trans></p>
                            <p className="about-content-text"><Trans Translate={'about.aboutMe.description.content3'}></Trans></p>
                            <p className="about-content-text"><Trans Translate={'about.aboutMe.description.content4'}></Trans></p>
                            <p className="about-content-text"><Trans Translate={'about.aboutMe.description.content5'}></Trans></p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="experience-container container-fluid section">
                <div className="container py-5">
                    <div className="section-title">
                        <div className="section-text-light"><Trans Translate={'about.experience.section.title1'}></Trans></div>
                        <div className="section-text-high-light"><Trans Translate={'about.experience.section.title2'}></Trans></div>
                    </div>
                    <div className="section-content py-4">
                        <Trans Translate={'about.experience.description'}></Trans>
                    </div>
                    <div className="experience-cards">
                        {organizations?.map((org, i) => {
                            return (
                                <div key={i} className="experience-card p-4">
                                    <div className="org-info">
                                        <div className="org-name">{org?.name}</div>
                                        <div className="dot">.</div>
                                        <div className="org-role">{org?.role}</div>
                                    </div>
                                    {org?.description?.length > 0 ?
                                        <ul key={i}>
                                            {org?.description?.map((list, i) => <li key={i}>{list}</li>)}
                                        </ul>
                                        :
                                        <div className="experience-info">{org?.content}</div>}
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="technical-container container-fluid section p-5">
                <div className="container">
                    <div className="section-title">
                        <div className="section-text-high-light"><Trans Translate={'about.technologies.section.title1'}></Trans></div>
                        <div className="section-text-light"><Trans Translate={'about.technologies.section.title2'}></Trans></div>
                    </div>
                    <div className="section-content py-4">
                        <Trans Translate={'about.technologies.description'}></Trans>
                    </div>
                    <div className="technical-cards">
                        {technical?.map((tech, i) => {
                            return (
                                <div key={i} className="tech-card p-2">
                                    {/* <img className="tech-card-img" src={tech?.img} alt='tech' /> */}
                                    <div className="tech-name p-2">{tech?.name}</div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </div>

            <div className="work-together-container container-fluid section p-5">
                <div className="container">
                    <div className="section-title">
                        <div className="section-text-light"><Trans Translate={'about.workTogether.section.lets'}></Trans></div>
                        <div className="section-text-light"><Trans Translate={'about.workTogether.section.work'}></Trans></div>
                    </div>
                    <div className="section-text-high-light"><Trans Translate={'about.workTogether.section.together'}></Trans></div>
                    <div className="section-content py-4">
                        <Trans Translate={'about.workTogether.description'}></Trans>
                    </div>
                    <div className="contact-details">
                        <a href="tel:9494785839" className="contact-phone"><Trans Translate={'about.my.phone'}></Trans></a> |
                        <a href="mailto:webdev.sandeep.g@gmail.com" className="contact-email"><Trans Translate={'about.my.email'}></Trans></a>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default About;