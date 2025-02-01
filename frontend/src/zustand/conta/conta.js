//ja tendo gerenciamento de login e logout e tokens no auth, conta nao precisa ter 

import { create } from "zustand";
import CreateAxios from "../../utils/api";

const api = CreateAxios.getAxiosInstance();

const useContaStore = create((set) => ({
    conta: null,
    loading: false,
    error: null,

    // Atualizar conta
    updateConta: async (idConta, contaAtualizada) => {
        set({ loading: true, error: null });
        try {
            const response = await api.put(`/conta/${idConta}`, contaAtualizada);
            set({ conta: response.data });
        } catch (error) {
            set({ error: error.response?.data?.message || error.message });
        } finally {
            set({ loading: false });
        }
    },

    // Deletar conta
    deleteConta: async (idConta) => {
        set({ loading: true, error: null });
        try {
            await api.delete(`/conta/${idConta}`);
            set({ conta: null });
        } catch (error) {
            set({ error: error.response?.data?.message || error.message });
        } finally {
            set({ loading: false });
        }
    },
}));

export default useContaStore;
