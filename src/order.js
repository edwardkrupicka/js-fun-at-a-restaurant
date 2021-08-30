function takeOrder(order, deliveryOrders) {
  if(deliveryOrders.length < 3) {
    deliveryOrders.push(order);
  }
};

function refundOrder(oNumber, deliveryOrders) {
  for(i = 0; i < deliveryOrders.length; i++) {
    if(oNumber == deliveryOrders[i].orderNumber) {
      deliveryOrders.splice(i, 1);
    } //omg this one was painful
  }
};

function listItems(deliveryOrders) {
  var items = "";
  for(var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders.length - 1 === i) {
      items += `${deliveryOrders[i].item}`
    }
    else {
      items += `${deliveryOrders[i].item}, `
    }
  }
  return items;
};// P A I N, thank god for studyhall

function searchOrder(deliveryOrders, item) {
  var result = false;
  for(var i = 0; i < deliveryOrders.length; i++) {
    if(deliveryOrders[i].item === item) {
      return true;
    }
  }
  return false;
};


module.exports = {
  takeOrder,
  refundOrder,
  listItems,
  searchOrder
}
