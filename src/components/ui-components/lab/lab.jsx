import React from "react";
import './lab.scss'
import Trans from "../translator/trans";
import RevealRandomElement from "../animated/reveal-random/revealRandomElement";
import RevealElement from "../animated/reveal-element/revealElement";
import {PortfolioContext} from "../portfolio-context/portfolio-context";

const Lab = () => {
    const {isEnglish} = PortfolioContext();
    return (
        <div className="portfolio-lab">
            <div className="portfolio-lab-header d-flex flex-column justify-content-center">
                <div className="portfolio-lab-header-title d-flex justify-content-center">{isEnglish ? <RevealRandomElement content={'lab.header.title'} speed={0.05}/> : <Trans Translate={'lab.header.title'}></Trans>}</div>
                {/* <div className="portfolio-lab-header-text"><Trans Translate={'lab.header.description'}></Trans></div> */}
            </div>

            <div className="lab-container container-fluid section">
                <div className="container">
                    <div className="lab-section py-4">
                        <div className="section-title">
                            <div className="section-text-high-light">{isEnglish ? <RevealRandomElement content={'lab.voiceRecognition.section.title1'} speed={0.05}/> : <Trans Translate={'lab.voiceRecognition.section.title1'}></Trans>}</div>
                            <div className="section-text-light">{isEnglish?<RevealRandomElement content={'lab.voiceRecognition.section.title2'} speed={0.05}/>:<Trans Translate={'lab.voiceRecognition.section.title2'}></Trans>}</div>
                        </div>
                        <RevealRandomElement className="lab-section-under-line" speed={0.05} content={'--------------------------------------'}/>
                        <div className="section-content py-4">
                            <p><RevealElement><Trans Translate={'lab.voiceRecognition.description'}></Trans></RevealElement></p>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="section-title">
                            <div className="section-text-high-light"><RevealRandomElement content={'lab.themes.section.title'} speed={0.05}/></div>
                        </div>
                        <RevealRandomElement className="lab-section-under-line" speed={0.05} content={'--------------------------------------'}/>
                        <div className="col-sm-12 col-md-6 order-sm-2 order-md-1">
                            <div className="section-content py-4">
                                <p><RevealElement><Trans Translate={'lab.themes.description.content1'}></Trans></RevealElement></p>
                                <p><RevealElement><Trans Translate={'lab.themes.description.content2'}></Trans></RevealElement></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 order-sm-1 order-md-2">right</div>
                    </div>

                    <div className="row py-4">
                        <div className="section-title">
                            <div className="section-text-high-light">{isEnglish?<RevealRandomElement content={'lab.multiLangual.section.title1'} speed={0.05}></RevealRandomElement>:<Trans Translate={'lab.multiLangual.section.title1'}></Trans>}</div>
                            <div className="section-text-light">{isEnglish?<RevealRandomElement content={'lab.multiLangual.section.title2'} speed={0.05}></RevealRandomElement>:<Trans Translate={'lab.multiLangual.section.title2'}></Trans>}</div>
                        </div>
                        <RevealRandomElement className="lab-section-under-line" speed={0.05} content={'--------------------------------------'}/>
                        <div className="col-sm-12 col-md-6 order-sm-2 order-md-1">
                            <div className="section-content py-4">
                                <p><RevealElement><Trans Translate={'lab.multiLangual.description.content1'}></Trans></RevealElement></p>
                                <p><RevealElement><Trans Translate={'lab.multiLangual.description.content2'}></Trans></RevealElement></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 order-sm-1 order-md-2">right</div>
                    </div>

                    <div className="row py-4">
                        <div className="section-title big-title align-items-start">
                            <div className="section-text-high-light">{isEnglish?<RevealRandomElement content={'lab.crossBrowser.section.title1'} speed={0.05}></RevealRandomElement>:<Trans Translate={'lab.crossBrowser.section.title1'}></Trans>}</div>
                            <div className="section-text-light">{isEnglish?<RevealRandomElement content={'lab.crossBrowser.section.title2'} speed={0.05}></RevealRandomElement>:<Trans Translate={'lab.crossBrowser.section.title2'}></Trans>}</div>
                        </div>
                        <RevealRandomElement className="lab-section-under-line" speed={0.05} content={'--------------------------------------'}/>
                        <div className="col-sm-12 col-md-6 order-sm-2 order-md-1">
                            <div className="section-content py-4">
                                <p><RevealElement><Trans Translate={'lab.crossBrowser.description.content1'}></Trans></RevealElement></p>
                                <p><RevealElement><Trans Translate={'lab.crossBrowser.description.content2'}></Trans></RevealElement></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 order-sm-1 order-md-2">right</div>
                    </div>

                    <div className="row py-4">
                        <div className="section-title">
                            <div className="section-text-high-light">{isEnglish?<RevealRandomElement content={'lab.responsive.section.title1'} speed={0.05}></RevealRandomElement>:<Trans Translate={'lab.responsive.section.title1'}></Trans>}</div>
                            <div className="section-text-light">{isEnglish?<RevealRandomElement content={'lab.responsive.section.title2'} speed={0.05}></RevealRandomElement>:<Trans Translate={'lab.responsive.section.title2'}></Trans>}</div>
                        </div>
                        <RevealRandomElement className="lab-section-under-line" speed={0.05} content={'--------------------------------------'}/>
                        <div className="col-sm-12 col-md-6 order-sm-2 order-md-1">
                            <div className="section-content py-4">
                                <p><RevealElement><Trans Translate={'lab.responsive.description.content'}></Trans></RevealElement></p>
                                {/* <p><Trans Translate={'lab.responsive.description.content2'}></Trans></p> */}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 order-sm-1 order-md-2">right</div>
                    </div>

                    <div className="row py-4">
                        <div className="section-title big-title align-items-start">
                            <div className="section-text-high-light">{isEnglish?<RevealRandomElement content={'lab.animations.section.title1'} speed={0.05}></RevealRandomElement>:<Trans Translate={'lab.animations.section.title1'}></Trans>}</div>
                            <div className="section-text-light">{isEnglish?<RevealRandomElement content={'lab.animations.section.title2'} speed={0.05}></RevealRandomElement>:<Trans Translate={'lab.animations.section.title2'}></Trans>}</div>
                        </div>
                        <div className="lab-section-under-line">--------------------------------------</div>
                        <div className="col-sm-12 col-md-6 order-sm-2 order-md-1">
                            <div className="section-content py-4">
                                <p><RevealElement><Trans Translate={'lab.animations.description.content1'}></Trans></RevealElement></p>
                                <p><RevealElement><Trans Translate={'lab.animations.description.content2'}></Trans></RevealElement></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 order-sm-1 order-md-2">right</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Lab;