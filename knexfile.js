require('dotenv').load()

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/mycellar'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-mycellar'
  },
  production: {
    client: 'pg',
    connection: `${process.env.DATABASE_URL}?ssl=true`}
}