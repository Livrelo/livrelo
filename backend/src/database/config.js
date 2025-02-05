export default {
    dialect: 'postgres',
    host: 'db',
    username: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    database: 'livrelo',
    define: {
        timestamps: true,
        underscored: true,
        underscoredAll: true,
    }
};