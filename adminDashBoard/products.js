/* add products on load */

getProductsData(`https://ourhomeserver.onrender.com/products?_page=1&_limit=10`);

/* Toggle the sidebar */
const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

/* Search products */

let searchInput = document.getElementById("search-input");
let searchButton = document.getElementById("search-button")

searchButton.addEventListener("click", (e)=>{
    e.preventDefault();
    let searchQuery = searchInput.value;
    getProductsData(`https://ourhomeserver.onrender.com/products?q=${searchQuery}&_page=1&_limit=10`,queryParam);
});

let queryParam = null;


/* update item variables */

let addName = document.getElementById("add-name");
let addImage = document.getElementById("add-image");
let addCategory = document.getElementById("add-category");
let addPrice = document.getElementById("add-price");
let addQuantity = document.getElementById("add-quantity");
let addProduct = document.getElementById("add-product");

addProduct.addEventListener("click",(e)=>{
    e.preventDefault();

    let obj = {
        name : addName.value,
        image : addImage.value,
        category : addCategory.value,
        price : addPrice.value,
        quantity : addQuantity.value,
    }
    addNewProduct(obj);
    addName.value = "";
    addImage.value = "";
    addCategory.value = "";
    addPrice.value = "";
    addQuantity.value = "";
});

/* edit item variables */

let editId = document.getElementById("edit-id");
let editName = document.getElementById("edit-name");
let editImage = document.getElementById("edit-image");
let editCategory = document.getElementById("edit-category");
let editPrice = document.getElementById("edit-price");
let editQuantity = document.getElementById("edit-quantity");
let editProduct = document.getElementById("edit-product");

editProduct.addEventListener("click",(e)=>{
    e.preventDefault();

    let id = editId.value;

    let obj = {
        name : editName.value,
        image : editImage.value,
        category : editCategory.value,
        price : editPrice.value,
        quantity : editQuantity.value,
    }

    editProductFunc(obj,id);

    editId.value = "";
    editName.value = "";
    editImage.value = "";
    editCategory.value = "";
    editPrice.value = "";
    editQuantity.value = "";
});

/* Fetch Products Data from server */

async function getProductsData(url,queryParam){
    try {
        let response = await fetch(`${url}&${queryParam}`);
        let data = await response.json();
        
        let totalCount = response.headers.get(`X-Total-Count`);
        let totalPages = Math.ceil(totalCount/10);
        paginate(totalPages);
        appendData(data);
    } catch (error) {
        console.log(error);
    }
}

/* Append product data to product table */

function appendData(data){
    let tbody = document.getElementById("products-table-body");
    tbody.innerHTML = "";

    /* <tr>
        <th scope="col">#</th>
        <th scope="col">Name</th>
        <th scope="col">Image</th>
        <th scope="col">Category</th>
        <th scope="col">Price</th>
        <th scope="col">Quantity</th>
        <th scope="col">Edit</th>
        <th scope="col">Delete</th>
    </tr> */

    data.forEach(item=>{
		let trow = document.createElement("tr");
		let thead = document.createElement("th");
		let name = document.createElement("td");
		let image = document.createElement("td");
		let category = document.createElement("td");
		let price = document.createElement("td");
        let quantity = document.createElement("td");
        let edit = document.createElement("td");
        let delBtn = document.createElement("td");


		thead.innerText = item.id;
		name.innerText = item.name;
		
        let img = document.createElement("img");
        img.setAttribute("src",`${item.image}`);
        img.setAttribute("alt",`${item.name}`);
        img.style.width = "100px";
        img.style.maxHeight = "75px";
        image.append(img);
        

		category.innerText = item.category;
		price.innerText = `€${item.price}`;

        
        if(!item.quantity)
            quantity.innerText = Math.floor(Math.random()*125);
        else
            quantity.innerText = item.quantity;

        let editBtn = document.createElement("button");
        editBtn.classList.add("btn","btn-primary");
        editBtn.innerText = `Edit`;
        edit.append(editBtn);

        editBtn.addEventListener("click",()=>{
            editId.value = item.id;
            editName.value = item.name;
            editImage.value = item.image;
            editPrice.value = item.price;
            editCategory.value = item.category;
            editQuantity.value = item.quantity? item.quantity : quantity.innerText;
        })

        let deleteBtn = document.createElement("button");
        deleteBtn.classList.add("btn","btn-danger");
        deleteBtn.innerText = `Delete`;
        delBtn.append(deleteBtn);

        deleteBtn.addEventListener("click",()=>{
            deleteData(item.id);
        })
        

		trow.append(thead, name, img, category,price, quantity, edit, delBtn);
		tbody.append(trow);
	});
}

/* Add pagination buttons and event listeners on those buttons */

function paginate(totalPages){
    let pagWrapper = document.getElementById("pag-wrapper");
    pagWrapper.innerHTML = "";

    /* <button class="btn btn-secondary disabled">1</button> */

    for(let i=1; i<=totalPages; i++){
        let pagBtn = document.createElement("button");
        pagBtn.innerText = `${i}`;
        pagBtn.classList.add("btn","btn-secondary");
        pagWrapper.append(pagBtn);

        pagBtn.addEventListener("click",()=>{
            getProductsData(`https://ourhomeserver.onrender.com/products?_page=${i}&_limit=10`,queryParam);
        })
    }

}

/* Delete an item */

async function deleteData(id){
    try {
        let response = await fetch(`https://ourhomeserver.onrender.com/products/${id}`,{
            method: "DELETE", 
        });

        let data = await response.json();
        console.log(data);
        getProductsData(`https://ourhomeserver.onrender.com/products?_page=1&_limit=10`,queryParam);

    } catch (error) {
        console.log(error);
    }
}

/* Add product to server */

async function addNewProduct(obj){
    try {
        let response = await fetch(`https://ourhomeserver.onrender.com/products`,{
            method: "POST",
            headers: {
                "Content-type" : "application/json",
            },
            body : JSON.stringify(obj),
        });

        let data = await response.json();
        console.log(data);

        getProductsData(`https://ourhomeserver.onrender.com/products?_page=1&_limit=10`,queryParam);

    } catch (error) {
        console.log(error);
    }
}

/* Edit a Product */

async function editProductFunc(obj,id){
    try {
        let response = await fetch(`https://ourhomeserver.onrender.com/products/${id}`,{
            method: "PATCH",
            headers: {
                "Content-type": "application/json",
            },
            body: JSON.stringify(obj),
        });
        
        getProductsData(`https://ourhomeserver.onrender.com/products?_page=1&_limit=10`,queryParam);
    } catch (error) {
        console.log(error);
    }
}

