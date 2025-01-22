import BaseBuilder from "./BaseBuilder.js";

class ReservaResponseBuilder extends BaseBuilder {
  addReservaData(reservas) {
    this.addData(reservas);
    return this;
  }
}

export default ReservaResponseBuilder;
