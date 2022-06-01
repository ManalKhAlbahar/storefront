import { categories } from '../store/products';
import { products } from '../store/products';
export const initialState = {
  categories: categories,
  activeCategory: {},
  products: products,
};


export const catProdReducer = (state = initialState, action) => {
    const { type, payload } = action;
  
    switch (type) {
      case 'SELECT_CATEGORY':
        const categories = state.categories;
        const products = state.products;
        let activeCategory;
        for (let i = 0; i < state.categories.length; i++) {
          const element = state.categories[i];
          if(element.normalizedName === payload)
            activeCategory = element;
        }

        state.products.filter((p) => {
          return p.category === payload
        });
  
        return { categories, activeCategory, products };
  
      default:
        return state;
    }
  };