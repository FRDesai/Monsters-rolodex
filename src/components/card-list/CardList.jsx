import React from "react";
import "./CardList.css";
import Card from "../Card/Card";

const CardList = ({ monsters, searchQuery }) => {
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchQuery.toLowerCase())
  );
  return (
    <>
      <div className="card-list">
        {filteredMonsters.map((monster) => (
          <Card name={monster.name} id={monster.id} email={monster.email} />
        ))}
      </div>
    </>
  );
};

export default CardList;
