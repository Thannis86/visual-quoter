import redBody from "../../../images/test-parts/ends/Black.png";
import blackBody from "../../../images/test-parts/ends/Gold.png";
import greyBody from "../../../images/test-parts/ends/Grey.png";

import "./part1.css";

export default function Part3({ setCurrentItem }) {
  const test = [
    { src: redBody, amount: 7 },
    { src: blackBody, amount: 2 },
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
