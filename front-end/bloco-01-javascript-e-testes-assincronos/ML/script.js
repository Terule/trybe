// const fetch = require('node-fetch');

const productList = document.querySelector('#products-list')

async function fetchProducts(query = 'computador') {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=$${query}`;
  const response = await fetch(url);
  const data = await response.json()
  return data;


  
}

const createProductImg = (imageUrl) => {
  const productImg = document.createElement('img');
  productImg.classList.add('thumbnail');
  productImg.src = imageUrl;
  return productImg; 
};

const verifyPrices = (originalPrice, currentPrice) => {
  const originalPriceText = document.querySelector('.original-price');
  const discountText = document.querySelector('.discount');
  if(!originalPrice || originalPrice === currentPrice) {
    originalPriceText.classList.add('hide');
    discountText.classList.add('hide');
  }
}

const createCurrentPriceDiv = (originalPrice, currentPrice) => {
  const discount = ((originalPrice - currentPrice) * 100) / originalPrice;
  const currentPriceDiv = document.createElement('div');
  const currentPriceText = document.createElement('p');
  const discountText = document.createElement('p');

  currentPriceText.innerText = `R$ ${parseFloat(currentPrice).toFixed(2)}`;
  discountText.innerText = `${Math.floor(discount)}% OFF`;
  currentPriceDiv.classList.add('prices');
  currentPriceText.classList.add('current-price')
  discountText.classList.add('discount')
  if(originalPrice === currentPrice || !originalPrice) discountText.classList.add('hide');

  currentPriceDiv.appendChild(currentPriceText)
  currentPriceDiv.appendChild(discountText)

  return currentPriceDiv;
}

const createProductPriceDiv = (originalPrice, currentPrice) => {
  const priceContainer = document.createElement('div');
  const originalPriceText = document.createElement('p')
  originalPriceText.classList.add('original-price');
  if(!originalPrice) originalPriceText.classList.add('hide');
  originalPriceText.innerText = `R$ ${parseFloat(originalPrice).toFixed(2)}`;
  priceContainer.classList.add('price-container')
  
  priceContainer.appendChild(originalPriceText)
  priceContainer.appendChild(createCurrentPriceDiv(originalPrice, currentPrice))
  return priceContainer;
}

const createProductDetails = (title, currentPrice, originalPrice) => {
  const description = document.createElement('div')

  description.appendChild(createProductPriceDiv(originalPrice, currentPrice));
  //TODO call createProductTitle()
  //TODO call createProduct??()

  return description;
};

const createProductCard = (product) => {
  const {title, thumbnail, original_price: originalPrice, price} = product;
  const btn = document.createElement('button')
  const productCard = document.createElement('div');
  const hr = document.createElement('hr')
  productCard.classList.add('card')
  
  btn.innerText = 'Adicionar ao carrinho'

  productCard.appendChild(createProductImg(thumbnail));
  productCard.appendChild(hr);
  productCard.appendChild(createProductDetails(title, price, originalPrice))
  productCard.appendChild(btn)
  return productCard;
};


async function getAllProducts() {
  const products = await fetchProducts()
  const {results} = products
  
  console.log(results);

  results.forEach((element) => {
     productList.appendChild(createProductCard(element))
  });
}

getAllProducts()