import CreateAxios from "../../utils/api";
import { devtools } from "zustand/middleware";

const api = CreateAxios();

const useLivrosStore = create((set) => ({
    livros: [],
    livro: null,
    loading: false,
    error: null,

    fetchLivros: async () => {
        set({ loading: true, error: null });
        try {
            const response = await api.get('/api/livros');
            set({ livros: response.data });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },

    fetchLivroById: async (id) => {
        set({ loading: true, error: null });
        try {
            const response = await api.get(`/api/livros/${id}`);
            set({ livro: response.data });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },

    createLivro: async (novoLivro) => {
        set({ loading: true, error: null });
        try {
            const response = await api.post('/api/livros', novoLivro);
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
            const response = await api.put(`/api/livros/${id}`, livroAtualizado);
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
            await api.delete(`/api/livros/${id}`);
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