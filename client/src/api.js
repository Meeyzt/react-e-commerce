import axios from "axios";

export const fetchProductList = async () => {
  const { data } = await axios.get("https://fakestoreapi.com/products");
  return data;
};
