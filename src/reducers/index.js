import { combineReducers } from 'redux';
import LibraryReducers from './LibraryReducers';
import SelectionReducers from './SelectionReducers';


export default combineReducers({
  libraries: LibraryReducers,
  selection: SelectionReducers,
});
