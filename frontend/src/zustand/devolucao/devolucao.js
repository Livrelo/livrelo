import CreateAxios from "../../utils/api";
import { create } from "zustand";
import { API_HEADER } from "../../utils/config";
import useAuthStore from "../auth/auth";
import useEmprestimoStore from "../emprestimo/emprestimo";

const api = await CreateAxios.getAxiosInstance();

const useDevolucaoStore = create((set) => ({
  devolucoes: [],
  devolucao: null,
  loading: false,
  error: null,

  //get all
  fetchDevolucoes: async () => {
    set({ loading: true, error: null });
    try {
      const response = await api.get("/devolucao");
      set({ devolucoes: response.data });
    } catch (error) {
      set({ error: error.response?.data?.message || error.message });
    } finally {
      set({ loading: false });
    }
  },

  //get by id
  fetchDevolucaoByIdEmprestimo: async (idEmprestimo) => {
    set({ loading: true, error: null });
    try {
      const response = await api.get(`/devolucao/${idEmprestimo}`);
      set({ devolucao: response.data });
    } catch (error) {
      set({ error: error.response?.data?.message || error.message });
    } finally {
      set({ loading: false });
    }
  },

  //create 
  createDevolucao: async (idEmprestimo, devolucao) => {
    set({ loading: true, error: null });
    try {
      console.log("idEmprestimo: ", idEmprestimo);
      console.log("devolucao: ", devolucao)
      const {token} = useAuthStore.getState();
      const response = await api.post(`/devolucao/${idEmprestimo}`, {dataDevolucao: devolucao}, API_HEADER(token));
      await useEmprestimoStore.getState().fetchAllEmprestimos();
      set((state) => ({ devolucoes: [...state.devolucoes, response.data] }));
    } catch (error) {
      set({ error: error.response?.data?.message || error.message });
    } finally {
      set({ loading: false });
    }
  },
}));

export default useDevolucaoStore;
