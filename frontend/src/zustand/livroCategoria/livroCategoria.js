import CreateAxios from "../../utils/api";
import { create } from "zustand";

const api = await CreateAxios.getAxiosInstance();

const useLivroCategoriaStore = create((set) => ({
    livroCategorias: [],
    loading: false,
    error: null,
  
    fetchCategorias: async () => {
        set({ isLoading: true, error: null });
    try {
      const response = await api.get('/livrocategoria');
      set({ livroCategorias: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
    },


    fetchCategoriasByLivroId: async (idLivro) => {
      set({ loading: true, error: null });
      try {
        const response = await api.get(`/livrocategoria/livro/${idLivro}`);
        set({ livroCategorias: response.data, loading: false });
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  
    
    fetchLivrosByCategoriaId: async (idCategoria) => {
      set({ loading: true, error: null });
      try {
        const response = await api.get(`/livrocategoria/categoria/${idCategoria}`);
        set({ livroCategorias: response.data, loading: false });
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  
    
    createLivroCategoria: async (idLivro, idCategoria) => {
      set({ loading: true, error: null });
      try {
        const response = await api.post('/livrocategoria', { idLivro, idCategoria });
        set((state) => ({ livroCategorias: [...state.livroCategorias, response.data], loading: false }));
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  
    
    deleteByIdLivro: async (idLivro) => {
      set({ loading: true, error: null });
      try {
        await api.delete(`/livrocategoria/livro/${idLivro}`);
        set((state) => ({ livroCategorias: state.livroCategorias.filter(item => item.idLivro !== idLivro), loading: false }));
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  
    deleteByIdCategoria: async (idCategoria) => {
      set({ loading: true, error: null });
      try {
        await api.delete(`/livrocategoria/categoria/${idCategoria}`);
        set((state) => ({ livroCategorias: state.livroCategorias.filter(item => item.idCategoria !== idCategoria), loading: false }));
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  }));
  
  export default useLivroCategoriaStore;
  