import React from "react";

const TextInput = (text) => {
  const formatText = (text) => {
    const boldRegex = /\[B\](.*?)\[\/B\]/g;
    const italicRegex = /\[I\](.*?)\[\/I\]/g;
    const underlineRegex = /\[U\](.*?)\[\/U\]/g;
    const colorRegex = /\[C:(.*?)\](.*?)\[\/C\]/g;

    const boldText = text.replace(boldRegex, "<b>$1</b>");
    const italicText = boldText.replace(italicRegex, "<i>$1</i>");
    const underlineText = italicText.replace(underlineRegex, "<u>$1</u>");
    const colorText = underlineText.replace(
      colorRegex,
      "<span style='color:$1'>$2</span>"
    );

    return colorText;
  };

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: formatText(text) }} />
    </>
  );
};

export default TextInput;
