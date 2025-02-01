import CreateAxios from "../../utils/api";
import { devtools } from "zustand/middleware";

const api = CreateAxios();

const useEmprestimoStore = create(devtools((set) => ({
    emprestimos: [],
    emprestimosAtrasados: [],
    emprestimoSelecionado: null,
    loading: false,
    error: null,

    // Obter todos os empréstimos
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

    // Obter empréstimos pelo CPF
    fetchEmprestimosByCPF: async (cpf) => {
        set({ loading: true, error: null });
        try {
            if (!cpf) throw new Error("CPF não fornecido");
            const response = await api.get(`/emprestimos/cpf/${cpf}`);
            set({ emprestimos: response.data });
        } catch (error) {
            set({ error: error.message });
        } finally {
            set({ loading: false });
        }
    },

    // Obter empréstimo pelo ID
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

    // Obter empréstimos em atraso
    fetchEmprestimosEmAtraso: async () => {
        set({ loading: true, error: null });
        try {
            const response = await api.get('/emprestimos/atraso');
            set({ emprestimosAtrasados: response.data });
        } catch (error) {
            set({ error: error.message });
            
        } finally {
            set({ loading: false });
        }
    },

    // Criar um novo empréstimo
    createEmprestimo: async (dataInicio, dataFim, cpf, idReserva, idLivro) => {
        set({ loading: true, error: null });
        try {
            const response = await api.post('/emprestimos', {
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

    // Renovar empréstimo
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