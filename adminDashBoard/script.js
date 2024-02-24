/* Fire these functions on load to get all the data and append it to DOM */
localStorage.setItem(`currUser`,JSON.stringify({"name": "Abhinav"}))
getOrdersData();
addProfileData();



/* Toggle the sidebar */
const sidebarToggle = document.querySelector("#sidebar-toggle");
sidebarToggle.addEventListener("click",function(){
    document.querySelector("#sidebar").classList.toggle("collapsed");
});

/* Allow user to logout */

let logout = document.getElementById("logout");
logout.addEventListener("click",()=>{
	localStorage.removeItem(`currUser`);
	addProfileData();
})

/*Fetch Orders data*/

async function getOrdersData(){
	try {
		let response = await fetch(`https://ourhomeserver.onrender.com/orders?_page=1&_limit=10`);
		let data = await response.json();
		addOrdersData(data);
	} catch (error) {
		console.log(error);
	}
}

/*append orders data to the table */

function addOrdersData(data){
	let tbody = document.getElementById(`orders-table-body`);
	tbody.innerHTML="";

	let totalSales = 0;

	/*<tr>
      <th scope="row">1</th>
      <td>OrderId</td>
      <td>UserId</td>
      <td>Name</td>
	  <td>Price</td>
    </tr> */

	data.forEach((item,index)=>{
		let trow = document.createElement("tr");
		let thead = document.createElement("th");
		let orderId = document.createElement("td");
		let userId = document.createElement("td");
		let name = document.createElement("td");
		let price = document.createElement("td");

		thead.innerText = index+1;
		orderId.innerText = item.id;
		userId.innerText = item.userId;
		name.innerText = item.userName;
		price.innerText = `€${item.totalPrice}`;

		trow.append(thead,orderId, userId, name, price);
		tbody.append(trow);

		totalSales += item.totalPrice;
	});

	let saleNumber = document.getElementById("total-earnings");
	saleNumber.innerHTML = `€${totalSales}`;
	saleNumber.classList.toggle("placeholder-glow");

	let lastMonthProfit = document.getElementById("last-month-per");
	lastMonthProfit.innerHTML = `9%`;
}

/* Append profile data to the DOM */

function addProfileData(){
	let userData = JSON.parse(localStorage.getItem(`currUser`)) || null;

	if(!userData){
		window.location.href = "../index.html";
	}

	let admin = document.getElementById("admin-name");
	admin.classList.toggle("placeholder-glow");
	admin.innerHTML = userData.name;
}






