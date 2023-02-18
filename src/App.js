import React, {useState} from "react";
import './App.css';
var emojiDictionary ={
  "😊":"smiling",
  "😳" :"disbelief",
  "😔":"sad",
  "🥡":"takeout box",
  "❤️":"love",
  "😑":"annoyance"
};
var emojisWeknow=Object.keys(emojiDictionary);
 
function App() {
  const [meaning,setmeaning]=useState("");
  function emojiInputHandler(event){
    var userInput = event.target.value;
    var meaning = emojiDictionary[userInput];
    if(meaning===undefined){
      meaning ="we don't have this in our database";
    }
    setmeaning(meaning);
  }
  function emojiClickHandler(emoji) {
    var meaning = emojiDictionary[emoji];
    setmeaning(meaning);
  }
  return (
    <div className="App">
      <h1>inside outt!</h1>
      <input onChange={emojiInputHandler}></input>
      <h2>translation will appear here...</h2>
      <h2>{meaning}</h2>
      <h3>emojis we know</h3>
      {emojisWeknow.map(function (emoji){
        return(
          <span onClick={()=>emojiClickHandler(emoji)}
          style={{fontSize:"2rem",padding:"0.5rem", cursor:"pointer"}}
          key={emoji}>
            {emoji}
          </span>
        )
      })}
        
    </div>
  );
}

export default App;
