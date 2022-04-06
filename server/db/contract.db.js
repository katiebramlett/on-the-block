const { pool } = require('./db')

// Get all contracts associated with the user (no matter landlord or tenant or status of contract)
const getContractDB = async (userid) => {
    try {
        const query = 'Select * FROM ontheblock_db.contracts WHERE tenantid = ? OR landlordid = ?'
        const result = await pool.query(query, [userid, userid])

        return result[0]

    } catch (e) {
        console.log(e);
    }
}

// Get contracts that the user is the tenant and needs to approve
const getPendingTenantDB = async (userid) => {
    try {
        const query = 'Select * FROM ontheblock_db.contracts WHERE tenantid = ? AND status = "pending"'
        const result = await pool.query(query, [userid, userid])

        return result[0]

    } catch (e) {
        console.log(e);
    }
}

// Get contracts that the user is the landlord and is waiting for approval
const getAwaitingLandlordDB = async (userid) => {
    try {
        const query = 'SELECT * FROM ontheblock_db.contracts WHERE landlordid = ? AND status="pending"'
        const result = await pool.query(query, [userid, userid])

        return result[0]

    } catch (e) {
        console.log(e);
    }
}

const getActiveContractsDB = async (userid) => {
    try {
        const query = 'Select * FROM ontheblock_db.contracts WHERE tenantid = ? OR landlordid = ? AND status = "active"'
        const result = await pool.query(query, [userid, userid])

        return result[0]

    } catch (e) {
        console.log(e);
    }
}

const getDeniedContractsDB = async (userid) => {
    try {
        const query = 'SELECT * FROM ontheblock_db.contracts WHERE tenantid = ? OR landlordid = ? AND status = "denied"'
        const result = await pool.query(query, [userid, userid])

        return result[0]

    } catch (e) {
        console.log(e);
    }
}

const getTerminatedContractsDB = async (userid) => {
    try {
        const query = 'SELECT * FROM ontheblock_db.contracts WHERE tenantid = ? OR landlordid = ? AND status = "terminated"'
        const result = await pool.query(query, [userid, userid])

        return result[0]

    } catch (e) {
        console.log(e);
    }
}

const createContractDB = async(landlordid, landlordwallet, tenantwallet, monthlyfee, startdate, enddate) => {
    try {
        const tenantidquery = 'SELECT userid FROM ontheblock_db.wallets WHERE walletaddr = ?'
        const tenantid = await pool.query(tenantidquery, [tenantwallet])

        const query = "INSERT INTO ontheblock_db.contracts (landlordid, tenantid, landlordwallet, tenantwallet, monthlyfee, startdate, enddate, status) VALUES (?, ?, ?, ?, ?, ?, ?, 'pending')"
        const result = await pool.query(query, [landlordid, tenantid[0][0].userid, landlordwallet, tenantwallet, monthlyfee, startdate, enddate])

        return result[0].insertId

    } catch (e) {
        console.log(e)
    }
}

const updateContractStatustDB = async(contractid, status) => {
    try {
        const query = 'UPDATE ontheblock_db.contracts SET status = ? WHERE contractid = ?'
        const result = await pool.query(query, [status, contractid])

        return result[0].insertId

    } catch (e) {
        console.log(e)
    }
}

module.exports = {
    getContractDB,
    getPendingTenantDB,
    getAwaitingLandlordDB,
    getActiveContractsDB,
    getDeniedContractsDB,
    getTerminatedContractsDB,
    createContractDB,
    updateContractStatustDB
};