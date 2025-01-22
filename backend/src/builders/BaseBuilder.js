class BaseBuilder {
	constructor() {
		this.response = [];
	}

	/**
	 * Adiciona dados ao builder.
	 * Aceita tanto um único objeto quanto um array de objetos para casos de findAll ou findByPk.
	 */
	addData(data) {
		if (Array.isArray(data)) {
			this.response = data.map((item) => ({ ...item }));
		} else if (typeof data === "object" && data !== null) {
			this.response = [{ ...data }];
		} else {
			throw new Error("Data deve ser um objeto ou um array de objetos.");
		}
		return this; 
	}

	/**
	 * Remove os campos de timestamp (`createdAt`, `updatedAt`) de todos os itens.
	 */
	withoutTimestamps() {
		const timestampFields = ["createdAt", "updatedAt"];
		this.response = this.response.map((item) => {
			timestampFields.forEach((field) => delete item[field]);
			return item;
		});
		return this;
	}

	/**
	 * Retorna os dados construídos.
	 */
	build() {
		return this.response.length === 1 ? this.response[0] : this.response;
	}
}

export default BaseBuilder;
