import CreateAxios from "../../utils/api";
import { create } from "zustand";
import useAuthStore from "../auth/auth";
// import { devtools } from "zustand/middleware";
import { API_HEADER } from '../../utils/config';
const api = await CreateAxios.getAxiosInstance();
const authState = useAuthStore.getState();

const useLivrosStore = create((set) => ({
    livros: [],
    livro: null,
    loading: false,
    error: null,

    fetchLivros: async () => {
        set({ loading: true, error: null });
        try {
           
            const { token } = useAuthStore.getState();
            const response = await api.get('/livro', API_HEADER(token));
            set({ livros: response.data.livros });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },

    fetchLivroById: async (id) => {
        set({ loading: true, error: null });
        try {
            const response = await api.get(`/livro/${id}`);
            set({ livro: response.data });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },

    createLivro: async (livro) => {
        set({ loading: true, error: null });
        try {
            const response = await api.post('/livro', livro);
            set((state) => ({ livros: [...state.livros, response.data] }));
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },

    updateLivro: async (id, livroAtualizado) => {
        set({ loading: true, error: null });
        try {
            const response = await api.put(`/livro/${id}`, livroAtualizado);
            set((state) => ({
                livros: state.livros.map((livro) => livro.idLivro === id ? response.data : livro)
            }));
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },

    deleteLivro: async (id) => {
        set({ loading: true, error: null });
        try {
            await api.delete(`/livro/${id}`);
            set((state) => ({
                livros: state.livros.filter((livro) => livro.idLivro !== id)
            }));
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
}));

export default useLivrosStore;