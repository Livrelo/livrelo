import BaseBuilder from "./BaseBuilder.js";

class LivroResponseBuilder extends BaseBuilder {

    //@Override
    withoutTimestamps() {
      const timestampFields = ["createdAt", "updatedAt"];
      this.response = this.response.map((item) => {
        timestampFields.forEach((field) => delete item[field]);
        return item;
      });
      return this;
    }

    dataValues(){
      this.response = this.response.map((item) => item.dataValues);
      return this; 
    }
}

export default LivroResponseBuilder;