export default {
    dialect: 'postgres',
    host: 'localhost',
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: 'livrelo',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};