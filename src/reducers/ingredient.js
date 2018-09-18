export default (state=[], action) => {

  let {type, payload} = action;

  switch(type){
    case 'USER_INGREDIENT_ET_ALL_SET':
      return payload;

    case 'INGREDIENT_CREATE':
      return [...state, payload];

    case 'TOKEN_DELETE':
      return null;

    case 'INGREDIENT_UPDATE':
      return state.map(ingredient => 
        ingredient._id === payload._id ? payload : ingredient);

    case 'INGREDIENT_DELETE':
      return state.filter(ingredient => ingredient._id !== payload._id)
      
    default:
      return state;
  }
}