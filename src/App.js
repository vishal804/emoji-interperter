import React, { useState } from "react";
import { emojiDictionary } from "./emojis";
import "./styles.css";

var emoji = Object.keys(emojiDictionary);

export default function App() {
  const [meaning, setMeaning] = useState("");

  function emojiInput(event) {
    var userInput = event.target.value;
    setMeaning(emojiDictionary[userInput]);
  }

  function clickHandler(item) {
    var meaning = emojiDictionary[item];
    setMeaning(meaning);
  }

  return (
  <div className="App">
      <header id="heading">
      <h1>Emojipedia</h1>
      <h3 id="sub-heading">Confuse with the meaning of Emoji 
      <br></br>
      Well check it out here! Just type an Emoji in the search bar or Select from below
      </h3>
      </header>
      
    <section id="content">
    <div id="serachbar">
    <input id="input" placeholder="Type in Your Emoji here" onChange={emojiInput}></input>
      <div id="meaning"> {meaning} </div>
    </div>
      

      <div id="list">
        {emoji.map((item) => {
          return <span onClick={() => clickHandler(item)}> {item} </span>;
        })}
      </div>
    </section>

      
  </div>
  );
}
