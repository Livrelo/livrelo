//gerenciamento de tokens, login e logout, tirando de conta.js
//gpt: com local storage

import { create } from "zustand";
import CreateAxios from "../../utils/api";
import { notify } from "../..";

const api = await CreateAxios.getAxiosInstance();

const useAuthStore = create((set, get) => ({
    conta: JSON.parse(localStorage.getItem("conta")) || null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,

    // Login
    login: async (credentials) => {
        set({ loading: true, error: null });
        try {
            const response = await api.post("/login", credentials);
            const { token, conta, message } = response.data;

            // Armazena no localStorage
            // localStorage.setItem("token", token);
            // localStorage.setItem("conta", JSON.stringify(conta));
            

            //

            // Atualiza o estado global
            notify("success", message);
            set({ conta, token });
            console.log(get().token)
            console.log(get().conta);
            
            return response.data;
        } catch (error) {
            console.log(error);
            notify("error", error.response.data.error || error.message);
            set({ error: error.response?.data?.message || error.message });
            
        } 
        // finally {
        //     set({ loading: false });
        // }
    },

    // Logout
    logout: async () => {
        set({ loading: true, error: null });
        try {
            await api.post("/logout");

            // Remove do localStorage
            // localStorage.removeItem("token");
            // localStorage.removeItem("conta");

            // Reseta o estado global
            set({ conta: null, token: null });
        } catch (error) {
            set({ error: error.response?.data?.message || error.message });
        } finally {
            set({ loading: false });
        }
    },

    // Verifica se o usuário está autenticado
    isAuthenticated: () => {
        return !!localStorage.getItem("token");
    },
}));

export default useAuthStore;

