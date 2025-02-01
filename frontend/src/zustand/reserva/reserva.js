import { create } from 'zustand';
import CreateAxios from '../../utils/api';

const api = CreateAxios();

const useReservaStore = create((set) => ({
  reservas: [],
  reserva: null,
  isLoading: false,
  error: null,

  fetchReservas: async () => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.get('/api/reservas');
      set({ reservas: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchReservaById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.get(`/api/reservas/${id}`);
      set({ reserva: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  createReserva: async (reservaData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.post('/api/reservas', reservaData);
      set((state) => ({ reservas: [...state.reservas, response.data], isLoading: false }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  updateReserva: async (id, updatedData) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.put(`/api/reservas/${id}`, updatedData);
      set((state) => ({
        reservas: state.reservas.map((reserva) =>
          reserva.id === id ? response.data : reserva
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
      await api.delete(`/api/reservas/${id}`);
      set((state) => ({
        reservas: state.reservas.filter((reserva) => reserva.id !== id),
        isLoading: false,
      }));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },
}));

export default useReservaStore;