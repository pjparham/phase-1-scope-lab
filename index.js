// Write your solution in this file!
var customerName = 'bob';
function upperCaseCustomerName(){
    customerName = customerName.toUpperCase();
    return customerName;
}

//

function setBestCustomer(){
    bestCustomer = 'not bob'; //use no declaration when you need it to be global to whole program
}

function overwriteBestCustomer(){
    bestCustomer = 'maybe bob';
}
const leastFavoriteCustomer = 'mary';
function changeLeastFavoriteCustomer() {
    leastFavoriteCustomer = 'maybe mary';
}