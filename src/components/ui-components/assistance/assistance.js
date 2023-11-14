import React, { useContext, useEffect, useState } from "react";
import { Button } from "@mui/material";
import { PortfolioContext } from "../portfolio-context/portfolio-context";

const Assistance = () => {
    const [transcript, setTranscript] = useState('')
    const [response, setResponse] = useState('')
    const { theme, setTheme } = PortfolioContext();

    useEffect(() => {
        assistance();
        respondToUser()
        // console.log("updated")
    }, [transcript])

    const assistance = () => {
        const SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;
        let speech = new SpeechRecognition();
        speech.interimResults = false;
        speech.continuous = true;
        speech.maxAlternatives = 1

        speech.onresult = (e) => {
            console.log(e)
            let result = Array.from(e?.results)?.map(text => text?.[0])?.map(output => output?.transcript)
            // const finalText = transcript + result;
            setTranscript(result)
            // respondToUser(result)
        }

        speech.start();

        // speech.onspeechend=()=>{
        //     respondToUser()
        //     document.querySelector('#speak')?.click();
        // }

    }

    const respondToUser = () => {
        let introCommand = "Alexander";
        let myResponse = '';
        // if (transcript.includes('speak it')) {
        //     document.querySelector('#speck')?.click();
        // }
        if (transcript !== '') {
            if (transcript?.includes(introCommand)) {
                myResponse = "Hello! Welcome"
            } else if (transcript.includes("what is the time")) {
                myResponse = new Date()?.toLocaleDateString();
            }

            // App Level
            else if ((transcript.includes("dark mode") || transcript.includes("dark theme"))) {
                myResponse = "Set theme to dark";
                setTheme(true)
            } else if ((transcript.includes("light mode") || transcript.includes("light theme"))) {
                myResponse = "Set theme to light";
                setTheme(false)
            }

            else {
                myResponse = "come again"
            }
        }
        // console.log(response)
        setResponse(myResponse)
        let utterance = new SpeechSynthesisUtterance(myResponse);
        utterance.rate = 0.95;
        utterance.pitch = 1;
        utterance.lang = "en-IN";
        utterance.voice = window.speechSynthesis.getVoices()[0]
        speechSynthesis.speak(utterance);
    }
    return (
        <>
            <div>{transcript}-{response}</div>
            <Button variant="contained" id="speak" onClick={respondToUser}>speech</Button>
        </>

    )
}
export default Assistance;