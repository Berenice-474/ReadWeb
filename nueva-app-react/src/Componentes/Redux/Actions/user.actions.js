
import axios from "axios"

import{
    USER_CREATED
} from "../Constant/constants"
const url = "http://localhost:3000/";

axios.defaults.withCrendentails = true;


export const actionUserCreate = (props) => {
    return (dispatch) => {
      axios
        .post(url + "user", props, {
          withCredentials: true,
        })
        .then(() => {
          dispatch({
            type: USER_CREATED,
          });
        });
    };
  };