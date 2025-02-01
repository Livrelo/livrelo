import CreateAxios from "../../utils/api";
import { devtools } from "zustand/middleware";

const api = CreateAxios.getAxiosInstance();

const useEmprestimoStore = create(devtools((set) => ({
    emprestimos: [],
    emprestimosAtrasados: [],
    emprestimoSelecionado: null,
    loading: false,
    error: null,

    
    fetchAllEmprestimos: async () => {
        set({ loading: true, error: null });
        try {
            const response = await api.get('/emprestimos');
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
            if (!cpf) throw new Error("CPF não fornecido");
            const response = await api.get(`/emprestimos/${cpf}`);
            set({ emprestimos: response.data });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
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

    
    createEmprestimo: async (dataInicio, dataFim, cpf, idReserva, idLivro) => {
        set({ loading: true, error: null });
        try {
            const response = await api.post(`/emprestimos/${idLivro}`, {
                dataInicio,
                dataFim,
                cpf,
                idReserva,
                idLivro
            });
            set((state) => ({ emprestimos: [...state.emprestimos, response.data] }));
           
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