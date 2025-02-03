import useAuthStore from "../auth/auth";
import CreateAxios from "../../utils/api";
import { create } from "zustand";
import { API_HEADER } from '../../utils/config';

const api = await CreateAxios.getAxiosInstance();
const authState = useAuthStore.getState();

const useCategoriaStore = create(
    (set, get) => ({
    categorias: [],
    categoria: null,
    loading: false,
    error: null,
  
    fetchCategorias: async () => {
        set({ loading: true, error: null });
    try {
      const { token } = useAuthStore.getState();
      const response = await api.get('/categoria', API_HEADER(token));
      set({ categorias: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
    },

    fetchCategoriaById: async (idCategoria) => {
      set({ loading: true, error: null });
      try {
        const { token } = useAuthStore.getState();
        const response = await api.get(`/categoria/${idCategoria}`, API_HEADER(token));
        set({ categoria: response.data, loading: false });
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  
    
    createCategoria: async ( categoria ) => {
      set({ loading: true, error: null });
      try {
        const { token } = useAuthStore.getState();
        const response = await api.post('/categoria', categoria, API_HEADER(token));
        set((state) => ({ categorias: [...state.categorias, response.data], loading: false }));
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },

    updateCategoria: async (id, categoria ) =>{
        set({loading: true, error: null});
        try { 
            const { token } = useAuthStore.getState();
            const response = await api.put(`categoria/${id}`, categoria, API_HEADER(token));
            set((state) => ({
                categorias: state.categorias.map((cat) =>
                    cat.idCategoria === id ? response.data : cat
                )
            }))
        }catch (error) {
            set({ error: error.message });

        } finally {
            set({ loading: false });
        }
    },
  
    deleteByIdCategoria: async (idCategoria) => {
      set({ loading: true, error: null });
      try {
        const { token } = useAuthStore.getState();
        await api.delete(`/livrocategoria/categoria/${idCategoria}`, API_HEADER(token));
        set((state) => ({ categorias: state.categorias.filter(item => item.idCategoria !== idCategoria), loading: false }));
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  }));
  
  export default useCategoriaStore;