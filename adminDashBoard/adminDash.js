let baseUrl = "http://ourhomeserver.onrender.com"

//These functions will fire off on page load adding all the data to the page dynamically
getProductData();



//Fetch product data from server

async function getProductData(){
    try {
        let response = await fetch(`https://ourhomeserver.onrender.com/products?_page=5&_limit=6`);
        let products = await response.json();
        console.log(products);
        addProductCards(products);
    } catch (error) {
        console.log(error);
    }
}

//Append product 



