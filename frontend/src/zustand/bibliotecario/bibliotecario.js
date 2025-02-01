import CreateAxios from "../../utils/api";
import { create } from "zustand";

const api = await CreateAxios.getAxiosInstance();

const useBibliotecarioStore = create((set) => ({
    bibliotecarios:[],
    bibliotecario:null,
    isLoading: false,
    error: null,

    fetchBibliotecario: async () => {
        set({ isLoading: true, error: null });
        try {
        const response = await api.get('/bibliotecario');
        set({ bibliotecarios: response.data, isLoading: false });
        } catch (error) {
        set({ error: error.message, isLoading: false });
        }
    },

    fetchBibliotecarioById: async (idBib) => {
      set({ isloading: true, error: null });
      try {
        const response = await api.get(`/bibliotecario/${idBib}`);
        set({ bibliotecario: response.data, loading: false });
      } catch (error) {
        set({ error: error.message, loading: false });
      }
    },

    createBibliotecario: async (bibliotecario) => {
        set({ isloading: true, error: null});
        try {
            const response = await api.post('/categoria', bibliotecario);
            set((state) => ({ bibliotecarios: [...state.bibliotecarios, response.data], loading: false }));
          } catch (error) {
            set({ error: error.message, loading: false });
          }
    }

}));
export default useBibliotecarioStore;