import BaseBuilder from "./BaseBuilder";

class ContaResponseBuilder extends BaseBuilder {
  addContaData(contas) {
    this.addData(contas);
    return this;
  }
}

export default ContaResponseBuilder;