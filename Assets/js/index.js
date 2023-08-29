const featuredProductSection = document.querySelector('.product-card-container-1');
const newArrivalProductSection = document.querySelector('.product-card-container-2');


const fetchFeaturedProducts = ()=>{
    fetch('/db.json')
    .then(response=>response.json())
    .then(data=>createFeaturedProducts(data))
}

const fetchNewArrivalProducts = ()=>{
    fetch('/db.json')
    .then(response=>response.json())
    .then(data=>createNewArrivalProducts(data))
}




const createFeaturedProducts = (object)=>{
   object.featuredProducts.forEach(element=>{
    const productItem = document.createElement('div');
    productItem.setAttribute('class','product-card')
    productItem.innerHTML = `<img src="${element.image}">
    <h5>${element.brand}</h5>
    <h3>${element.type}<h3>
    <div class="rating-container">
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    <i class="fa-solid fa-star"></i>
    </div>
    <h4>$${element.price}</h4>
    <button class="cart-button"><i class="fa-solid fa-cart-shopping fa-lg"></i></button>
    `;
    featuredProductSection.appendChild(productItem);
   })
}


const createNewArrivalProducts = (object)=>{
    object.newArrivals.forEach(element=>{
     const productItem = document.createElement('div');
     productItem.setAttribute('class','product-card')
     productItem.innerHTML = `<img src="${element.image}">
     <h5>${element.brand}</h5>
     <h3>${element.type}<h3>
     <div class="rating-container">
     <i class="fa-solid fa-star"></i>
     <i class="fa-solid fa-star"></i>
     <i class="fa-solid fa-star"></i>
     <i class="fa-solid fa-star"></i>
     <i class="fa-solid fa-star"></i>
     </div>
     <h4>$${element.price}</h4>
     <button class="cart-button"><i class="fa-solid fa-cart-shopping fa-lg"></i></button>
     `;
     newArrivalProductSection.appendChild(productItem);
    })
 }

fetchFeaturedProducts();
fetchNewArrivalProducts();