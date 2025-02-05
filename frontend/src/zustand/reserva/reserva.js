import { create } from 'zustand';
import CreateAxios from '../../utils/api';
import { API_HEADER } from '../../utils/config';

import useAuthStore from '../auth/auth.js';
import { notify } from '../..';

const api = await CreateAxios.getAxiosInstance();
const authState = useAuthStore.getState();
// console.log("O que vem aqui"+ API_HEADER)
// const headers = API_HEADER(userState.token)

const useReservaStore = create((set, get) => ({
  reservas: [],
  reserva: null,
  isLoading: false,
  error: null,

  fetchReservas: async () => {
    set({ isLoading: true, error: null });
    try {
      const { token } = useAuthStore.getState();
      const response = await api.get('/reserva/', API_HEADER(token));
      let responseArray = [];

      console.log(response);
      console.log(response.data);

      if(response.data.length === undefined){
        responseArray.push(response.data)
      } else {
        responseArray = response.data;
      }
      console.log(responseArray);

      set({ reservas: responseArray, isLoading: false });
      console.log("reservas zustand:"+ JSON.stringify(response.data));
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchReservaById: async (id) => {
    set({ isLoading: true, error: null });
    try {
      const { token } = useAuthStore.getState();
      const response = await api.get(`/reserva/${id}`, API_HEADER(token));
      set({ reserva: response.data, isLoading: false });
    } catch (error) {
      set({ error: error.message, isLoading: false });
    }
  },

  fetchReservasByCPF: async () => {
    try{
      const { token } = useAuthStore.getState();
      const userState = useAuthStore.getState();
      console.log(userState)
      const response = await api.get(`/reserva/cpf/${userState.conta.cpf}`, API_HEADER(token));
      let responseArray = [];
            // array.push(response.data)
            if(response.data.length === undefined){
                responseArray.push(response.data);
            }else {
                responseArray = response.data;
            }
            set({ reservas: responseArray, isLoading: false  });
      // set({ reservas: [...response.data], isLoading: false });
    }catch(error){
      set({ error: error.message, isLoading: false });
    }
  },

  createReserva: async (reserva) => {
    set({ isLoading: true, error: null });
    try {
      const { token } = useAuthStore.getState();
      const response = await api.post('/reserva', {...reserva, cpfUsuario: reserva.cpf}, API_HEADER(token));
      await get().fetchReservasByCPF();
      notify("success", response.data.message);
      
    } catch (error) {
      console.log(error);
      notify("error", error.response.data.error)
      set({ error: error.message, isLoading: false });
    }
  },

  updateReserva: async (reserva, id) => {
    set({ isLoading: true, error: null });
    try {
      const response = await api.put(`/reserva/${id}`, reserva, {
        headers: {
            ["x-access-token"]:`${authState.token}`
        }
    } );
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
      await api.delete(`/reserva/${id}`,{
          headers: {
              ["x-access-token"]:`${authState.token}`
          }
      }
      );
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
      const response = await api.put(`/reserva/cancelamento/${id}`, null, {
        headers:{
          ["x-access-token"]:`${useAuthStore.getState().token}`
        }
      });
      set((state)=>({
        reserva: state.reservas.map((reserva) =>
          reserva.idReserva === id ? response.data : reserva
        ), isLoading:false
      }));
      notify("success", response.data.message);
    } catch (error) {
      notify("error", error.response.data.message);
      set({ error: error.message, isLoading: false})
    }
  }
}));

export default useReservaStore;