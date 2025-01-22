import BaseBuilder from "./BaseBuilder";

class CategoriaResponseBuilder extends BaseBuilder {
  addCategoriaData(categorias) {
    this.addData(categorias);
    return this;
  }
}

export default CategoriaResponseBuilder;