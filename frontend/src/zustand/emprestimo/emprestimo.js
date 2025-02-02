import CreateAxios from "../../utils/api";
import { devtools } from "zustand/middleware";
import { create } from "zustand";
import useAuthStore from "../auth/auth";
import { notify } from "../..";

const api = await CreateAxios.getAxiosInstance();

const useEmprestimoStore = create(((set,get) => ({
    emprestimos: [],
    emprestimosAtrasados: [],
    emprestimoSelecionado: null,
    loading: false,
    error: null,

    
    fetchAllEmprestimos: async () => {
        set({ loading: true, error: null });
        const  { token } = useAuthStore.getState();
        
        try {
            const response = await api.get('/emprestimos', {
                headers: {
                    ["x-access-token"]:`${token}`
                }
            });
            set({ emprestimos: response.data });
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
            const response = await api.get(`/emprestimos/${cpf}`, {
                headers: {
                    ["x-access-token"]:`${authState.token}`
                }
            });
            console.log(response.data);
            //array push data
            let array = []
            array.push(response.data)
            set({ emprestimos: array });
            console.log(get().emprestimos)

        } catch (error) {
            console.log("erro")
            console.log(error);
            set({ error: error.message });
        }
    },

    
    fetchEmprestimoByID: async (idEmprestimo) => {
        set({ loading: true, error: null });
        try {
            const response = await api.get(`/emprestimos/${idEmprestimo}`);
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
            const response = await api.get('/emprestimosAtrasados');
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
            const response = await api.get(`/emprestimosAtrasados;${cpf}`);
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
            const { token } = useAuthStore.getState();
            const isThereReserva = preEmprestimo?.idReserva ? true : false;

            if(isThereReserva){
                await api.post(`/emprestimo/${preEmprestimo.idLivro}?idReserva=${preEmprestimo.idReserva}`, preEmprestimo, {
                    headers: {
                        ["x-access-token"]:`${token}`
                    }
                });
            } else {
                await api.post(`/emprestimos/${preEmprestimo.idLivro}`, preEmprestimo, {
                    headers: {
                        ["x-access-token"]:`${token}`
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
            const response = await api.post(`/emprestimos/${preEmprestimo.idLivro}`, preEmprestimo, {
                headers: {
                    ["x-access-token"]:`${token}`
                }
            });
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
            const response = await api.put(`/emprestimos/${idEmprestimo}`, { dataFim: newDataFim });
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