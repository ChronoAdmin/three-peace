"use strict";
import React, { useContext, useState, useEffect } from "react";
import styles from "@/styles/chatgpt/textToSpeech.module.css";
import { sendTextToOpenai } from "../../libs/sendTextToOpenai";
import { AppContext } from "../../libs/context/IsPlayingContext";

const TextToSpeech = () => {
  const [userText, setUserText] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const {isPlaying,setIsPlaying} = useContext(AppContext)
  const [selectedVoice, setSelectedVoice] = useState(null);

  const synth = typeof window != "undefined" ? window.speechSynthesis : null; 

  useEffect(() => {
    if (synth) {
      synth.onvoiceschanged = function() {
        const voices = synth.getVoices();
        const voice = voices.find((voice) => voice.name === "Google 日本語");
        setSelectedVoice(voice);
      };
    }
  }, [synth]);

  const speak = (textToSpeak) => {
    const utterance = new SpeechSynthesisUtterance(textToSpeak);
    utterance.voice = selectedVoice;
    synth.speak(utterance);
    console.log("utterance",utterance)
    console.log("synth",synth)
    console.log("isPlaying",isPlaying)
    utterance.onstart = function() {
      console.log("Speech started");
      setIsPlaying(true);
    };
    utterance.onend = function() {
      console.log('Speech has ended');
      setIsPlaying(false);
    };

    console.log("-----------", isPlaying)
  };

  const handleUserText = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const message = await sendTextToOpenai(userText);
      speak(message);
      console.log(message);
    } catch (error) {
      let errMsg = "";
      if(error) errMsg = error.message;
      console.log(errMsg);
    } finally {
      setIsLoading(false);
      setUserText("");
    }
  };

  return (
    <div className={styles.formBox}>
      <form className={styles.form} onSubmit={handleUserText}>
        <input
          type="text"
          className={styles.textInput}
          placeholder="何か尋ねてみてください"
          value={userText}
          onChange={(e) => setUserText(e.target.value)}
        />
        <button className={styles.ask} type="submit" disabled={isLoading}>
          {isLoading ? "thinking..." : "ask"}
        </button>
      </form>
    </div>
  );
};

export default TextToSpeech;
