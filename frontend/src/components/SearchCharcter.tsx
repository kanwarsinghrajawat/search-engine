import React, { useState, useEffect } from "react";
import { fetchCharacterByName } from "../api";

const SearchCharacter: React.FC = () => {
  const [name, setName] = useState<string>("");

  useEffect(() => {
    if (!name.trim()) return;

    const fetchCharacters = async () => {
      try {
        const results = await fetchCharacterByName(name);
        console.log("Fetched Characters:", results);
      } catch (err) {
        console.error("Error fetching character:", err);
      }
    };

    fetchCharacters();
  }, [name]);

  return (
    <div>
      <input
        type="text"
        placeholder="Enter character name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
    </div>
  );
};

export default SearchCharacter;
