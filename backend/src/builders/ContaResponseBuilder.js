import BaseBuilder from "./BaseBuilder.js";

class ContaResponseBuilder extends BaseBuilder {
  addContaData(contas) {
    this.addData(contas);
    return this;
  }
  dataValues(){
    this.response = this.response.map((item) => item.dataValues);
    return this;
  }
  withoutPassword(){
    const field = "senha";
    this.response = this.response.map((item) => {
      delete item[field]
      return item
    });
    return this;
  }
}

export default ContaResponseBuilder;