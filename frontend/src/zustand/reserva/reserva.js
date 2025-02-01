import { create } from 'zustand';
import CreateAxios from '../../utils/api';

const api = await CreateAxios.getAxiosInstance();

const useReservaStore = create((set) => ({
  reservas: [],
  reserva: null,
  isLoading: false,
  error: null,

  fetchReservas: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.get('/reserva');
      set({ reservas: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchReservaById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.get(`/reserva/${id}`);
      set({ reserva: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  createReserva: async (reserva, cpf) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.post('/reserva', reserva, cpf);
      set((state) => ({ reservas: [...state.reservas, response.data], isLoading: false }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  updateReserva: async (reserva, id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.put(`/reserva/${id}`, reserva);
      set((state) => ({
        reservas: state.reservas.map((reserva) =>
          reserva.idReserva === id ? response.data : reserva
        ),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  deleteReserva: async (id) => {
    set({ isLoading: true, error: null });
    try {
      await api.delete(`/reserva/${id}`);
      set((state) => ({
        reservas: state.reservas.filter((reserva) => reserva.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  cancelReserva: async (id) => {
    set({ isLoading: true, error: null });
    try{
      const response = await api.put(`/reserva/cancelamento/${id}`);
      set((state)=>({
        reserva: state.reservas.map((reserva) =>
          reserva.idReserva === id ? response.data : reserva
        ), isLoading:false
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false})
    }
  }
}));

export default useReservaStore;