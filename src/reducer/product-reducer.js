//export const initialState = {
 //   filteredProducts: [],
//  };
  
//  export const productReducer = (state = initialState, action) => {
 //   const { type, payload } = action;
  
 //   switch (type) {
 //     case 'FILTER_PRODUCTS':
 //       console.log("AllProducts")
 //       console.log( payload)
  //      const filteredProducts = payload.allProducts.filter((product) =>{
 //         if(product && payload.categorayName)
 //           return product.category.toLowerCase() === payload.categorayName.toLowerCase();
//            else return false
//        });
 // console.log("FILTERED")
//  console.log(filteredProducts)
 //       return { filteredProducts };
 // 
 //     default:
 //       return state;
//    }
//  };