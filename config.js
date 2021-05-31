module.exports = {
    env: process.env.NODE_ENV || 'development',
    dbHost: process.env.DB_HOST || 'mongodb://localhost:27017/coin-notify-db',
    bitKubEndpoint: process.env.BIT_KUB_ENDPOINT
}