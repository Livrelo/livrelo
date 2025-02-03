import { create } from "zustand";
import CreateAxios from "../../utils/api";
import { notify } from "../..";
import useAuthStore from "../auth/auth";
import { API_HEADER } from '../../utils/config';

const api = await CreateAxios.getAxiosInstance();

const useUsuarioStore = create((set, get) => ({
    usuarios: [],
    usuario: null,
    loading: false,
    error: null,

    //get by id conta
    fetchUsuarioByIdConta: async (idConta) => {
        set({ loading: true, error: null });
        try {
            const response = await api.get(`/usuario/${idConta}`);
            set({ usuario: response.data });
            return response;
        } catch (error) {
            set({ error: error.response?.data?.message || error.message });
        } finally {
            set({ loading: false });
        }
    },

    //create usuario
    createUsuario: async (usuario) => {
        set({ loading: true, error: null });
        try {
            console.log(usuario);
            const response = await api.post('/cadastro', usuario);
            console.log(response);
            set((state) => ({
                usuarios: [...state.usuarios, response.data],
                usuario: response.data
            }));
            notify("success","Usuario cadastrado com sucesso");
        } catch (error) {
            set({ error: error.response?.data?.message || error.message });
            notify("error",error.message);
        } finally {
            set({ loading: false });
        }
    },

    //update pelo cpf
    updateUsuario: async (cpf, usuarioAtualizado) => {
        set({ loading: true, error: null });
        try {
            const authState = useAuthStore.getState();
            const response = await api.put(`/usuario/${cpf}`, usuarioAtualizado, API_HEADER);
            set((state) => ({
                usuarios: state.usuarios.map((usuario) => usuario.cpf === cpf ? response.data : usuario),
                usuario: state.usuario?.cpf === cpf ? response.data : state.usuario
            }));
        } catch (error) {
            set({ error: error.response?.data?.message || error.message });
        } finally {
            set({ loading: false });
        }
    },

    //deletar pelo cpf
    deleteUsuario: async (cpf) => {
        set({ loading: true, error: null });
        try {
            const authState = useAuthStore.getState();
            console.log(cpf);
            console.log(authState.conta.cpf)
            await api.delete(`/usuario/${cpf}`, API_HEADER)
            set((state) => ({
                usuarios: state.usuarios.filter((usuario) => usuario.cpf !== cpf),
                usuario: state.usuario?.cpf === cpf ? null : state.usuario
            }));
        } catch (error) {
            set({ error: error.response?.data?.message || error.message });
        } 
    },
}));

export default useUsuarioStore;
