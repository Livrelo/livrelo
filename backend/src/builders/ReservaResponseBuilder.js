import BaseBuilder from "./BaseBuilder.js";

class ReservaResponseBuilder extends BaseBuilder {
  addReservaData(reservas) {
    this.addData(reservas);
    return this;
  }
  dataValues(){
    this.response = this.response.map((item) => item.dataValues);
    return this;
  }
}

export default ReservaResponseBuilder;
