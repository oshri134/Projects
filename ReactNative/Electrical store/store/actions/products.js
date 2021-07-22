export const DELETE_PRODUCT = "DELETE_PRODUCT";
export const CREATE_PRODUCT = "CREATE_PRODUCT";
export const UPDATE_PRODUCT = "UPDATE_PRODUCT";

export const deleteProduct = (id) => {
  return { type: DELETE_PRODUCT, pid: id };
};

export const createProduct = (title, imageUrl, price) => {
  return {
    type: CREATE_PRODUCT,
    productData: {
      title,

      imageUrl,
      price,
    },
  };
};

export const updateProduct = (id, title, imageUrl) => {
  return {
    type: UPDATE_PRODUCT,
    pid: id,
    productData: {
      title,
      imageUrl,
    },
  };
};
