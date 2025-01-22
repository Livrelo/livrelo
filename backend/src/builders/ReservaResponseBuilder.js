import BaseBuilder from "./BaseBuilder";

class ReservaResponseBuilder extends BaseBuilder {
  addReservaData(reservas) {
    this.addData(reservas);
    return this;
  }
}

export default ReservaResponseBuilder;
