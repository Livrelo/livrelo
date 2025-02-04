class Mediator {
    constructor() {
        this.handlers = {};
    }

    register(event, handler) {
        this.handlers[event] = handler;
    }

    async handle(event, ...args) {
        if (this.handlers[event]) {
            return await this.handlers[event](...args);
        }
        throw new Error(`Handler for event "${event}" not found`);
    }
}

export default new Mediator();