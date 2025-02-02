//gerenciamento de tokens, login e logout, tirando de conta.js
//gpt: com local storage

import { create, useStore } from "zustand";
import CreateAxios from "../../utils/api";
import { notify } from "../..";


//import useReservaStore from "../reserva/reserva.js";
//import useLivrosStore from "../livro/livro.js";

const api = await CreateAxios.getAxiosInstance();

const useAuthStore = create((set, get) => ({
    conta: JSON.parse(localStorage.getItem("conta")) || null,
    token: localStorage.getItem("token") || null,
    loading: false,
    error: null,

    // Login
    login: async (credentials) => {
        set({ loading: true, error: null });
        try {
            const response = await api.post("/login", credentials);
            const { token, conta, message } = response.data;

            // Armazena no localStorage
            // localStorage.setItem("token", token);
            // localStorage.setItem("conta", JSON.stringify(conta));
            

            //

            // Atualiza o estado global
            notify("success", message);
            set({ conta, token });
            console.log(get().token)
            console.log(get().conta);
            
            return response.data;
        } catch (error) {
            console.log(error);
            notify("error", error.response.data.error || error.message);
            set({ error: error.response?.data?.message || error.message });
            
        } 
        // finally {
        //     set({ loading: false });
        // }
    },

    // Logout
    /*
    logout: async () => {
        set({ loading: true, error: null });
        try {
            await api.post("/logout");

            // Remove do localStorage
            // localStorage.removeItem("token");
            // localStorage.removeItem("conta");
            useLivrosStore.setState({livros: [], livro: null});
            console.log(useLivrosStore.getState().livros);
            useReservaStore.setState({reservas: [], reserva: null});
            console.log(useReservaStore.getState().livros);
            //useBibliotecarioStore.setState({bibliotecarios:[], bibliotecario:null,});
            //useCategoriaStore.setState({ categorias: [], categoria: null});
            //useContaStore.setState({conta: null});
            //useDevolucaoStore.setState({devolucoes: [], devolucao: null});
            //useEmprestimoStore.setState({ emprestimos: [], emprestimosAtrasados: [], emprestimoSelecionado: null});
            //useLivroCategoriaStore.setState({livroCategorias: []});
            //useUsuarioStore.setState({usuarios: [], usuario: null});
            // Reseta o estado global
            set({ conta: null, token: null });

            return 1;

        } catch (error) {
            set({ error: error.response?.data?.message || error.message });
        } finally {
            set({ loading: false });
        }
    },
    */
    // Verifica se o usuário está autenticado
    isAuthenticated: () => {
        return !!localStorage.getItem("token");
    },
}));

export default useAuthStore;

