import CreateAxios from "../../utils/api";
import { devtools } from "zustand/middleware";
import { create } from "zustand";
import useAuthStore from "../auth/auth";
import { notify } from "../..";
import { API_HEADER } from '../../utils/config';

const api = await CreateAxios.getAxiosInstance();
const authState = useAuthStore.getState();

const useEmprestimoStore = create(((set, get) => ({
    emprestimos: [],
    emprestimosAtrasados: [],
    emprestimoSelecionado: null,
    loading: false,
    error: null,


    fetchAllEmprestimos: async () => {
        set({ loading: true, error: null });
        // const { token } = useAuthStore.getState();

        try {
            const { token } = useAuthStore.getState();
            const response = await api.get('/emprestimos', API_HEADER(token));

            let responseArray = [];

            console.log(response.data.length);
            console.log(response.data);
            if(response.data.length === undefined){
                responseArray.push(response.data);
            }else {
                responseArray = response.data;
            }

            set({ emprestimos: responseArray });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },


    fetchEmprestimosByCPF: async (cpf) => {
        set({ loading: true, error: null });
        try {
            // if (!cpf) throw new Error("CPF não fornecido");
            const authState = useAuthStore.getState()
            const cpf = authState.conta.cpf;
            const { token } = useAuthStore.getState();
            const response = await api.get(`/emprestimos/${cpf}`, API_HEADER(token));
            // console.log(response.data);
            //array push data
            // let array = []
            let responseArray = [];
            // array.push(response.data)
            if(response.data.length === undefined){
                responseArray.push(response.data);
            }else {
                responseArray = response.data;
            }
            set({ emprestimos: responseArray });

        } catch (error) {
            console.log("erro")
            console.log(error);
            set({ error: error.message });
        }
    },


    fetchEmprestimoByID: async (idEmprestimo) => {
        set({ loading: true, error: null });
        try {
            const { token } = useAuthStore.getState();
            const response = await api.get(`/emprestimos/${idEmprestimo}`, API_HEADER(token));
            set({ emprestimoSelecionado: response.data });
        } catch (error) {
            set({ error: error.message });

        } finally {
            set({ loading: false });
        }
    },


    fetchEmprestimosEmAtraso: async () => {
        set({ loading: true, error: null });
        try {
            const { token } = useAuthStore.getState();
            const response = await api.get('/emprestimosAtrasados', API_HEADER(token));
            set({ emprestimosAtrasados: response.data });
        } catch (error) {
            set({ error: error.message });

        } finally {
            set({ loading: false });
        }
    },

    fetchEmprestimosEmAtrasoByCPF: async (cpf) => {
        set({ loading: true, error: null });
        try {
            const { token } = useAuthStore.getState();
            const response = await api.get(`/emprestimosAtrasados;${cpf}`, API_HEADER(token));
            set({ emprestimosAtrasados: response.data });
        } catch (error) {
            set({ error: error.message });

        } finally {
            set({ loading: false });
        }
    },

    
    createEmprestimo: async (preEmprestimo) => {
        set({ loading: true, error: null });
        try {
            // const { token } = useAuthStore.getState();
            const isThereReserva = preEmprestimo?.idReserva ? true : false;

            if(isThereReserva){
                const { token } = useAuthStore.getState();
                await api.post(`/emprestimo/${preEmprestimo.idLivro}?idReserva=${preEmprestimo.idReserva}`, preEmprestimo, API_HEADER(token));
            } else {
                await api.post(`/emprestimos/${preEmprestimo.idLivro}`, preEmprestimo, {
                    headers: {
                        ["x-access-token"]:authState.token
                    }
                });
            }
            
            await get().fetchAllEmprestimos();
            notify("success","Emprestimo criado com sucesso");
            // set((state) => ({ emprestimos: [...state.emprestimos, response.data] }));
           
        } catch (error) {
            set({ error: error.message });
            
        } finally {
            set({ loading: false });
        }
    },

    createEmprestimoSemReserva: async (preEmprestimo) => {
        set({ loading: true, error: null });
        try {
            const { token } = useAuthStore.getState();
            const response = await api.post(`/emprestimos/${preEmprestimo.idLivro}`, preEmprestimo, API_HEADER(token));
            await get().fetchAllEmprestimos();
            // set((state) => ({ emprestimos: [...state.emprestimos, response.data] }));
           
        } catch (error) {
            set({ error: error.message });

        } finally {
            set({ loading: false });
        }
    },


    updateEmprestimo: async (idEmprestimo, newDataFim) => {
        set({ loading: true, error: null });
        try {
            const { token } = useAuthStore.getState();
            const response = await api.put(`/emprestimos/${idEmprestimo}`, { dataFim: newDataFim }, API_HEADER(token));
            set((state) => ({
                emprestimos: state.emprestimos.map((emp) =>
                    emp.idEmprestimo === idEmprestimo ? response.data : emp
                )
            }));

        } catch (error) {
            set({ error: error.message });

        } finally {
            set({ loading: false });
        }
    },
})));

export default useEmprestimoStore;