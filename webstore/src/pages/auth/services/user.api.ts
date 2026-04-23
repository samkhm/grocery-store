import API from "../../../api/api";
import type { ApiResponse, LoginResponse } from "../responses/api.types";
import type { LoginData, SignUpData } from "../dataType/userTypes";

export const signupUser = async (data: SignUpData): Promise<ApiResponse<null>> => {
  const response = await API.post("/auth/register", data);
  return response;
};

export const loginUser = async (data: LoginData): Promise<LoginResponse> => {
  const response = await API.post("/auth/login", data);
  return response;
}