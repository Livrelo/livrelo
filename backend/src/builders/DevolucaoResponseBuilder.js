import BaseBuilder from "./BaseBuilder.js";

class DevolucaoResponseBuilder extends BaseBuilder {
  addDevolucaoData(devolucoes) {
    this.addData(devolucoes);
    return this;
  }
}

export default DevolucaoResponseBuilder;