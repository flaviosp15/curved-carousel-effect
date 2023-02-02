import './Carousel.css';

function Carousel() {
  const arrayOfImages = [];

  for (let i = 1; i < 15; i++) {
    try {
      const image = require(`./images/image-${i}.jpg`)
        .match(/(image-\d{1,})|(\.\D{3,})/g)
        .join('');
      arrayOfImages.push(image);
    } catch (e) {
      break;
    }
  }
  return (
    <div className="slider-container">
      <div className="inner-slider">
        {arrayOfImages.map((img, i) => {
          return <img key={i} src={require(`./images/${img}`)} alt={`Home Design ${i}`} />;
        })}
      </div>
    </div>
  );
}

export default Carousel;
