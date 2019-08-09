import { DATA, DATA_ERROR_DATA, DATA_LOADING, NAME_CHANGED, NAME_ERROR_CHANGED, JOB_CHANGED, JOB_ERROR_CHANGED } from "../Actions/type";

const INTIAL_STATE = {
  name: "",
  nameError: "",
  job: "",
  jobError: "",
  authResult: "",
  isLoading: false
};

export default (state = INTIAL_STATE, action) => {
  const responce = action.payload;
  switch (action.type) {
    case NAME_CHANGED:
      return { ...state, name: action.payload, nameError: "", jobError: "", authResult: "" };
    case NAME_ERROR_CHANGED:
      return { ...state, nameError: action.payload, authResult: "" };
    case JOB_CHANGED:
      return { ...state, job: action.payload, nameError: "", jobError: "", authResult: "" };
    case JOB_ERROR_CHANGED:
      return { ...state, jobError: action.payload, authResult: "" };

    case DATA_LOADING:
      console.log("loading...");
      return { ...state, nameError: "", jobError: "", isLoading: true, authResult: "" };
    case DATA:
      return { ...state, authResult: action.payload, isLoading: false, name: "", job: "" };
    case DATA_ERROR_DATA:
      return { ...state, authResult: action.payload, isLoading: false };

    default:
      return state;
  }
};
