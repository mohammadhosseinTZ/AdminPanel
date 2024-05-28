import { createSlice } from "@reduxjs/toolkit";

export const productsSlice = createSlice({
  name: "products",
  initialState: {
    products: [
      {
        id: 1,
        name: "laptop A1",
        image:
          "https://dkstatics-public.digikala.com/digikala-products/73c2c10dac44fb5b618206533d2602fed22e0c64_1713552046.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        numRemaining: 10,
        price: 2000,
        category: "laptop",
      },
      {
        id: 2,
        name: "laptop A2",
        image:
          "https://dkstatics-public.digikala.com/digikala-products/aa2df1eccdb6aa48e8323afb550f4a42a5b7ea1d_1700576310.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        numRemaining: 40,
        price: 2300,

        category: "laptop",
      },
      {
        id: 3,
        name: "laptop A3",
        image:
          "https://dkstatics-public.digikala.com/digikala-products/48c8c09ab3a81567f0dc986d4abce4590bcc8759_1683705564.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        numRemaining: 0,
        price: 4000,
        category: "laptop",
      },
      {
        id: 4,
        name: "mobile A10",
        image:
          "https://dkstatics-public.digikala.com/digikala-products/0cff83999e4e1cbdaa329e3d172faa8b3c6f7877_1710578899.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        numRemaining: 33,
        price: 1000,
        category: "mobile",
      },
      {
        id: 5,
        name: "laptop A30",
        image:
          "https://dkstatics-public.digikala.com/digikala-products/41513f36ca8ed31b603737010b4a109c646f7f76_1707811518.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        numRemaining: 6,
        price: 1100,
        category: "mobile",
      },
      {
        id: 6,
        name: "watch B3",
        image:
          "https://dkstatics-public.digikala.com/digikala-products/4db72df1c80ef9b4f26818f6b7e591ae328d1e86_1674111601.jpg?x-oss-process=image/resize,m_lfit,h_800,w_800/format,webp/quality,q_90",
        numRemaining: 9,
        price: 100,
        category: "watch",
      },
    ],
  },
  reducers: {
    editName: (state, action) => {
      state.products[action.payload.index].name = action.payload.nameValue;
    },
    editImage: (state, action) => {
      state.products[action.payload.index].iamge = action.payload.imageValue;
    },
    editNumRemaining: (state, action) => {
      state.products[action.payload.index].numRemaining =
        action.payload.numRemainingValue;
    },
    editPrice: (state, action) => {
      state.products[action.payload.index].price = action.payload.priceValue;
    },
    editCategory: (state, action) => {
      state.products[action.payload.index].category =
        action.payload.categoryValue;
    },

    editId: (state, action) => {
      state.products[action.payload.index].id = action.payload.id;
    },
    del: (state, action) => {
      state.products.splice(action.payload.index, 1);
    },
    add: (state, action) => {
      state.products.push({
        id: action.payload.id,
        name: action.payload.name,
        image: action.payload.image,
        numRemaining: action.payload.numRemaining,
        price: action.payload.price,
        category: action.payload.category,
      });
    },
  },
});

export const {
  add,
  del,
  editId,
  editName,
  editImage,
  editNumRemaining,
  editPrice,
  editCategory,
} = productsSlice.actions;

export default productsSlice.reducer;
