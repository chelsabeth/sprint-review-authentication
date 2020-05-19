  
module.exports = {

    development: {
        client: 'sqlite3',
        connection: {
            filename: './database/users.db3' // put db filename in here
        },
        useNullAsDefault: true,
        migrations: {
            directory: './database/migrations' // put migrations here
        },
        seeds: {
            directory: './database/seeds' // put seeds here
        },
        pool: {
            afterCreate: (conn, done) => {
                conn.run('PRAGMA foreign_keys = ON', done);
            }
        },
    }
}