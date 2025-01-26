import React, { useState, useEffect } from "react";
import { fetchCharacterByName } from "../api";
import SearchBar from "./SearchBar";

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
    <div className="min-h-screen bg-[#0F172A] text-white flex flex-col items-center p-6">
      <h1 className="text-4xl font-bold mb-6 text-center text-[#60A5FA] flex items-center gap-2">
        🔍 Rick and Morty Character Search
      </h1>

      <SearchBar name={name} setName={setName} />
    </div>
  );
};

export default SearchCharacter;
