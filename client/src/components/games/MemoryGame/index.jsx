import { useEffect, useState } from "react";
import { images } from "../../../assets/games/MemoryGame/data";
import Button from "../../Button";

function MemoryGame() {
  const BLANK_CARD =
    "https://www.advgazeta.ru/upload/iblock/831/kak_pravilno_postavit_vopros_pered_ekspertom_1.jpg";
  const [imagesArray, setImagesArray] = useState([]);
  const [cardsChosen, setCardsChosen] = useState([]);
  const [cardsChosenIds, setCardsChosenIds] = useState([]);
  const [points, setPoints] = useState(0);

  const [openCards, setOpenCards] = useState([]);

  function createCardBoard() {
    const imagesGenerated = images?.concat(...images);
    console.log(imagesGenerated);
    const shuffledArray = shuffleArray(imagesGenerated);
    setImagesArray(shuffledArray);
  }

  function flipImage(image, index) {
    // CHECK IF IMAGE IS SELECTED
    console.log(image, index);

    if (cardsChosenIds?.length === 1 && cardsChosenIds[0] === index) {
      return;
    }

    // Check if
    if (cardsChosen?.length < 2) {
      setCardsChosen((cardsChosen) => cardsChosen?.concat(image));
      setCardsChosenIds((cardsChosenIds) => cardsChosenIds?.concat(index));

      if (cardsChosen?.length === 1) {
        // Check if images are the same
        if (cardsChosen[0] === image) {
          setPoints((points) => points + 2);
          setOpenCards((openCards) =>
            openCards?.concat([cardsChosen[0], image])
          );
        }
        setTimeout(() => {
          setCardsChosenIds([]);
          setCardsChosen([]);
        }, 700);
      }
    }
  }

  function isCardChosen(image, index) {
    return cardsChosenIds?.includes(index) || openCards?.includes(image);
  }

  function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [array[i], array[j]] = [array[j], array[i]];
    }
    console.log(array);
    return array;
  }

  function startOver() {
    setCardsChosenIds([]);
    setCardsChosen([]);
    setPoints(0);
    setOpenCards([]);
  }

  useEffect(() => {
    createCardBoard();
  }, []);

  return (
    <div className="container py-32 m-auto">
      <h3 className="mb-2">Найдено пар: {points / 2}</h3>
      <div className="mt-2 grid grid-rows-4 grid-flow-col gap-4">
        {imagesArray?.map((image, index) => {
          return (
            <div
              className="object-cover h-36 w-36 bg-cover "
              key={index}
              onClick={() => flipImage(image, index)}
            >
              <img
                src={isCardChosen(image, index) ? image : BLANK_CARD}
                alt=""
                className="object-cover h-full w-full  "
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default MemoryGame;
