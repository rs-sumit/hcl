const mongoose=require("mongoose");
const Item = require("./model/item.js");
const User = require("./model/user.js");
const Order = require("./model/order.js");


async function main(){
   await mongoose.connect("mongodb://127.0.0.1:27017/HCL");
}

main()
.then((res)=>{
    console.log("mongodb is connected!");
})
.catch((err)=>{
    console.log(err);
});



// let users = [
//   { username:"atlas", email:"atlas@gmail.com", mobile:"1234567734", password: "atlas@123"},
//   { username:"bob", email:"bob@gmail.com", mobile:"9876543210", password: "bob@123"},
//   { username:"jin", email:"jin@gmail.com", mobile:"9999999999", password: "jin@123"}
// ];

// let items = 
//   [
//     {
//       name: "FarmHouse",
//       category: "pizza",
//       price: 300,
//       currentPrice: 240,
//       discount: 20,
//       description:
//         "Classic margherita with fresh mozzarella, basil, and tangy tomato sauce.",
//       foodType: "veg",
//       stock: 200,
//     },
//     {
//       name: "Pepperoni Blast",
//       category: "pizza",
//       price: 350,
//       currentPrice: 310,
//       discount: 12,
//       description: "Loaded with spicy pepperoni and cheese.",
//       foodType: "non-veg",
//       stock: 180,
//     },
//     {
//       name: "Cheese Burst",
//       category: "pizza",
//       price: 320,
//       currentPrice: 280,
//       discount: 12,
//       description: "Extra cheesy crust with rich tomato sauce.",
//       foodType: "veg",
//       stock: 150,
//     },
//     {
//       name: "Veg Supreme",
//       category: "pizza",
//       price: 340,
//       currentPrice: 290,
//       discount: 15,
//       description: "Loaded with onion, capsicum, tomato, and olives.",
//       foodType: "veg",
//       stock: 170,
//     },
//     {
//       name: "BBQ Chicken",
//       category: "pizza",
//       price: 380,
//       currentPrice: 330,
//       discount: 13,
//       description: "Smoky BBQ chicken with mozzarella cheese.",
//       foodType: "non-veg",
//       stock: 160,
//     },

//     {
//       name: "Garlic Bread",
//       category: "breads",
//       price: 120,
//       currentPrice: 99,
//       discount: 18,
//       description: "Crispy bread with garlic butter and herbs.",
//       foodType: "veg",
//       stock: 300,
//     },
//     {
//       name: "Cheese Garlic Bread",
//       category: "breads",
//       price: 150,
//       currentPrice: 125,
//       discount: 17,
//       description: "Garlic bread topped with melted cheese.",
//       foodType: "veg",
//       stock: 280,
//     },
//     {
//       name: "Bread Sticks",
//       category: "breads",
//       price: 110,
//       currentPrice: 95,
//       discount: 14,
//       description: "Crunchy bread sticks served with dip.",
//       foodType: "veg",
//       stock: 260,
//     },
//     {
//       name: "Butter Toast",
//       category: "breads",
//       price: 90,
//       currentPrice: 75,
//       discount: 17,
//       description: "Golden toasted bread with butter.",
//       foodType: "veg",
//       stock: 320,
//     },
//     {
//       name: "Cheese Toast",
//       category: "breads",
//       price: 140,
//       currentPrice: 120,
//       discount: 14,
//       description: "Toast topped with melted cheese.",
//       foodType: "veg",
//       stock: 290,
//     },

//     {
//       name: "Coca Cola",
//       category: "cold drink",
//       price: 60,
//       currentPrice: 50,
//       discount: 17,
//       description: "Chilled fizzy cola drink.",
//       foodType: "veg",
//       stock: 500,
//     },
//     {
//       name: "Pepsi",
//       category: "cold drink",
//       price: 60,
//       currentPrice: 50,
//       discount: 17,
//       description: "Refreshing carbonated soft drink.",
//       foodType: "veg",
//       stock: 480,
//     },
//     {
//       name: "Sprite",
//       category: "cold drink",
//       price: 55,
//       currentPrice: 45,
//       discount: 18,
//       description: "Lemon flavored chilled soft drink.",
//       foodType: "veg",
//       stock: 470,
//     },
//     {
//       name: "Fanta",
//       category: "cold drink",
//       price: 55,
//       currentPrice: 45,
//       discount: 18,
//       description: "Orange flavored fizzy drink.",
//       foodType: "veg",
//       stock: 460,
//     },
//     {
//       name: "Mountain Dew",
//       category: "cold drink",
//       price: 65,
//       currentPrice: 55,
//       discount: 15,
//       description: "High energy citrus drink.",
//       foodType: "veg",
//       stock: 450,
//     },

