import Card from "./Card";
import BookImage from "../assets/HP.webp";
import HarryImage from "../assets/Harry.webp";
import DracoImage from "../assets/Draco.webp";
import HermioneImage from "../assets/Hermione.webp";
import RonImage from "../assets/Ron.webp";

const CardList = () => {
  const handleClick = (name) => {
    console.log(`Clicked on ${name}`);
  };

  return (
    <div className="card-list">
      <Card
        BookName="Harry Potter"
        description="This is a book about Harry Potter's magical world"
        image={BookImage}
        onClick={handleClick}
      />
      <Card name="Harry" image={HarryImage} onClick={handleClick} />
      <Card name="Draco" image={DracoImage} onClick={handleClick} />
      <Card name="Hermione" image={HermioneImage} onClick={handleClick} />
      <Card name="Ron" image={RonImage} onClick={handleClick} />
    </div>
  );
};

export default CardList;