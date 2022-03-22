import api from "../../services";

const productServices = {
  getProducts: async () => {
    const res = await api.get(`/products`);
    return res.data;
  },
};

export default productServices;
