import axios from "axios"

import{
    USER_CREATED,
    ADD_TO_THUNK
} from "../Constant/constants"
const url = "http://localhost:3000/";

axios.defaults.withCrendentails = true;

export const actionAddToThunk = (props) => {
  return (dispatch) => {
      axios.post(url + 'user/' + props.idUser + '/cart', props, { withCredentials: true }).then(() => {
          return dispatch({ type: ADD_TO_THUNK })
      }).then(() => {
          return dispatch(actionGetOrder(props.idUser))
      })
  }
}