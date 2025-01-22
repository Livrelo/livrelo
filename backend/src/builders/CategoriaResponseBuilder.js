import BaseBuilder from "./BaseBuilder.js";

class CategoriaResponseBuilder extends BaseBuilder {

  dataValues(){
    this.response = this.response.map((categoria) => categoria.dataValues);
    return this;
  }
}

export default CategoriaResponseBuilder;