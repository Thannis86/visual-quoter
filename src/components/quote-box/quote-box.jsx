import { useState } from "react";

import "../../main.css";

import test_img1 from "../../images/1.png";
import Part1 from "./parts/part1";
import Part2 from "./parts/part2";
import Part3 from "./parts/part3";

export default function QuoteBox() {
  const [part1, setPart1] = useState({
    src: test_img1,
    amount: 1,
  });

  const [part2, setPart2] = useState({
    src: test_img1,
    amount: 1,
  });

  const [part3, setPart3] = useState({
    src: test_img1,
    amount: 1,
  });

  const totalCost = part1.amount + part2.amount + part3.amount;

  console.log(part1);
  return (
    <div id="quote-box">
      <div id="visual-box">
        <img src={part1.src} id="test-image"></img>
        <img src={part2.src} id="test-image"></img>
        <img src={part3.src} id="test-image"></img>
        <p id="test-amount">${totalCost}</p>
      </div>
      <div id="parts-box">
        <Part1 setCurrentItem={setPart1} />
        <Part2 setCurrentItem={setPart2} />
        <Part3 setCurrentItem={setPart3} />
      </div>
    </div>
  );
}