//     {
//       name: "Paneer Tikka Pizza",
//       category: "pizza",
//       price: 360,
//       currentPrice: 320,
//       discount: 11,
//       description: "Spicy paneer tikka with capsicum.",
//       foodType: "veg",
//       stock: 140,
//     },
//     {
//       name: "Chicken Tandoori Pizza",
//       category: "pizza",
//       price: 390,
//       currentPrice: 350,
//       discount: 10,
//       description: "Tandoori chicken with spicy sauce.",
//       foodType: "non-veg",
//       stock: 130,
//     },

//     {
//       name: "Stuffed Garlic Bread",
//       category: "breads",
//       price: 180,
//       currentPrice: 150,
//       discount: 17,
//       description: "Bread stuffed with cheese and herbs.",
//       foodType: "veg",
//       stock: 210,
//     },
//     {
//       name: "Corn Bread",
//       category: "breads",
//       price: 130,
//       currentPrice: 110,
//       discount: 15,
//       description: "Soft corn flavored bread.",
//       foodType: "veg",
//       stock: 230,
//     },

//     {
//       name: "Thumbs Up",
//       category: "cold drink",
//       price: 65,
//       currentPrice: 55,
//       discount: 15,
//       description: "Strong fizzy cola drink.",
//       foodType: "veg",
//       stock: 440,
//     },
//     {
//       name: "Limca",
//       category: "cold drink",
//       price: 60,
//       currentPrice: 50,
//       discount: 17,
//       description: "Refreshing lemon soft drink.",
//       foodType: "veg",
//       stock: 430,
//     },
//     {
//       name: "Appy Fizz",
//       category: "cold drink",
//       price: 70,
//       currentPrice: 60,
//       discount: 14,
//       description: "Apple flavored sparkling drink.",
//       foodType: "veg",
//       stock: 390,
//     },
//     {
//       name: "Cold Coffee",
//       category: "cold drink",
//       price: 120,
//       currentPrice: 100,
//       discount: 17,
//       description: "Chilled coffee with milk and ice.",
//       foodType: "veg",
//       stock: 250,
//     },
//     {
//       name: "Chocolate Shake",
//       category: "cold drink",
//       price: 140,
//       currentPrice: 120,
//       discount: 14,
//       description: "Thick chocolate flavored shake.",
//       foodType: "veg",
//       stock: 240,
//     },
  
// ];

const allOrders = [
  {
    orderId: "ORD_007",
    customer: {
      name: "Atlas",
      email: "atlas@gmail.com",
      address: "Delhi, Pitampura",
    },
    items: [
      { name: "Butter Toast", qty: 2, price: 75 },
      { name: "Cold Coffee", qty: 1, price: 100 },
    ],
    totalPrice: 250,
  },
  {
    orderId: "ORD_008",
    customer: {
      name: "Rahul",
      email: "rahul@gmail.com",
      address: "Noida, Sector 18",
    },
    items: [
      { name: "FarmHouse Pizza", qty: 1, price: 240 },
      { name: "Coca Cola", qty: 2, price: 50 },
    ],
    totalPrice: 340,
  },
  {
    orderId: "ORD_009",
    customer: {
      name: "Pooja",
      email: "pooja@gmail.com",
      address: "Gurgaon, DLF Phase 3",
    },
    items: [
      { name: "Cheese Garlic Bread", qty: 1, price: 125 },
      { name: "Sprite", qty: 2, price: 45 },
    ],
    totalPrice: 215,
  },
  {
    orderId: "ORD_010",
    customer: {
      name: "Amit",
      email: "amit@gmail.com",
      address: "Faridabad, Sector 15",
    },
    items: [
      { name: "Paneer Tikka Pizza", qty: 1, price: 320 },
      { name: "Chocolate Shake", qty: 1, price: 120 },
    ],
    totalPrice: 440,
  },
  {
    orderId: "ORD_011",
    customer: {
      name: "Neha",
      email: "neha@gmail.com",
      address: "Rohini, Sector 7",
    },
    items: [
      { name: "Garlic Bread", qty: 2, price: 99 },
      { name: "Pepsi", qty: 2, price: 50 },
    ],
    totalPrice: 298,
  },
];

main()
  .then(async () => {
    await Order.deleteMany({}); 
    await Order.insertMany(allOrders); 
    console.log("Orders inserted!");
    process.exit(0);
  })
  .catch((err) => {
    console.log(err);
    process.exit(1);
  });