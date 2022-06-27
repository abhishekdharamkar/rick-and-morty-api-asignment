import { ActionType} from "../Contants/ActionType"
export const getAllCharacter = (character) => {
    return {
      type: ActionType.GET_ALL_CHARACTER,
      payload: character,
    };
  };

  export const incPageNumber = ()=>{
    return{
        type: ActionType.INC_PAGE_NUMBER,
    }
   
}
export const decPageNumber = () => {
  return {
      type: ActionType.DEC_PAGE_NUMBER
  }
}
export const setStatus = (status) => {
  return {
      type: ActionType.SET_STATUS,
      payload: status
  }
}


export const setGender = (gender) => {
  return {
      type: ActionType.SET_GENDER,
      payload: gender
  }
}

export const setSpecies = (species) =>{
  return {
      type: ActionType.SET_SPECIES,
      payload: species
  }
}
export const searchedCharacters = (searchedCharacter) => {
  return {
      type: ActionType.SEARCHED_CHARACTER,
      payload: searchedCharacter
  }
}
export const favroiteCharacter = (favroiteCharacter) => {
  return {
      type: ActionType.FAVORITE_CHARACTER,
      payload: favroiteCharacter
  }
}
export const addToFavourites = (addToFavourites) => {
  console.log(addToFavourites,"CharaACtion")
  return { type: ActionType.ADD_FAV_NAME, payload:addToFavourites}
}
export const setFavoriteCharacter = (character) => {
  return {
    type: ActionType.GET_FAV_CHARACTER,
    payload: character,
  };
};