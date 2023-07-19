import { useContext } from "react";
import { STATUS_COLORS } from "../../constants/colors";
import Badge from "../Badge/Badge";
import styles from "./cardCharacter.module.css";
import { EpisodeContext } from "../../context/EpisodeContext";

const CardCharacter = ({
  name = "",
  status = "",
  species = "",
  image = "",
  id,
  character,
}) => {
  const [, setChosenCharacters] = useContext(EpisodeContext);

  const chosenCharacterHandler = (e) => {
    const { name, value } = e.target;
    setChosenCharacters((prevState) => ({ ...prevState, [name]: value }));
  };

  return (
    <div
      style={{ backgroundImage: `url(${image})` }}
      className={styles.character_card_container}
    >
      <input
        className={styles.radio_input}
        type="radio"
        name={character}
        value={id}
        id={id}
        onClick={chosenCharacterHandler}
      />
      <div
        style={{
          width: "100%",
          fontSize:'1.8rem',
          textAlign:'center',
          height: "100px",
          "background-image":
            "linear-gradient(to bottom, rgba(0, 0, 0, 0), rgba(0, 0, 0, 1))",
        }}
      >
        <p>{name}</p>
        <div className={styles.status_container}>
          <Badge color={STATUS_COLORS[status]} />
          <p>
            {status} - {species}
          </p>
        </div>
      </div>
    </div>
  );
};

export default CardCharacter;
