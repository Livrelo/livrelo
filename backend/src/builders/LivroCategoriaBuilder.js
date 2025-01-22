import BaseBuilder from "./BaseBuilder.js";

class LivroCategoriaResponseBuilder extends BaseBuilder {

  dataValues(){
    this.response = this.response.map((livrocategoria) => livrocategoria.dataValues);
    return this;
  }
}

export default LivroCategoriaResponseBuilder;