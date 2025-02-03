//ja tendo gerenciamento de login e logout e tokens no auth, conta nao precisa ter 
import { create } from "zustand";
import CreateAxios from "../../utils/api";
import useAuthStore from "../auth/auth.js";
import useUsuarioStore from "../usuario/usuario.js"
import { notify } from "../..";
import { API_HEADER } from '../../utils/config';


const api = await CreateAxios.getAxiosInstance();



const useContaStore = create(
    (set, get) => ({
    conta: null,
    loading: false,
    error: null,

    // Atualizar conta
    updateConta: async (idConta, contaAtualizada) => {
        set({ loading: true, error: null });
        try {
            const { token } = useAuthStore.getState();
            const response = await api.put(`/conta/${idConta}`, contaAtualizada, API_HEADER(token));
            useAuthStore.setState({ conta: response.data.conta});
            notify("success", "Usuario atualizado com sucesso")
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
                const { token } = useAuthStore.getState();
                const response = await api.delete(`/conta/${idConta}`, API_HEADER(token) );    
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
