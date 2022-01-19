import React from "react";
import PlantCard from "./PlantCard";

function PlantList({plants, onDeletePlant, onChangePlant}) {
  return (
    <ul className="cards">
      {plants.map((plant) => {
        return (
          <PlantCard
            key={plant.id}
            plant={plant}
            onDeletePlant={onDeletePlant}
            onChangePlant={onChangePlant}
          />
        );
      })}
    </ul>
  );
}

export default PlantList;
