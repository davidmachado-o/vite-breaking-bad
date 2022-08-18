import React, { useState, useEffect } from "react";
import Character from "./Character";

function CharacterList() {
  const [characters, setCharacters] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchData() {
      const response = await fetch(
        "https://www.breakingbadapi.com/api/characters"
      );
      const data = await response.json();
      setLoading(false);
      setCharacters(data);
    }
    fetchData();
  }, []);

  return (
    <div className="container text-white">
      {loading ? (
        <div className="d-flex justify-content-center">
          <div className="spinner-border" role="status"></div>
        </div>
      ) : (
        <div className="row">
          {characters.map((character) => {
            return (
              <div className="col-md-4" key={character.char_id}>
                <Character character={character} />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default CharacterList;
