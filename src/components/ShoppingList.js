import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterSearch, setFilterSearch] = useState("");

  

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }


  const itemsToDisplay = items.filter((item) => {
    if (selectedCategory === "All") return true;

    return item.category === selectedCategory;
  });

  const itemsOnPage = items.filter((item) => {
    if (filterSearch === "") return true;
    return item.name === filterSearch;
  })

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit}/>
      <Filter onCategoryChange={handleCategoryChange} search={filterSearch}  onSearchChange={setFilterSearch}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
