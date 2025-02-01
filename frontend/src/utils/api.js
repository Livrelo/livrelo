import axios from "axios";

const CreateAxios = () => {

  return axios.create({
      baseURL: "http://localhost:5000",
    //   headers: {
    //     Authorization: `${token}`,
    //   },
  });    
};
    
    export default CreateAxios;