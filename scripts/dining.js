
  let a = fetch("https://ourhomeserver.onrender.com/products?category=dining");
  a.then((value) => {
    return value.json();
  }).then((value2) => {
    console.log(value2);
  });

  let product = document.getElementById("product");
  function createCart(item) {
    let cardDiv = document.createElement("div");
    cardDiv.className = "card";
    let img = document.createElement("img");
    img.src = item.image;
    img.className = "card-img-top";
    cardDiv.append(img);
    let cardBody = document.createElement("div");
    cardBody.className = "card-body";
    let link=document.createElement("a");
    link.href=item.name;
    let price=document.createComment("p");
    price.innerText=item.price;
    cardBody.append(link,price);
    return cardBody.cardDiv;

  }
