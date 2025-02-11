import axios from "axios";

class CreateAxios {
    static instance = null;

    static async getAxiosInstance(){


      if (!this.instance) {
        this.instance = axios.create({
          baseURL: "http://localhost:5000",
        });   
      }
    return this.instance;
    }    
};
export default CreateAxios;