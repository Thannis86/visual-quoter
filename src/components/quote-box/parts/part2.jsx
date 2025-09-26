import redBody from "../../../images/test-parts/tips/Black.png";
import blackBody from "../../../images/test-parts/tips/Gold.png";
import goldBody from "../../../images/test-parts/tips/Red.png";
import greyBody from "../../../images/test-parts/tips/Grey.png";

import "./part1.css";

export default function Part2({ setCurrentItem }) {
  const test = [
    { src: redBody, amount: 7 },
    { src: blackBody, amount: 2 },
    { src: goldBody, amount: 9 },
    { src: greyBody, amount: 4 },
  ];

  const newImage = (index) => {
    setCurrentItem(test[index]);
  };

  return (
    <div id="part1-box">
      {test.map((item, index) => (
        <div
          //   onClick={() => newImage(index)}
          className="test-box"
        >
          <img
            className="test-box-image"
            src={item.src}
            onClick={() => newImage(index)}
          ></img>
        </div>
      ))}
    </div>
  );
}
