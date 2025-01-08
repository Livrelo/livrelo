import CategoriaService from "../services/CategoriaService";

class CategoriaController{
    static async findAll(req, res){
        try{
            const categorias = await CategoriaService.findAll();
            return res.status(200).send(categorias);
        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro buscando as categorias',
                error: error.message
            });
        }
    }
    static async findById(req, res){
        try{
            const id = req.params.id;
            const categoria = await CategoriaService.findById(id);
            return res.status(200).send({
                message: 'Categoria encontrada com sucesso',
                categoria: categoria
            });
        }catch(error){
            return res.status(400).send({
                message: 'Erro ao tentar encontrar categoria',
                error: error.message
            })
        }
    }
    static async create(req, res){
        try{
            const categoria = req.body;
            const categoriaCriada = await CategoriaService.create(categoria);

            return res.status(201).send({
                message: 'Categoria criada com sucesso',
                categoria: categoriaCriada
            })

        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro ao criar categoria.',
                error: error.message
            })
        }
    }
    static async update(req, res){
        try{
            const id = req.params.id;
            const categoria = req.body;
            const categoriaAtualizada = await CategoriaService.update(id, categoria);
            return res.status(204).send({
                message: 'Categoria atualizada com sucesso',
                categoria: categoriaAtualizada
            })
        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro ao atualizar a categoria.',
                error: error.message
            })
        }
    }
    static async delete(req, res){
        try{
            const id = req.params.id;
            const categoriaDeletada = await CategoriaService.delete(id);

            return res.status(200).send({
                message: 'Categoria deletada com sucesso',
                categoria: categoriaDeletada
            })
        }catch(error){
            return res.status(400).send({
                message: 'Ocorreu um erro ao deletar categoria',
                error: error.message
            })
        }
    }
}

export default CategoriaController;