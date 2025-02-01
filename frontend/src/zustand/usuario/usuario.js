import { create } from "zustand";
import CreateAxios from "../../utils/api";

const api = CreateAxios.getAxiosInstance();

const useUsuarioStore = create((set) => ({
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
            const response = await api.post('/usuario', usuario);
            set((state) => ({
                usuarios: [...state.usuarios, response.data],
                usuario: response.data
            }));
        } catch (error) {
            set({ error: error.response?.data?.message || error.message });
        } finally {
            set({ loading: false });
        }
    },

    //update pelo cpf
    updateUsuario: async (cpf, usuarioAtualizado) => {
        set({ loading: true, error: null });
        try {
            const response = await api.put(`/usuario/${cpf}`, usuarioAtualizado);
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
            await api.delete(`/usuario/${cpf}`);
            set((state) => ({
                usuarios: state.usuarios.filter((usuario) => usuario.cpf !== cpf),
                usuario: state.usuario?.cpf === cpf ? null : state.usuario
            }));
        } catch (error) {
            set({ error: error.response?.data?.message || error.message });
        } finally {
            set({ loading: false });
        }
    },
}));

export default useUsuarioStore;
