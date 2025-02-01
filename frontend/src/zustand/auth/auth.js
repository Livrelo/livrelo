//gerenciamento de tokens, login e logout, tirando de conta.js
//gpt: com local storage

import { create } from "zustand";
import CreateAxios from "../../utils/api";

const api = CreateAxios.getAxiosInstance();

const useAuthStore = create((set) => ({
    conta: JSON.parse(localStorage.getItem("conta")) || null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,

    // Login
    login: async (credentials) => {
        set({ loading: true, error: null });
        try {
            const response = await api.post("/login", credentials);
            const { token, conta } = response.data;

            // Armazena no localStorage
            localStorage.setItem("token", token);
            localStorage.setItem("conta", JSON.stringify(conta));

            // Atualiza o estado global
            set({ conta, token });
        } catch (error) {
            set({ error: error.response?.data?.message || error.message });
        } finally {
            set({ loading: false });
        }
    },

    // Logout
    logout: async () => {
        set({ loading: true, error: null });
        try {
            await api.post("/logout");

            // Remove do localStorage
            localStorage.removeItem("token");
            localStorage.removeItem("conta");

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

