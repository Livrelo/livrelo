//ja tendo gerenciamento de login e logout e tokens no auth, conta nao precisa ter 
import { create } from "zustand";
import CreateAxios from "../../utils/api";
import useAuthStore from "../auth/auth.js";
import useUsuarioStore from "../usuario/usuario.js"
import { notify } from "../..";

const api = await CreateAxios.getAxiosInstance();



const useContaStore = create((set) => ({
    conta: null,
    loading: false,
    error: null,

    // Atualizar conta
    updateConta: async (idConta, contaAtualizada) => {
        set({ loading: true, error: null });
        try {
            const authState = useAuthStore.getState();
            const response = await api.put(`/conta/${idConta}`, contaAtualizada, {
                headers: {
                    ['x-access-token']:authState.token
                }
            });
            set({ conta: response.data });
        } catch (error) {
            set({ error: error.response?.data?.message || error.message });
        } finally {
            set({ loading: false });
        }
    },

    // Deletar conta
    deleteConta: async (idConta) => {
        set({ loading: true, error: null });
        try {
            const authState = useAuthStore.getState()
            const cpf = authState.conta.cpf;
            const { deleteUsuario } = useUsuarioStore.getState();
            
            //const respo = await api.delete(`/usuario/${cpf}`, {
                //     headers: {
                    //         ["x-access-token"]:`${authState.token}`
                    //     }
                    // })
            const resp = await deleteUsuario(cpf);
            if(resp){
                const response = await api.delete(`/conta/${idConta}`, {
                            headers: {
                                ["x-access-token"]:`${authState.token}`
                            }
                } );    
                notify("success", response.data.message);
            }
            set({ conta: null });
            // useUsuarioStore.setState({usuario:null})
        } catch (error) {
            set({ error: error.response?.data?.message || error.message });
        } finally {
            set({ loading: false });
        }
    },
}));

export default useContaStore;
