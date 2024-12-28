import { Sequelize } from "sequelize";
import "dotenv/config";


import App from "./app.js";

const PORT = 3000;

App.listen(PORT, () => {
    try{
        // console.log(process.env.POSTGRES_USERNAME);
        console.log(`server running on PORT ${PORT}`);
    }catch(error){
        // console.log(error);
    }
})