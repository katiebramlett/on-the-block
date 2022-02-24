const { pool } = require('./db')

const getContractDB = async (userid) => {
    try {
        const query = 'Select * FROM ontheblock_db.contracts WHERE tenantid = ? OR landlordid = ?'
        const result = await pool.query(query, [userid, userid])

        return result[0]

    } catch (e) {
        console.log(e);
    }
}

const postContractDB = async(landlordid, landlordwallet, tenantwallet, monthlyfee, startdate, enddate) => {
    try {
        const tenantidquery = 'SELECT userid from ontheblock_db.wallets WHERE walletaddr = ?'
        const tenantid = await pool.query(tenantidquery, [tenantwallet])

        const query = "INSERT INTO ontheblock_db.contracts (landlordid, tenantid, landlordwallet, tenantwallet, monthlyfee, startdate, enddate) VALUES (?, ?, ?, ?, ?, ?, ?)"
        const result = await pool.query(query, [landlordid, tenantid[0].userid, landlordwallet, tenantwallet, monthlyfee, startdate, enddate])

        return result[0].insertId

    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getContractDB,
    postContractDB
};