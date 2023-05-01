import React from "react";
import { v4 as uuid } from "uuid";

function ItemForm({ onItemFormSubmit, handleNameSubmissions, handleCategorySubmissions }){
  return (
    <form className="NewItem" onSubmit={onItemFormSubmit}>
      <label>
        Name:
        <input type="text" name="name" onChange={handleNameSubmissions}/>
      </label>

      <label>
        Category:
        <select name="category" onChange={handleCategorySubmissions}>
          <option value="Produce">Produce</option>
          <option value="Dairy">Dairy</option>
          <option value="Dessert">Dessert</option>
        </select>
      </label>

      <button type="submit" value="Submit">Add to List</button>
    </form>
  );
}

export default ItemForm;
