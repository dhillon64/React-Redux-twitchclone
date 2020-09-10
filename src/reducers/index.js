import { combineReducers } from "redux";
import { reducer as formReducer } from "redux-form";
import authReducer from "./authReducer";
import streamReducer from "./streamReducer";
import filterStreamsReducer from "./filterStreamsReducer";

export default combineReducers({
  auth: authReducer,
  form: formReducer,
  streams: streamReducer,
  searchStreams: filterStreamsReducer,
});
