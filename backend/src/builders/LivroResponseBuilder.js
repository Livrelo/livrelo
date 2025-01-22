import BaseBuilder from "./BaseBuilder";

class LivroResponseBuilder extends BaseBuilder {
    addLivroData(livros) {
      this.addData(livros);
      return this;
    }
}

export default LivroResponseBuilder;