import axios from "axios";
import { DATA, DATA_ERROR_DATA, DATA_LOADING, BASE_URL, NAME_CHANGED, NAME_ERROR_CHANGED, JOB_CHANGED, JOB_ERROR_CHANGED } from "./type";

export const nameChangeLogin = text => {
  return {
    type: NAME_CHANGED,
    payload: text
  };
};

export const nameErrorChangeLogin = text => {
  return {
    type: NAME_ERROR_CHANGED,
    payload: text
  };
};

export const jobChangeLogin = text => {
  return {
    type: JOB_CHANGED,
    payload: text
  };
};

export const jobErrorChangeLogin = text => {
  return {
    type: JOB_ERROR_CHANGED,
    payload: text
  };
};

export const getApiCall = (name, job) => {
  console.log("name --->", name);
  console.log("job --->", job);

  return dispatch => {
    dispatch({
      type: DATA_LOADING
    });
    axios
      .post(
        `${BASE_URL}`,
        {
          name,
          job
        },
        {
          headers: {}
        }
      )
      .then(response => {
        console.log("Pathik_ res", response.data);
        dispatch({ type: DATA, payload: "Successfully" });
      })
      .catch(error => {
        console.log("order data failed", error);
        dispatch({ type: DATA_ERROR_DATA, payload: "Something went wrong please try again" });
      });
  };
};
