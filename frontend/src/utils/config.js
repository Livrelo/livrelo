import useAuthStore from "../zustand/auth/auth";

const userState = useAuthStore.getState();
const token = userState.token;

export const API_HEADER = {
    headers: {
      ["x-access-token"]: `${token}` // O token será inserido aqui dinamicamente
    }
  };

  