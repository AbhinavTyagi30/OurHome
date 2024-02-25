let data = JSON.parse(localStorage.getItem("cart")) || null;

if(data){
    console.log(data);

    update(data);

    let checkout = document.getElementById("out");
    checkout.classList.toggle("disabled");
    
   



    console.log(basket);


}

function createCard(card, index) {
    const cardElement = document.createElement('div');
    cardElement.classList.add('card');
  
    
    cardElement.style.marginTop = '50px';
    cardElement.style.border = 'none';
    cardElement.style.marginLeft = '20px';
    cardElement.style.width='250px';
    cardElement.style.maxHeight='500px';
    
   
  
  
  const imgElement = document.createElement('img');
  imgElement.src = card.image;
  imgElement.classList.add('card-img-top');
  imgElement.alt = '...';
  imgElement.style.width="100%";
  imgElement.style.minHeight='200px';
  let button=document.createComment("button");
  
  
  
    const cardBody = document.createElement('div');
    cardBody.classList.add('card-body');
    
    const titleLink = document.createElement('a');
    titleLink.href = '#';
    titleLink.textContent = card.name;
    titleLink.style.textDecoration="none";
    titleLink.style.color="black";
  
    const priceParagraph = document.createElement('p');
    priceParagraph.textContent = `${card.price} € `;
    const basket=document.createElement("button");
  basket.className="button";
  basket.innerText="Delete";
  basket.style.color="red";
  basket.style.backgroundColor="white";

  basket.style.border="0px";

  basket.style.textDecoration="none"
  basket.style.fontSize="16px";
  basket.addEventListener("click",(e)=>{
    e.preventDefault();
    console.log(true)
    let cart=JSON.parse(localStorage.getItem("cart"))|| [];
    cart.splice(index,1);

    if(cart.length == 0){
        localStorage.removeItem("cart");
    }else {

        localStorage.setItem("cart",JSON.stringify(cart));

    }

    data=JSON.parse(localStorage.getItem("cart")) || null;
    
    if(data){

        update(data);

    }else {
        let basket = document.getElementById("basket");

        let checkout = document.getElementById("out");
    checkout.classList.toggle("disabled");
    
        basket.innerHTML=`<h5 style="overflow-y: hidden;">Your shopping basket is empty</h5>`;
    }
  })

  
    cardBody.appendChild(titleLink);
    cardBody.appendChild(priceParagraph);
    cardBody.appendChild(basket);
  
    cardElement.appendChild(imgElement);
    cardElement.appendChild(cardBody);
  
    return cardElement;
  }

  function update(data){

    let basket = document.getElementById("basket");
    
    basket.innerHTML="";

    data.forEach((item,index)=>{
        let cart = createCard(item,index);
        basket.append(cart);
    })

    // let ceckout = document.createElement("button");

  }

  let checkout=document.getElementById("out");

  checkout.addEventListener("click",()=>{
    localStorage.removeItem("cart");
    location.reload();
  })