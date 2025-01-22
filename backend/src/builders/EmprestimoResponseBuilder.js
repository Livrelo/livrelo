import BaseBuilder from "./BaseBuilder.js";

class EmprestimoResponseBuilder extends BaseBuilder {
  addEmprestimoData(emprestimos) {
    this.addData(emprestimos);
    return this;
  }
  dataValues(){
    this.response = this.response.map((item) => item.dataValues);
    return this;
  }
}

export default EmprestimoResponseBuilder;