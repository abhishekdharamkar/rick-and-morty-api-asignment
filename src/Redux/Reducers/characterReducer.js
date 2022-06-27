import { ActionType} from "../Contants/ActionType"
const intialState = {
    characters: [],
  };
  
  export const characterReducer = (state = intialState, { type, payload }) => {
    switch (type) {
      case ActionType.GET_ALL_CHARACTER:
        return { ...state, character: payload };
      default:
        return state;
    }
  };

  export const changePageNumber = (state = 1, {type}) =>{
    switch(type){
       case ActionType.INC_PAGE_NUMBER:
           return state === 42?state:state+1; //total 42  page no is Present in api
       case ActionType.DEC_PAGE_NUMBER:
           return state === 1?state:state-1;
       default:
           return state;
    }  
}
export const filter_status = (state="", {type, payload}) =>{
  switch (type) {
      case ActionType.SET_STATUS:
          return {...state, status: payload};
  
      default:
          return state;
  }
} 

export const filter_species = (state = "", {type, payload}) => {
  switch (type) {
      case ActionType.SET_SPECIES:
          return {...state, species: payload};
  
      default:
          return state;
  }
} 

export const filter_gender = (state = "", {type, payload}) => {
  switch (type) {
      case ActionType.SET_GENDER:
          return {...state, gender: payload};
  
      default:
          return state;
  }
}  
const initialSearch = "";

export const search_Characters = (state = initialSearch, {type, payload})=>{
    switch(type){
        case ActionType.SEARCHED_CHARACTER:
            return {...state, text_search: payload};
        default:
            return state;
    }
}
const initialFav = [];

export const favorite_Characters = (state = initialFav, {type, payload})=>{
    switch(type){
        case ActionType.FAVORITE_CHARACTER:
            return {...state, favorite_character: payload};
        default:
            return state;
    }
}
export const favouritesReducer = (state = [],{type,payload}) => {
  if (type) {
    console.log("s",payload)
    return state.concat(payload);
  }

  return state;
}
const intial = {
  characters: [],
};
  export const favourite = (state = intial, { type, payload }) => {
    switch (type) {
      case ActionType.GET_FAV_CHARACTER:
        return { ...state, character: payload };
      default:
        return state;
    }
  };