let baseUrl = "http://ourhomeserver.onrender.com"

//These functions will fire off on page load adding all the data to the page dynamically
getProductData();
getUserData();
getOrdersData();
getSalesNumbers();



//Fetch product data from server

async function getProductData(){
    try {
        let response = await fetch(`https://ourhomeserver.onrender.com/products?_page=8&_limit=6`);
        let products = await response.json();
        addProductCards(products);
    } catch (error) {
        console.log(error);
    }
}

//Append product data to the cards

function addProductCards(data){
  
    let buttons = document.querySelectorAll(`.product-card>div>a`);
    let images = document.querySelectorAll(`.product-card>img`);
    let names = document.querySelectorAll(`.product-card>div>h5`);

    for(var i=0; i<6; i++){
        names[i].innerText = `${data[i].name}`;
        images[i].setAttribute("src",`${data[i].image}`);
        buttons[i].classList.toggle(`disabled`);
        buttons[i].classList.toggle(`placeholder`);
    }   
}

//Function to fetch user data from the server

async function getUserData(){
    try {
        let response = await fetch(`https://ourhomeserver.onrender.com/users?_page=1&_limit=3`);
        let users = await response.json();
        addUserTable(users);
    } catch (error) {
        console.log(error);
    }
}

//function to append user data to DOM

function addUserTable(users){
  
    let tableRow = document.querySelectorAll(`#user-table>tbody>tr`);
    for(var i=0; i<3; i++){
        tableRow[i].children[1].innerText = `${users[i].name}`;
        tableRow[i].children[2].innerText = `${users[i].country}`;
        tableRow[i].children[3].innerText = `${users[i].email}`;
    }
    
}

//Function to fetch order data from the server

async function getOrdersData(){
    try {
        let response = await fetch(`https://ourhomeserver.onrender.com/orders?_page=1&_limit=3`);
        let orders = await response.json();
        addOrderTable(orders);
    } catch (error) {
        console.log(error);
    }
}

//function to append order data to DOM

function addOrderTable(orders){
    let tableRow = document.querySelectorAll(`#orders-table>tbody>tr`);
    for(var i=0; i<3; i++){
        tableRow[i].children[1].innerText = `${orders[i].id}`;
        tableRow[i].children[2].innerText = `${orders[i].userId}`;
        tableRow[i].children[3].innerText = `${orders[i].totalPrice}`;
    }
}

//function to fetch the sales numbers

async function getSalesNumbers(){
    try {
        let response = await fetch(`https://ourhomeserver.onrender.com/saleNumbers`);
        let data = await response.json();
        addSalesData(data);
    } catch (error) {
        console.log(error);
    }
}

//function to append sales data to DOM

function addSalesData(data){
    let salesNumber = document.querySelectorAll(`.sales-numbers`);
    console.log(salesNumber);

    for(var i=0; i<4; i++){
        salesNumber[i].classList.toggle("placeholder-glow");
        
        switch(i){
            case 0:
                salesNumber[i].innerHTML = `€${data.totalSales}`;
                break;

            case 1:
                salesNumber[i].innerHTML = `€${data.salesThisYear}`;
                break;

            case 2:
                salesNumber[i].innerHTML = `${data.totalOrders} Units`;
                break;

            case 3:
                salesNumber[i].innerHTML = `${data.ordersThisYear} Units`;
                break;
        }
    }
}

