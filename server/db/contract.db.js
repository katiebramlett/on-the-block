const { pool } = require('./db')

const getContractDB = async (userid) => {
    try {
        const query = 'Select * from ontheblock_db.contracts WHERE tenantID = ?'
        const result = await pool.query(query, [userid])

        return result[0]

    } catch (e) {
        console.log(e);
    }
}


module.exports = {
    getContractDB
};