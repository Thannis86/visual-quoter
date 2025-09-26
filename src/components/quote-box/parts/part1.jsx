import test_img1 from "../../../images/1.png";
import test_img2 from "../../../images/2.png";
import test_img3 from "../../../images/3.png";
import test_img4 from "../../../images/4.png";

export default function Part1(setCurrentItem) {
  const test = [
    { src: test_img1, color: "yellow", amount: "£1" },
    { src: test_img2, color: "red", amount: "£2" },
    { src: test_img3, color: "blue", amount: "£3" },
    { src: test_img4, color: "green", amount: "£4" },
  ];

  const newImage = (number) => {
    setCurrentItem(test[number]), console.log(currentItem);
  };

  return (
    <div>
      {test.map((item, index) => (
        <img
          className="test-box-image"
          src={item.src}
          onClick={() => newImage(index)}
        ></img>
      ))}
    </div>
  );
}
