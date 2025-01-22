import BaseBuilder from "./BaseBuilder.js";

class EmprestimoResponseBuilder extends BaseBuilder {
  addEmprestimoData(emprestimos) {
    this.addData(emprestimos);
    return this;
  }
}

export default EmprestimoResponseBuilder;