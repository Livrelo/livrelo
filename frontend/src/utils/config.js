import useAuthStore from "../zustand/auth/auth";

const userState = useAuthStore.getState();


export const API_HEADER = (token) =>{
  return({
      headers: {
        ["x-access-token"]: `${token}` // O token será inserido aqui dinamicamente
        
      }
  })
  
};

  