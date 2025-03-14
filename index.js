const express = require('express');
const { resolve } = require('path');

const app = express();
const port = 3010;
let cors=require('cors')
app.use(cors());
app.use(express.static('static'));

let products = [
  {
    id: 1,
    name: "Xiaomi iPhone 12",
    brand: "Xiaomi",
    price: 60000,
    ram: 6,
    rom: 256,
    rating: 4.5,
    os: "Android",
    camera: 108,
  },
  {
    id: 2,
    name: "Oppo Mi 10",
    brand: "Xiaomi",
    price: 30000,
    ram: 6,
    rom: 512,
    rating: 4,
    os: "iOS",
    camera: 64,
  },
  {
    id: 3,
    name: "Samsung Mi 10",
    brand: "Oppo",
    price: 20000,
    ram: 4,
    rom: 256,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 4,
    name: "Apple Find X2",
    brand: "Samsung",
    price: 60000,
    ram: 8,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 48,
  },
  {
    id: 5,
    name: "Oppo Mi 11",
    brand: "Xiaomi",
    price: 30000,
    ram: 12,
    rom: 128,
    rating: 4,
    os: "iOS",
    camera: 24,
  },
  {
    id: 6,
    name: "OnePlus Find X3",
    brand: "Apple",
    price: 30000,
    ram: 12,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 7,
    name: "Apple Pixel 5",
    brand: "Apple",
    price: 70000,
    ram: 4,
    rom: 512,
    rating: 4.5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 8,
    name: "Google Mi 10",
    brand: "Oppo",
    price: 30000,
    ram: 8,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 108,
  },
  {
    id: 9,
    name: "Oppo Mi 11",
    brand: "Samsung",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 24,
  },
  {
    id: 10,
    name: "Xiaomi Mi 10",
    brand: "Oppo",
    price: 60000,
    ram: 16,
    rom: 512,
    rating: 4.5,
    os: "Android",
    camera: 12,
  },
  {
    id: 11,
    name: "OnePlus Pixel 5",
    brand: "Apple",
    price: 60000,
    ram: 12,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 12,
  },
  {
    id: 12,
    name: "Xiaomi OnePlus 8",
    brand: "Xiaomi",
    price: 70000,
    ram: 8,
    rom: 64,
    rating: 4.5,
    os: "Android",
    camera: 48,
  },
  {
    id: 13,
    name: "Xiaomi Pixel 6",
    brand: "Oppo",
    price: 30000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 108,
  },
  {
    id: 14,
    name: "Samsung Find X2",
    brand: "Oppo",
    price: 40000,
    ram: 12,
    rom: 512,
    rating: 4.7,
    os: "Android",
    camera: 48,
  },
  {
    id: 15,
    name: "Google OnePlus 8",
    brand: "Apple",
    price: 20000,
    ram: 16,
    rom: 64,
    rating: 5,
    os: "iOS",
    camera: 24,
  },
  {
    id: 16,
    name: "OnePlus iPhone 12",
    brand: "OnePlus",
    price: 20000,
    ram: 6,
    rom: 128,
    rating: 4.5,
    os: "iOS",
    camera: 64,
  },
  {
    id: 17,
    name: "Google Mi 11",
    brand: "Oppo",
    price: 70000,
    ram: 6,
    rom: 64,
    rating: 4,
    os: "Android",
    camera: 64,
  },
  {
    id: 18,
    name: "Google OnePlus 9",
    brand: "Apple",
    price: 20000,
    ram: 4,
    rom: 64,
    rating: 5,
    os: "Android",
    camera: 64,
  },
  {
    id: 19,
    name: "Oppo Galaxy S22",
    brand: "Samsung",
    price: 20000,
    ram: 16,
    rom: 256,
    rating: 4.7,
    os: "Android",
    camera: 12,
  },
  {
    id: 20,
    name: "Apple Pixel 5",
    brand: "Oppo",
    price: 40000,
    ram: 8,
    rom: 128,
    rating: 4.7,
    os: "Android",
    camera: 108,
  },
];
function sortedRating(rate1,rate2){
  return rate2.rating-rate1.rating;
}
app.get('/products/sort/popularity',(req,res)=>{
  let sortedProductByrating=products.slice();
  sortedProductByrating.sort(sortedRating);
  res.json(sortedProductByrating);
})
function sortedPrice(price1,price2){
  return price2.price-price1.price;
}
app.get('/products/sort/price-high-to-low',(req,res)=>{
  let sortedProducts=products.slice();
  sortedProducts.sort(sortedPrice);
  res.json(sortedProducts)

})
function sortedPriceinAscending(price1,price2){
  return price1.price-price2.price;
}
app.get('/products/sort/price-low-to-high',(req,res)=>{
  let sortedProducts=products.slice();
  sortedProducts.sort(sortedPriceinAscending);
  res.json(sortedProducts);
})
function filterByRam(secram,ram){
return secram.ram==ram;
}
app.get('/products/filter/ram',(req,res)=>{
  let selectedRam=products.slice();
  let ram=req.query.ram;
  selectedRam=selectedRam.filter(secram=>filterByRam(secram,ram));
  res.json(selectedRam);
})


function filterByRom(secrom,rom){
 return secrom.rom==rom;
}
app.get('/products/filter/rom',(req,res)=>{
  let rom=req.query.rom;
  let selectedRom=products.filter(secrom=>filterByRom(secrom,rom));
  res.json(selectedRom);
})
function filterByBrand(selectbrand,brand){
return selectbrand.brand.toLowerCase()==brand.toLowerCase();
}
app.get('/products/filter/brand',(req,res)=>{
brand=req.query.brand;
let selectedBrand=products.filter(selectbrand=>filterByBrand(selectbrand,brand));
res.json(selectedBrand);
})
function filterByOs(selectos,os){
  return selectos.os.toLowerCase()==os.toLowerCase();
  }
  app.get('/products/filter/os',(req,res)=>{
  os=req.query.os;
  let selectedOs=products.filter(selectos=>filterByOs(selectos,os));
  res.json(selectedOs);
  })

function filterByPrice(product,price){
return product.price<=price;
}
app.get('/products/filter/price',(req,res)=>{
  price=req.query.price;
  let selectPrice=products.filter(product=>filterByPrice(product,price));
  res.json(selectPrice)
})
app.get('/products',(req,res)=>{
  res.json(products)
})





app.get('/', (req, res) => {
  res.sendFile(resolve(__dirname, 'pages/index.html'));
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
