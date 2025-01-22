import BaseBuilder from "./BaseBuilder.js";

class DevolucaoResponseBuilder extends BaseBuilder {
  addDevolucaoData(devolucoes) {
    this.addData(devolucoes);
    return this;
  }
  dataValues(){
    this.response = this.response.map((item) => item.dataValues);
    return this;
  }
}

export default DevolucaoResponseBuilder;