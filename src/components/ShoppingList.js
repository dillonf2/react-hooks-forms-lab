import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";
import { v4 as uuid } from "uuid";

function ShoppingList({ items }) {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [filterBy, setFilterBy]= useState("")
  const [submittedData,setSubmittedData]=useState(items)
  const [submissionName, setSubmissionName]=useState("")
  const [submissionCategory, setSubmissionCategory]=useState("Produce")

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }
  function handleSearchChange(event){
    setFilterBy(event.target.value)
  }
  function handleNameSubmissions(event){
    setSubmissionName(event.target.value)
  }
  function handleCategorySubmissions(event){
    setSubmissionCategory(event.target.value)
  }

  function handleSubmit(event){
    event.preventDefault()
    const newItem = {
      id: uuid(), 
      name: submissionName,
      category: submissionCategory
    };
    setSubmittedData(items.push(newItem))
  }

  const itemsToDisplay = items.filter((item) => selectedCategory === "All"|| item.category===selectedCategory)
    .filter((item)=> item.name.toLowerCase().includes(filterBy.toLowerCase()))
  
  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={handleSubmit} handleNameSubmissions={handleNameSubmissions} handleCategorySubmissions={handleCategorySubmissions}/>
      <Filter onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} search={filterBy}/>
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
