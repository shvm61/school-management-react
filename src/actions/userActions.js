import axios from "axios";

import { SET_ERRORS, LOADING_UI, CLEAR_ERRORS, SET_USER, SHOW_ALL_STUDENTS } from "./types";
import { student } from "../data/student";

export const showAllStudents = () => (dispatch) => {
  setAuthorizationHeader();

  //for testing with local data
  dispatch({
    type: SHOW_ALL_STUDENTS,
    payload: student.data,
  });

  //For api call

  // axios
  //   .get("/student/")
  //   .then((res) => {
  //     // setAuthorizationHeader(res.data.token);
  //     //   dispatch(getUserData());
  //     // dispatch({ type: CLEAR_ERRORS });
  //     console.log(res);
  //     // setAuthorizationHeader(res.data.token);
  //     dispatch({
  //       type: SHOW_ALL_STUDENTS,
  //       payload: res.data.data,
  //     });
  //     //   history.push("/");
  //   })
  // .catch((err) => {
  //   console.log("error");
  //   console.log(err);
  //   // dispatch({
  //   //   type: SET_ERRORS,
  //   //   payload: err.response.data.error,
  //   // });
  // });
};






















export const loginUser = (userData) => (dispatch) => {
  dispatch({ type: LOADING_UI });
  axios
    .post("/user/login", userData)
    .then((res) => {
      setAuthorizationHeader(res.data.token);
      //   dispatch(getUserData());
      dispatch({ type: CLEAR_ERRORS });
      console.log("res", res);
      // setAuthorizationHeader(res.data.token);
      dispatch({
        type: SET_USER,
        payload: res.data.data,
      });
      //   history.push("/");
    })
    .catch((err) => {
      console.log("error");
      console.log(err);
      dispatch({
        type: SET_ERRORS,
        payload: err.response.data.error,
      });
    });
};

const setAuthorizationHeader = () => {
  const JWTtoken = "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJzNDUiLCJleHAiOjE2MjI3NTMyMjUsImlhdCI6MTYyMjcxNzIyNX0.MceHRWr38pGEs73Sv7cMankRFwcuHSwqY2Yq7J36DNw";
  const token = `Bearer ${JWTtoken}`;
  localStorage.setItem("token", token);
  axios.defaults.headers.common["Authorization"] = token;
};
