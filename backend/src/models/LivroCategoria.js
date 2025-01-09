import { DataTypes, Model } from "sequelize";

import Livro from "./Livro.js";
import Categoria from "./Categoria.js";

class LivroCategoria extends Model {
    static init(sequelize){
        super.init(
            {
                idLivro: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Livro,
                        key: 'idLivro' 
                    },
                    primaryKey: true,
                    allowNull: false,
                    field: 'idLivro'
                },
                idCategoria: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Categoria, 
                        key: 'idCategoria'         
                    },
                    primaryKey: true,
                    allowNull: false,
                    field: 'idCategoria'
                }
            },
            {
                sequelize,
                tableName: 'LivroCategoria'
            }
        )
    }
}

export default LivroCategoria;