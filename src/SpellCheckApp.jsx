import React, { useState } from "react";

const customDictionary = {
  teh: "the",
  wrok: "work",
  fot: "for",
  exampl: "example",
};

export default function SpellCheckApp() {
  const [text, setText] = useState("");
  const [suggestedText, setSuggestedText] = useState("");
  const handleInputChange = (e) => {
    setText(e.target.value);
    // Implement a basic spelling check and correction
    const words = text.split(" ");
    const correctedWords = words.map((word) => {
      const correctedWord = customDictionary[word.toLowerCase()];
      return correctedWord || word;
    });

    const correctedText = correctedWords.join(" ");

    // Set the suggested text (first corrected word)
    const firstCorrection = correctedWords.find(
      (word, index) => word !== words[index]
    );

    setSuggestedText(firstCorrection || "");
  };
  return (
    <div>
      <h1>Spell check and Auto-correction</h1>
      <textarea
        value={text}
        onChange={handleInputChange}
        name=""
        placeholder="Enter text..."
        id=""
        cols="40"
        rows="5"
      />
      {suggestedText && (
        <p>
          {" "}
          Did you mean: <strong>{suggestedText}</strong>?
        </p>
      )}
    </div>
  );
}
