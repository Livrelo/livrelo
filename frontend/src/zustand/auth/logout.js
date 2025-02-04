//gerenciamento de tokens, login e logout, tirando de conta.js
//gpt: com local storage

import { create, useStore } from "zustand";
import CreateAxios from "../../utils/api";
import { notify } from "../..";


import useAuthStore from "./auth.js";
import useBibliotecarioStore from "../bibliotecario/bibliotecario.js";
import useCategoriaStore from "../categoria/categoria.js";
import useContaStore from "../conta/conta.js";
import useDevolucaoStore from "../devolucao/devolucao.js";
import useEmprestimoStore from "../emprestimo/emprestimo.js";
import useLivrosStore from "../livro/livro.js";
import useLivroCategoriaStore from "../livroCategoria/livroCategoria.js";
import useReservaStore from "../reserva/reserva.js";
import useUsuarioStore from "../usuario/usuario.js";

const api = await CreateAxios.getAxiosInstance();

const useLogOutStore = create((set, get) => ({
    loading: false,
    error: null,

    // Logout
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
            console.log(useReservaStore.getState().reservas);
            useBibliotecarioStore.setState({bibliotecarios:[], bibliotecario:null,});
            console.log(useBibliotecarioStore.getState().bibliotecarios);
            useCategoriaStore.setState({ categorias: [], categoria: null});
            console.log(useCategoriaStore.getState().categorias);
            useContaStore.setState({conta: null});
            console.log(useContaStore.getState().conta);
            useDevolucaoStore.setState({devolucoes: [], devolucao: null});
            console.log(useDevolucaoStore.getState().devolucoes);
            useEmprestimoStore.setState({ emprestimos: [], emprestimosAtrasados: [], emprestimoSelecionado: null});
            console.log(useEmprestimoStore.getState().emprestimos);
            useLivroCategoriaStore.setState({livroCategorias: []});
            console.log(useLivroCategoriaStore.getState().livroCategorias);
            useUsuarioStore.setState({usuarios: [], usuario: null});
            console.log(useUsuarioStore.getState().usuarios);
            // Reseta o estado global
            set({});

            return 1;

        } catch (error) {
            set({ error: error.response?.data?.message || error.message });
        } finally {
            set({ loading: false });
        }
    },

    // Verifica se o usuário está autenticado
    isAuthenticated: () => {
        return !!localStorage.getItem("token");
    },
}));

export default useLogOutStore;

