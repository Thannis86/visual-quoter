import { useState } from "react";
import Part1 from "./parts/part1";
import "../../main.css";

import test_img1 from "../../images/1.png";

export default function QuoteBox() {
  const [currentItem, setCurrentItem] = useState([
    { src: test_img1, amount: "£1" },
  ]);

  console.log(test);
  return (
    <div id="quote-box">
      <div id="visual-box">
        <img src={currentItem.src} id="test-image"></img>
        <p id="test-amount">{currentItem.amount}</p>
        <Part1 setCurrentItem={setCurrentItem} />
      </div>
    </div>
  );
}
