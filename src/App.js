import "./App.css";
import { useState, useEffect } from "react";
import SearchBox from "./components/Searchbox/SearchBox.jsx";
import CardList from "./components/card-list/CardList.jsx";

function App() {
  const [monster, setMonster] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");

  console.log("render...");

  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((reponse) => reponse.json())
      .then((data) => {
        setMonster(data);
      });
  }, []);

  return (
    <>
      <div className="App">
        <h1 className="app-title">Monsters Rolodex</h1>
        <SearchBox searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <CardList monsters={monster} searchQuery={searchQuery} />
      </div>
    </>
  );
}

export default App;
