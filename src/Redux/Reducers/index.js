import { combineReducers } from 'redux'
import { changePageNumber, characterReducer,filter_status, filter_species,filter_gender,
  search_Characters,favorite_Characters,favouritesReducer,favourite} from './characterReducer';

const reducers = combineReducers({
    allCharacter: characterReducer,
    allfavourite:favourite,
    pageNumber:changePageNumber,
    filterStatus: filter_status,
    filterSpecies: filter_species,
    filterGender: filter_gender,
    searchCharacter: search_Characters,
    favoriteCharacter:favorite_Characters,
    favouritesReducer:favouritesReducer,
  });
export default reducers;