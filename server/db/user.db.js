const { pool } = require('./db')

// GET queries 
const loginDB = async(username) => {
    try {
        const query = 'SELECT userID, password FROM ontheblock_db.users WHERE username=?'
        const result = await pool.query(query, [username])
        
        return result[0]
    } catch(e) {
        console.log(e.message)
        throw(e)
    }
}

const getWalletDB = async(userID) => {
    try {
        const query = 'SELECT walletaddr FROM ontheblock_db.wallets WHERE userID = ?'
        const result = await pool.query(query, [userID])

        return result[0]
    } catch (e) {
        console.log(e.message)
        throw(e)
    } 
}

// ADDED BY CLAIRE - Update user settings when a user edits their settings and submits the changes
const getUserInfoDB = async(userID) => {
    try {
        const query = 'SELECT firstname, lastname, username FROM ontheblock_db.users WHERE userID = ?'
        const result = await pool.query(query, [userID])

        return result[0]
    } catch (e) {
        console.log(e.message)
        throw(e)
    } 
}


// POST queries  

const createUserDB = async(firstname, lastname, username, password) => {
    try {
        var query = 'INSERT INTO ontheblock_db.users (firstname, lastname, username, password) VALUES (?, ?, ?, ?)';
        var result = await pool.query(query, [firstname, lastname, username, password])
        
        query = 'SELECT userID FROM ontheblock_db.users WHERE username=?';
        result = await pool.query(query, [username])

        return result[0]

    } catch(e) {
        console.log(e.message)
        throw(e)
    }
}

const addUserWalletDB = async(userid, walletaddr) => {
    try {
        const query = 'INSERT INTO ontheblock_db.wallets (userID, walletaddr) VALUES (?, ?)';
        return await pool.query(query, [userid, walletaddr]);
    } catch(e) {
        console.log(e.message)
        throw(e)
    }
};

// ADDED BY CLAIRE - Update user settings when a user edits their settings and submits the changes
const updateUserSettingsDB = async(userid, fname, lname, uname, pword) => {
    try {
        const query = 'UPDATE ontheblock_db.users SET firstname=?, lastname=?, username=?, password=? WHERE userid=?';
        return await pool.query(query, [fname, lname, uname, pword, userid]);
    } catch(e) {
        console.log(e.message)
        throw(e)
    }
};

module.exports = {
    loginDB,
    getWalletDB,
    getUserInfoDB,
    createUserDB,
    addUserWalletDB,
    updateUserSettingsDB
};