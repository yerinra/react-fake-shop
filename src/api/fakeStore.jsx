import axios from "axios";

// export default class FakeStoreApi {
//   async getAllProducts() {
//     return axios.get("https://fakestoreapi.com/products");
//   }

//   async getCategoryProducts(category) {
//     return axios.get(`https://fakestoreapi.com/products/category/${category}`);
//   }

//   async getProductDetail(productId) {
//     return axios.get(`https://fakestoreapi.com/products/${productId}`);
//   }
// }

export async function getAllProducts() {
  const result = await axios
    .get("https://fakestoreapi.com/products")
    .then((res) => res.data);
  return result;
}

export async function getCategoryProducts(category) {
  const result = await axios
    .get(`https://fakestoreapi.com/products/category/${category}`)
    .then((res) => res.data);
  return result;
}

export async function getProductDetail(productId) {
  const result = await axios
    .get(`https://fakestoreapi.com/products/${productId}`)
    .then((res) => {
      // console.log(res.data);
      return res.data;
    });
  return result;
}
