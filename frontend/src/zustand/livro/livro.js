import CreateAxios from "../../utils/api";
import { create } from "zustand";
import useAuthStore from "../auth/auth";
// import { devtools } from "zustand/middleware";
import { API_HEADER } from '../../utils/config';
import { notify } from '../..';
const api = await CreateAxios.getAxiosInstance();
const authState = useAuthStore.getState();

const useLivrosStore = create((set, get) => ({
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
            const { token } = useAuthStore.getState();
            const response = await api.get(`/livro/${id}`,API_HEADER(token));
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
            const formData = new FormData();
            for (const key in livro) {
                if (livro[key] !== null && livro[key] !== undefined && key !== 'livroImage') {
                    formData.append(key, livro[key]);
                    console.log("Tentando adicionar:",livro[key]);
                    }
            }

                if (livro.livroImage) {
                formData.append('livroImage', livro.livroImage);
            }
            console.log("FormData:", Array.from(formData));
            const {token} = useAuthStore.getState();
            const response = await api.post('/livro', formData ,{
                headers:{
                    ["x-access-token"]: `${token}`,
                    ...(livro.livroImage && { 'Content-Type': 'multipart/form-data' })
                }
            });
            await get().fetchLivros();
            notify("success", response.data.message);
            // set((state) => ({ livros: [...state.livros, response.data] }));
            return response;
        } catch (error) {
            notify("error", error.message);
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },

    updateLivro: async (id, livroAtualizado) => {
        set({ loading: true, error: null });
        try {
            const { token } = useAuthStore.getState();
            const response = await api.put(`/livro/${id}`, livroAtualizado, API_HEADER(token));
            await get().fetchLivros();
            notify("success", "Livro Atualizado com sucesso");
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },

    deleteLivro: async (id) => {
        set({ loading: true, error: null });
        try {
            const { token } = useAuthStore.getState();
            await api.put(`/livro/${id}`, {status: "Deletado"}, API_HEADER(token));
            await get().fetchLivros();
            notify("success","Livro Deletado com sucesso.");
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },
}));

export default useLivrosStore;