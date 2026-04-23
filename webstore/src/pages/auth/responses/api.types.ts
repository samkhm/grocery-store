export type ApiResponse<T> = {
  success: boolean;
  message: string;
  data?: T;
  error?: string;
};

export type LoginResponse = ApiResponse<{
  token: string;
  user: {  
    id: string;
    email: string;
    firstName: string;
    lastName: string;
  };
}>;

export type ApiErrorResponse = {
    message: string;
    statusCode: number;
}