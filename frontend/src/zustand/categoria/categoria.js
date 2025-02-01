import CreateAxios from "../../utils/api";
import { create } from "zustand";

const api = await CreateAxios.getAxiosInstance();

const useCategoriaStore = create((set) => ({
    categorias: [],
    categoria: null,
    loading: false,
    error: null,
  
    fetchCategorias: async () => {
        set({ loading: true, error: null });
    try {
      const response = await api.get('/categoria');
      set({ categorias: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
    },

    fetchCategoriaById: async (idCategoria) => {
      set({ loading: true, error: null });
      try {
        const response = await api.get(`/categoria/${idCategoria}`);
        set({ categoria: response.data, loading: false });
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  
    
    createCategoria: async ( categoria ) => {
      set({ loading: true, error: null });
      try {
        const response = await api.post('/categoria', categoria);
        set((state) => ({ categorias: [...state.categorias, response.data], loading: false }));
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },

    updateCategoria: async (id, categoria ) =>{
        set({loading: true, error: null});
        try { 
            const response = await api.put(`categoria/${id}`, categoria);
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
        await api.delete(`/livrocategoria/categoria/${idCategoria}`);
        set((state) => ({ categorias: state.categorias.filter(item => item.idCategoria !== idCategoria), loading: false }));
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },
  }));
  
  export default useCategoriaStore;