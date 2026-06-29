import products from "./products";

const cart = [
  {
    ...products[0],
    quantity: 2,
  },
  {
    ...products[1],
    quantity: 1,
  },
];

export default cart;