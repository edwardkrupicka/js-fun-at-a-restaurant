
function createRestaurant(name) {
  return {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
};

function addMenuItem(restaurantName, item) {
  if(restaurantName.menus[item.type].includes(item)){
    return
  } else {
    restaurantName.menus[item.type].push(item)
  }
};

function removeMenuItem(restaurantName, item, type) {

  for (var i = 0; i < restaurantName.menus[type].length; i++) {
    if (restaurantName.menus[type][i].name === item) {
      restaurantName.menus[type].splice(restaurantName.menus[type].indexOf(item), 1)
      return `No one is eating our ${item} - it has been removed from the ${type} menu!`
    }
  }
  return `Sorry, we don't sell ${item}, try adding a new recipe!`
};

module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
