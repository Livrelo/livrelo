import { DataTypes, Model } from "sequelize";

import Livro from "./Livro.js";
import Categoria from "./Categoria.js";

class LivroCategoria extends Model {
    static init(sequelize){
        super.init(
            {
                livroId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Livro,
                        key: 'id' 
                    },
                    primaryKey: true,
                    allowNull: false,
                    field: 'livroId'
                },
                categoriaId: {
                    type: DataTypes.INTEGER,
                    references: {
                        model: Categoria, 
                        key: 'id'         
                    },
                    primaryKey: true,
                    allowNull: false,
                    field: 'categoriaId'
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