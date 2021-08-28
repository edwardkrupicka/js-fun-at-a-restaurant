function nameMenuItem(name) {
  return "Delicious " + name;
};


function createMenuItem(name, price, type) {
  return {
    name: name,
    price: price,
    type: type
  }
};


function addIngredients(ingredient, array) {
  if(array.indexOf(ingredient) === -1) {
    array.push(ingredient);
  }
};


function formatPrice(price) {
  return `$${price}`;
};


function decreasePrice (price) {
  return (9 / 10) * price;
};


function createRecipe (title, ingredients, menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
};

module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
