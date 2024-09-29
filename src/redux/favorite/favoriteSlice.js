// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   itemsFavotite: [],
//   // loading: false,
//   // error: null,
// };

// const favoriteSlice = createSlice({
//   name: "itemsFavorite",
//   initialState: initialState,
//   reduсers: {
//     clickFavorite:(state, action)=>{
//       console.log(state, action.payload);
      
//     }
//     // clickFavorite: (state, action) => {

//     //   console.log(action.payload);
      
//     //   const isFavorite = state.itemsfavorite.some(
//     //     (item) => item.avatar_url === action.payload.avatar_url
//     //   );
//     //   if (isFavorite) {
//     //     state.itemsFavorite = state.itemsFavorite.filter(
//     //       (item) => item.avatar_url === action.payload.avatar_url
//     //     );
//     //   } else {
//     //     state.itemsFavorite = [...state.itemsFavorite, action.payload];
//     //   }
//     // },
//   },
// });

// export const favoriteReducer = favoriteSlice.reducer;
// export const { clickFavorite } = favoriteSlice.actions;
// export const selectFavorite = (state) => state.favorite.itemsFavorite;



import { createSlice } from "@reduxjs/toolkit";


const initialState = {
  items: [],
  // loading: false,
  // error: null,
};

const favoriteSlice = createSlice({
  name: "items",
  initialState: initialState,
  reducers: {
    clickFavorite: (state, action) => {

      // if (state.items.length===0) {
      //   state.items = [...state.items, action.payload]
      // }
      // // state.items = [...state.items, action.payload]
      //       // console.log(action.payload);
      //       else{
      //         const isFavorite = state.items.some(
      //           (item) => item.avatar_url === action.payload.avatar_url
      //         );
      //         console.log(isFavorite);
              
      //         if (isFavorite) {
      //           state.items = state.items.filter(
      //             (item) => item.avatar_url !== action.payload.avatar_url
      //           );
      //         } else {
      //           state.items = [...state.items, action.payload];
      //         }
      //       }
           



            if (state.items.length===0) {
              state.items = [...state.items, action.payload]
            }
            // state.items = [...state.items, action.payload]
                  // console.log(action.payload);
                  else{
                    const isFavorite = state.items.some(
                      (item) => item.avatar_url === action.payload.avatar_url
                    );
                    console.log(isFavorite);
                    
                    if (isFavorite) {
                      state.items = state.items.filter(
                        (item) => item.avatar_url === action.payload.avatar_url
                      );
                    } else {
                      state.items = [...state.items, action.payload];
                    }
                  }
           
          },
  },
});

export const favoriteReducer = favoriteSlice.reducer;
export const { clickFavorite } = favoriteSlice.actions;
export const selectFavorite = (state) => state.favorite.items;
