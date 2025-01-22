import BaseBuilder from "./BaseBuilder";

class DevolucaoResponseBuilder extends BaseBuilder {
  addDevolucaoData(devolucoes) {
    this.addData(devolucoes);
    return this;
  }
}

export default DevolucaoResponseBuilder;