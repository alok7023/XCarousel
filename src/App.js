import React, { useState,useEffect } from "react";
import "./App.css";
const data = [
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSqNO0XhNE6Y4vmDq6FfN5mAf1njoDuYL7GIzgnSToXXw&s",
  "https://wallpapers.com/images/hd/random-background-1920-x-1200-6ciewyud1u8r1xkl.jpg",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXDPJvq332LmEVCxF1CNrYs1cHaSZne_alUJe-6Ac5Ug&s",
  "https://images8.alphacoders.com/454/454637.jpg",
  "https://preview.redd.it/random-wallpapers-v0-cs2m56yen0tb1.jpg?width=640&crop=smart&auto=webp&s=f9a4f2c94a2f03a2890e4a6a2b959fd0e89bc59f",
];
function App() {
  const [imgIndex, setImgIndex] = useState(0);
  const handleDecrement = () => {
    setImgIndex((prevIndex) =>
      prevIndex === 0 ? data.length - 1 : prevIndex - 1
    );
  };
  const handleIncrement = () => {
    setImgIndex((prevIndex) =>
      prevIndex === data.length - 1 ? 0 : prevIndex + 1
    );
  };
  useEffect(()=> {
    const timerId = setTimeout(() => {
      handleIncrement();
    },2000)
    return () => {
      clearTimeout(timerId);
    }
  },[imgIndex])
  return (
    <div className="App">
      <h1>React Carousel</h1>
      <div className="container">
        <button onClick={handleDecrement}>Prev</button>
        {/* {<img src={data[imgIndex]} alt="wallpaper" />} */}
        {data.map((url, i) => (
          <img
            key={i}
            src={url}
            alt="wallpaper"
            className={imgIndex === i ? 'carousel-image active' : 'carousel-image'}
          />
        ))}
        <button onClick={handleIncrement}>Next</button>
      </div>
    </div>
  );
}

export default App;
