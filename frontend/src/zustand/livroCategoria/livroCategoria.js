import CreateAxios from "../../utils/api";
import useAuthStore from "../auth/auth";
import { create } from "zustand";
import { API_HEADER } from '../../utils/config';
import useLivrosStore from "../livro/livro";
const api = await CreateAxios.getAxiosInstance();
const authState = useAuthStore.getState();
const useLivroCategoriaStore = create((set) => ({
    livroCategorias: [],
    loading: false,
    error: null,
  
    fetchCategorias: async () => {
        set({ isLoading: true, error: null });
    try {
      const { token } = useAuthStore.getState();
      const response = await api.get('/livrocategoria',API_HEADER(token));
      set({ livroCategorias: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
    },


    fetchCategoriasByLivroId: async (idLivro) => {
      set({ loading: true, error: null });
      try {
        const { token } = useAuthStore.getState();
        const response = await api.get(`/livrocategoria/livro/${idLivro}`, API_HEADER(token));
        set({ livroCategorias: response.data, loading: false });
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  
    
    fetchLivrosByCategoriaId: async (idCategoria) => {
      set({ loading: true, error: null });
      try {
        const { token } = useAuthStore.getState();
        const response = await api.get(`/livrocategoria/categoria/${idCategoria}`, API_HEADER(token));
        set({ livroCategorias: response.data, loading: false });
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  
    
    createLivroCategoria: async (idLivro, idCategoria) => {
      set({ loading: true, error: null });
      try {
        const { token } = useAuthStore.getState();
        const response = await api.post('/livrocategoria', { idLivro, idCategoria }, API_HEADER(token));
        await useLivrosStore.getState().fetchLivros();
        return response;
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  
    
    deleteByIdLivro: async (idLivro) => {
      set({ loading: true, error: null });
      try {
        const { token } = useAuthStore.getState();
        await api.delete(`/livrocategoria/livro/${idLivro}`, API_HEADER(token));
        set((state) => ({ livroCategorias: state.livroCategorias.filter(item => item.idLivro !== idLivro), loading: false }));
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  
    deleteByIdCategoria: async (idCategoria) => {
      set({ loading: true, error: null });
      try {
        const { token } = useAuthStore.getState();
        await api.delete(`/livrocategoria/categoria/${idCategoria}`, API_HEADER(token));
        await useLivrosStore.getState().fetchLivros();
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  }));
  
  export default useLivroCategoriaStore;
  