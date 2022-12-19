import callAPI from "../config/api";
import { LoginTypes } from "./data-types";

const ROOT_API = process.env.NEXT_PUBLIC_API;
const API_VERSION = "api/v1";

export async function setSignUp(data: FormData) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signup`;

  return callAPI({
    url,
    method: "POST",
    data,
  });

  // const response = await axios
  //   .post(`${ROOT_API}/${API_VERSION}/${URL}`, data)
  //   .catch((error) => error.response);

  //   console.log("api resp: ", response);
  //   console.log("api resp: ", response.statusText);
  // const axiosResponse = response.data;
  // if (axiosResponse?.error === 1) {
  //   return axiosResponse;
  // }

  // return axiosResponse.data;
}

export async function setLogin(data: LoginTypes) {
  const url = `${ROOT_API}/${API_VERSION}/auth/signin`;

  return callAPI({
    url,
    method: "POST",
    data,
  });
}
