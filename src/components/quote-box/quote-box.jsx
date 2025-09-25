import { useState } from "react";
import test_img1 from "../../images/1.png";
import test_img2 from "../../images/2.png";
import test_img3 from "../../images/3.png";
import test_img4 from "../../images/4.png";

export default function QuoteBox() {
  const test = [
    { src: test_img1, color: "yellow" },
    { src: test_img2, color: "red" },
    { src: test_img3, color: "blue" },
    { src: test_img4, color: "green" },
  ];

  const [currentImage, setCurrentImage] = useState(0);

  const newImage = (number) => {
    setCurrentImage(number), console.log(currentImage);
  };

  console.log(test);
  return (
    <div id="quote-box">
      <img src={test[currentImage].src} className="test_img"></img>
      {test.map((item, index) => (
        <div
          key={index}
          className="testBox"
          alt={`Test ${index + 1}`}
          style={{ backgroundColor: `${item.color}` }}
          onClick={() => newImage(index)}
        ></div>
      ))}
    </div>
  );
}
