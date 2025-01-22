import BaseBuilder from "./BaseBuilder";

class EmprestimoResponseBuilder extends BaseBuilder {
  addEmprestimoData(emprestimos) {
    this.addData(emprestimos);
    return this;
  }
}

export default EmprestimoResponseBuilder;