import React from "react";
import { Loader, Badge } from ".";
import { useNavigate } from "react-router-dom";
import types from "styles/type.module.css";
import styles from "./styles/card.module.css";

export const Card = ({
  img,
  name,
  id,
  // description,
  loading,
  type,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={styles.card}
      onClick={() => navigate(`stats/${id}/${name}`)}
    >
      {!loading ? (
        <div
          className={styles.card__media}
          style={{ backgroundImage: `url(${img})` }}
        />
      ) : (
        <Loader />
      )}
      <div className={`${styles.card__content} ${types[type[0].type.name]}`}>
        {!loading ? (
          <>
            <h2 data-testid="card-name" className={styles.pokemonName}>
              {name}
            </h2>
            <div className={styles["type-container"]}>
              {type.map((item, index) => (
                <Badge key={index} item={item} />
              ))}
            </div>
          </>
        ) : (
          <h2 className={styles.pokemonName}>...Loading</h2>
        )}
        {/* <hr /> */}
        {/* {!loading ? (
          <p style={{ fontSize: "1.25rem" }}>{description}</p>
        ) : (
          <p tyle={{ fontSize: "1.25rem" }}>...Loading</p>
        )} */}
      </div>
    </div>
  );
};
