import BaseBuilder from "./BaseBuilder.js";

class ContaResponseBuilder extends BaseBuilder {
  addContaData(contas) {
    this.addData(contas);
    return this;
  }
}

export default ContaResponseBuilder;