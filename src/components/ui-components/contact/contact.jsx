import React, { useState } from "react";
import Trans from "../translator/trans";
import { useTranslation } from "react-i18next";
import RevealElement from "../animated/reveal-element/revealElement";
import LocalPhoneRoundedIcon from '@mui/icons-material/LocalPhoneRounded';
import MarkunreadRoundedIcon from '@mui/icons-material/MarkunreadRounded';
import './contact.scss';
import OpenInNewRoundedIcon from '@mui/icons-material/OpenInNewRounded';
import {PortfolioContext} from "../portfolio-context/portfolio-context";
// import { sendEmail } from "../../Node/sendEmail";

const Contact = (props) => {
    const { theme, openAccount, contactTab, setContactTab } = PortfolioContext();

    const [formData, setFormData] = useState({
        name: '',
        subject: '',
        email: '',
        message: '',
        phone: ''
    })

    const submitForm = (e) => {
        e?.preventDefault();
        e?.stopPropagation();
        setFormData({ name: '', email: '', subject: '', message: '', phone: '' })
        console.log(formData);
        // sendEmail(formData);
    }

    const accountPage = (e, account) => {
        if (account?.type !== 'email') {
            e.stopPropagation();
            openAccount(account);
        }
    }

    const { t } = useTranslation();
    const social = t('footer.contactDetails.social', { returnObjects: true });

    return (
        <div className={`personal-details-drawer${props?.fromFooter ? ' contact-drawer':' contact-tab'}`}>
            <div className="personal-details-content">
                <div className="personal-details">
                    <div className="personal-details-header">
                        {/* <div className="personal-details-img"></div> */}
                        <div className="personal-details-info">
                            <div className="owner-email"><Trans Translate={'footer.contactDetails.title'}></Trans></div>
                            {/* <RevealRandomElement className="owner-email" content={'about.my.fullName'} speed={0.1} renderType={'word'} animaType={0}/> */}
                            <div className="owner-personal-info">
                                <RevealElement className="owner-personal-description">
                                    <Trans Translate={'about.workTogether.description'}></Trans>
                                </RevealElement>
                            </div>
                        </div>
                    </div>
                    <div className="owner-personal-nutton-cntr">
                        <button className={`info-btn message-btn${!contactTab ? ' icon-btn' : ''}`}
                            // onClick={(e) => setContactTab(true)}
                        ><MarkunreadRoundedIcon />{contactTab && <div><Trans Translate={'footer.contactDetails.message'} /></div>}</button>
                        <a
                            href="tel:9494785839"
                            className={`info-btn call-btn${contactTab ? ' icon-btn' : ''}`}
                            // onClick={(e) => setContactTab(false)}
                        ><LocalPhoneRoundedIcon />{!contactTab && <div><Trans Translate={'footer.contactDetails.call'} /></div>}</a>
                    </div>
                    {!contactTab ?
                        <form className="owner-form-container" onSubmit={(e) => { submitForm(e) }}>
                            <div className="account-forms">
                                <div className="account-form-input-full">
                                    <label className="account-form-label" htmlFor="fullName"><Trans Translate={'footer.contactDetails.form.fullName.label'} /></label>
                                    <input id="fullName" name="fullName" autoFocus type="text" value={formData?.name} onChange={(e) => setFormData({ ...formData, name: e?.target?.value })} className={`account-form-input ${theme+'-theme'}`} placeholder={t('footer.contactDetails.form.fullName.placeholder')} required />
                                </div>
                                <div className="account-form-input-half-cntr">
                                    <div className="account-form-input-half">
                                        <label className="account-form-label" htmlFor="email"><Trans Translate={'footer.contactDetails.form.email.label'} /></label>
                                        <input id="email" name="email" type="email" value={formData?.email} onChange={(e) => setFormData({ ...formData, email: e?.target?.value })} className={`account-form-input ${theme+'-theme'}`} placeholder={t('footer.contactDetails.form.email.placeholder')} required />
                                    </div>
                                    <div className="account-form-input-half">
                                        <label className="account-form-label" htmlFor="phone"><Trans Translate={'footer.contactDetails.form.phone.label'} /></label>
                                        <input id="phone" name="phone" type="tel" value={formData?.phone} onChange={(e) => setFormData({ ...formData, phone: e?.target?.value })} className={`account-form-input ${theme+'-theme'}`} pattern="[0-9]{10}" placeholder={t('footer.contactDetails.form.phone.placeholder')} required />
                                    </div>
                                </div>
                                <div className="account-form-input-full">
                                    <label className="account-form-label" htmlFor="subject"><Trans Translate={'footer.contactDetails.form.subject.label'} /></label>
                                    <input id="subject" name="subject" type="text" value={formData?.subject} onChange={(e) => setFormData({ ...formData, subject: e?.target?.value })} className={`account-form-input ${theme+'-theme'}`} placeholder={t('footer.contactDetails.form.subject.placeholder')} required />
                                </div>
                                <div className="account-form-input-full">
                                    <label className="account-form-label" htmlFor="message"><Trans Translate={'footer.contactDetails.form.message.label'} /></label>
                                    <textarea id="message" name="message" type="text" value={formData?.message} onChange={(e) => setFormData({ ...formData, message: e?.target?.value })} className={`account-form-input ${theme+'-theme'}`} rows="3" placeholder={t('footer.contactDetails.form.message.placeholder')} required />
                                </div>
                                <input className="account-form-submit-btn mt-4" type="submit" value={t('footer.contactDetails.form.submit')} />
                            </div>
                        </form>
                        :
                        <div className="owner-social-accounts-list container">
                            {social?.map((account, i) => {
                                return (
                                    <a href={`${account?.type === 'email' ? account?.link : '#'}`} key={i} onClick={(e) => accountPage(e, account)} className="account-card">
                                        <OpenInNewRoundedIcon />
                                        {account?.icon ? <div className="account-card-img" dangerouslySetInnerHTML={{ __html: account?.icon }}></div> : <div className="account-card-img">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="#000000" version="1.1" id="Capa_1" width="800px" height="800px" viewBox="0 0 503.443 503.443">
                                                <g>
                                                    <g>
                                                        <path d="M66.151,451.549h80.368c7.895,0,14.291-6.396,14.291-14.29v-80.368c0-7.889-6.396-14.29-14.291-14.29H66.151    c-7.895,0-14.29,6.396-14.29,14.29v80.368C51.861,445.147,58.262,451.549,66.151,451.549z" />
                                                        <path d="M146.519,51.901H66.151c-7.895,0-14.29,6.395-14.29,14.29v80.368c0,7.889,6.395,14.291,14.29,14.291h80.368    c7.895,0,14.291-6.396,14.291-14.291V66.191C160.809,58.302,154.407,51.901,146.519,51.901z" />
                                                        <path d="M437.219,51.901h-80.368c-7.895,0-14.29,6.395-14.29,14.29v80.368c0,7.889,6.396,14.291,14.29,14.291h80.368    c7.895,0,14.29-6.396,14.29-14.291V66.191C451.509,58.302,445.107,51.901,437.219,51.901z" />
                                                        <path d="M417.53,212.71h70.368c8.544,0,15.465-6.928,15.465-15.465V15.505c0-8.543-6.928-15.465-15.465-15.465H306.165    c-4.694,0-8.844,2.136-11.683,5.435h-60.319v79.56H212.67V15.505c0-8.543-6.928-15.465-15.465-15.465H15.465    C6.921,0.04,0,6.961,0,15.505v181.733c0,8.543,6.928,15.472,15.465,15.472h93.397v78.03H15.465C6.921,290.74,0,297.661,0,306.205    v181.733c0,8.544,6.928,15.465,15.465,15.465h181.733c8.543,0,15.465-6.928,15.465-15.465v-71.897h24.48v48.801h103.881v-48.801    h27.461v79.4h103.887V391.561h-51.94v-19.89h83.012V267.79H417.53V212.71z M321.3,30.64h151.47v151.47H321.3V30.64z     M290.7,183.799h-19.97v-74.443h19.97V183.799z M30.6,182.11V30.64h151.47v151.47H30.6z M182.07,472.81H30.6V321.34h151.47V472.81    z M212.67,312.16v-5.955c0-0.086-0.024-0.159-0.024-0.245h0.104V202.079h-0.924c0.502-1.53,0.845-3.139,0.845-4.834v-8.33h33.66    v98.765h67.32v24.48H212.67z" />
                                                    </g>
                                                </g>
                                            </svg>
                                        </div>}
                                        <div className="account-card-name">{account?.name}</div>
                                    </a>
                                )
                            })}
                        </div>}
                </div>
            </div>
        </div>
    )
}

export default Contact;