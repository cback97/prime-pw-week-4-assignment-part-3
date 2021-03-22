console.log('***** Cart Functions *****');
// Make sure to test all functions here in the JS file!
// We want to see how you are testing your code!!!
let basket = [];

function addItem(item) {
    console.log('We are adding:', item);
    if (basket.push(item)) {
        return true;
    }
    return false;
}

function listItems(array) {
    for (let i = 0; i <= array.length - 1; i++) {
        console.log('item in basket:', array[i]);
    }
}

function empty(array) {
    array.length = 0;
    console.log('Basket is now showing', array);
}

addItem('onion')
addItem('tomato')
addItem('lettuce')
addItem('bacon')
addItem('pudding')
listItems(basket)
empty(basket)