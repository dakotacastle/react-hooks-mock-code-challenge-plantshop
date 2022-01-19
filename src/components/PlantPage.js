import React, {useState, useEffect} from "react";
import NewPlantForm from "./NewPlantForm";
import PlantList from "./PlantList";
import Search from "./Search";

function PlantPage() {
  const [plants, setPlants]= useState([]);
  const [searchTerm, setSearchTerm]= useState("");

  useEffect(() => {
    fetch("http://localhost:6001/plants")
    .then((resp) => resp.json())
    .then((plantsArray) => {
      setPlants(plantsArray);
    });
  }, []);

  function handleAddPlant(newPlant) {
    const updatedPlantsArray = [...plants, newPlant];
    setPlants(updatedPlantsArray);
  }

  function handleDeletePlant(id) {
    const updatedPlantsArray = plants.filter((plant) => plant.id !== id);
    setPlants(updatedPlantsArray);
  }

  function handleChangePlant(changedPlant) {
    const updatedPlantsArray = plants.map((plant) => {
      if (plant.id === changedPlant.id) {
        return changedPlant;
      } else {
        return plant;
      }
    });
    setPlants(updatedPlantsArray);
  }

  const displayedPlants = plants.filter((plant) => {
    return plant.name.toLowerCase().includes(searchTerm.toLocaleLowerCase());
  });

  return (
    <main>
      <NewPlantForm onAddPlant={handleAddPlant}/>
      <Search searchTerm={searchTerm} onSearchChange={setSearchTerm}/>
      <PlantList 
      plants={displayedPlants}
      onDeletePlant={handleDeletePlant}
      onChangePlant={handleChangePlant}
      />
    </main>
  );
}

export default PlantPage;
