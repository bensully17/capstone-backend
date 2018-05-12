// Update with your config settings.

module.exports = {
  development: {
    client: 'pg',
    connection: 'postgres://localhost/mycellar'
  },
  test: {
    client: 'pg',
    connection: 'postgres://localhost/test-mycellar'
  }
}