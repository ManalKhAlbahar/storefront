let initialState = {
    categories:[
        {
        normalizedName:"Food",
        displayName:"Food",
        description:"Get Ur Favorite Food"
    },
    { 
    normalizedName: 'Electronics', 
    displayName: 'Electronics', 
    description: 'Collection of Electronics Products' 
}
],

}

 const ReduceCategory=(state = initialState, action) => {
  let {type, payload} = action;
  console.log(action);
  switch(type) {
      case 'ACTIVE':
          let activeCategory=payload
          let categories = state.categories.map(item => {
              if (item.normalizedName === payload) {
                  return {
                      normalizedName : item.normalizedName, 
                      displayName: item.displayName ,
                      description:item.description}
              }
              return item;
          })
          return { activeCategory,categories};
      case 'RESET':
          return initialState;
      default:
          return state;
  }
}

//actions
export const selectCate = (name) => {
    return {
        type: 'ACTIVE',
        payload: name
    }
}

export const reset = () => {
    return {
        type: 'RESET'
    }
}

export default ReduceCategory