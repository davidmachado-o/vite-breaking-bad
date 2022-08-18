import React from "react";

function Character({ character }) {
  return (
    <div className="card card-body text-white bg-dark mb-1 p-3">
      <h3>{character.name}</h3>
      <p>Occupation: {character.occupation[0]}</p>
      <p>Status: {character.status}</p>
      <img className="img-fliud" src={character.img} alt={character.name} />
    </div>
  );
}

export default Character;
