import React from "react";
import './lab.scss'
import Trans from "../translator/trans";

const Lab = () => {
    return (
        <div className="portfolio-lab">
            <div className="portfolio-lab-header d-flex flex-column justify-content-center">
                <div className="portfolio-lab-header-title">"<Trans Translate={'lab.header.title'}></Trans>"</div>
                {/* <div className="portfolio-lab-header-text"><Trans Translate={'lab.header.description'}></Trans></div> */}
            </div>

            <div className="lab-container container-fluid section p-5">
                <div className="container">
                    <div className="lab-section py-4">
                        <div className="section-title">
                            <div className="section-text-high-light"><Trans Translate={'lab.voiceRecognition.section.title1'}></Trans></div>
                            <div className="section-text-light"><Trans Translate={'lab.voiceRecognition.section.title2'}></Trans></div>
                        </div>
                        <div className="lab-section-under-line">--------------------------------------</div>
                        <div className="section-content py-4">
                            <p><Trans Translate={'lab.voiceRecognition.description'}></Trans></p>
                        </div>
                    </div>
                    <div className="row py-4">
                        <div className="section-title">
                            <div className="section-text-high-light"><Trans Translate={'lab.themes.section.title'}></Trans></div>
                        </div>
                        <div className="lab-section-under-line">--------------------------------------</div>
                        <div className="col-sm-12 col-md-6 order-sm-2 order-md-1">
                            <div className="section-content py-4">
                                <p><Trans Translate={'lab.themes.description.content1'}></Trans></p>
                                <p><Trans Translate={'lab.themes.description.content2'}></Trans></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 order-sm-1 order-md-2">right</div>
                    </div>

                    <div className="row py-4">
                        <div className="section-title">
                            <div className="section-text-high-light"><Trans Translate={'lab.multiLangual.section.title1'}></Trans></div>
                            <div className="section-text-light"><Trans Translate={'lab.multiLangual.section.title2'}></Trans></div>
                        </div>
                        <div className="lab-section-under-line">--------------------------------------</div>
                        <div className="col-sm-12 col-md-6 order-sm-2 order-md-1">
                            <div className="section-content py-4">
                                <p><Trans Translate={'lab.multiLangual.description.content1'}></Trans></p>
                                <p><Trans Translate={'lab.multiLangual.description.content2'}></Trans></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 order-sm-1 order-md-2">right</div>
                    </div>

                    <div className="row py-4">
                        <div className="section-title">
                            <div className="section-text-high-light"><Trans Translate={'lab.crossBrowser.section.title1'}></Trans></div>
                            <div className="section-text-light"><Trans Translate={'lab.crossBrowser.section.title2'}></Trans></div>
                        </div>
                        <div className="lab-section-under-line">--------------------------------------</div>
                        <div className="col-sm-12 col-md-6 order-sm-2 order-md-1">
                            <div className="section-content py-4">
                                <p><Trans Translate={'lab.crossBrowser.description.content1'}></Trans></p>
                                <p><Trans Translate={'lab.crossBrowser.description.content2'}></Trans></p>
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 order-sm-1 order-md-2">right</div>
                    </div>

                    <div className="row py-4">
                        <div className="section-title">
                            <div className="section-text-high-light"><Trans Translate={'lab.responsive.section.title1'}></Trans></div>
                            <div className="section-text-light"><Trans Translate={'lab.responsive.section.title2'}></Trans></div>
                        </div>
                        <div className="lab-section-under-line">--------------------------------------</div>
                        <div className="col-sm-12 col-md-6 order-sm-2 order-md-1">
                            <div className="section-content py-4">
                                <p><Trans Translate={'lab.responsive.description.content'}></Trans></p>
                                {/* <p><Trans Translate={'lab.responsive.description.content2'}></Trans></p> */}
                            </div>
                        </div>
                        <div className="col-sm-12 col-md-6 order-sm-1 order-md-2">right</div>
                    </div>

                    <div className="row py-4">
                        <div className="section-title">
                            <div className="section-text-high-light"><Trans Translate={'lab.animations.section.title1'}></Trans></div>
                            <div className="section-text-light"><Trans Translate={'lab.animations.section.title2'}></Trans></div>
                        </div>
                        <div className="lab-section-under-line">--------------------------------------</div>
                        <div className="col-sm-12 col-md-6 order-sm-2 order-md-1">
                            <div className="section-content py-4">
                                <p><Trans Translate={'lab.animations.description.content1'}></Trans></p>
                                <p><Trans Translate={'lab.animations.description.content2'}></Trans></p>
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