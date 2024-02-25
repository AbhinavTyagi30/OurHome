
let flag=false;
  let url="https://ourhomeserver.onrender.com/products?category=clothing and footwear"

  async function fetchData(page=1){
    try{
      let res = await fetch(`${url}&_page=${page}&_limit=10`, {
        method:"GET"
      })
  
      let TotalData = res.headers.get("X-Total-Count");
      let limit = 5;
      let TotalPages = Math.ceil(TotalData/limit);
      console.log(TotalPages);
  
      let data = await res.json();
      console.log(data);
      updateUI(data);
      
      flag=true;
    }catch(error){
      console.log(error);
    }
  }
  fetchData();
  function updateUI(data){
    const priceContainer = document.getElementById('price');
    data.forEach((item, index)=>{
      let card=createCard(item, index);
      priceContainer.append(card);
    })
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
  
  
    let heart=document.createElement("button");
    const heartIcon = document.createElement('i');
    heartIcon.classList.add('fa-regular', 'fa-heart');
    heart.style.fontSize="18px";
    heart.appendChild(heartIcon);
    heart.addEventListener("click",(e)=>{
      e.preventDefault();
      let favorite=JSON.parse(localStorage.getItem("favorite"))|| [];
      favorite.push(card);
      localStorage.setItem("favorite",JSON.stringify(favorite));
      heart.style.color="red";
    })
  
    const priceParagraph = document.createElement('p');
    priceParagraph.textContent = `${card.price} € `;
    const basket=document.createElement("button");
  basket.className="button";
  basket.innerText="Add Basket";
  basket.style.color="black";
  basket.style.textDecoration="none"
  basket.style.fontSize="16px";
  basket.addEventListener("click",(e)=>{
    e.preventDefault();
    let cart=JSON.parse(localStorage.getItem("cart"))|| [];
    cart.push(card);
    localStorage.setItem("cart",JSON.stringify(cart));
  })

  
    cardBody.appendChild(titleLink);
    cardBody.appendChild(heart);
    cardBody.appendChild(priceParagraph);
    cardBody.appendChild(basket);
  
    cardElement.appendChild(imgElement);
    cardElement.appendChild(cardBody);
  
    return cardElement;
  }
  
  function addCards(data) {
      const priceContainer = document.getElementById('price');
  
      data.forEach(card => {
        const cardElement = createCard(card);
        priceContainer.appendChild(cardElement);
      });
    }

    let page=1;
function handleScroll(){
  
  let clientHeight = document.documentElement.clientHeight;
  let scrollHeight = document.documentElement.scrollHeight;
  let scrollTop = document.documentElement.scrollTop;

 
  if((scrollHeight - clientHeight)<=Math.ceil(scrollTop) && flag){
    console.log("we are at the bottom");
    page++;
    fetchData(page);
    flag = false;
  }
}

window.addEventListener("scroll", ()=>{
  handleScroll();
})
