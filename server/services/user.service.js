// business layer abstraction between DB and client calls

const { createPoolCluster } = require("mysql2");
const { loginDB, createUserDB, addUserWalletDB, getWalletDB, getUserInfoDB, updateUserSettingsDB }  = require("../db/user.db");

const verifyLogin = async(username, password) => {
    try {
        const auth = await loginDB(username)

        if (password != auth[0].password) {
            throw new Error('Invalid login credentials')
        }

        /* otherwise we would return the auth token */
        return auth[0].userID
    } catch(e) {

        // instead of throwing e we can do next(e)
        throw new Error(e.message)
    }
};

const getWallet = async(userID) => {
    try {
        return await getWalletDB(userID)
    } catch(e) {
        throw new Error(e.message)
    }
};

const createUser = async(firstname, lastname, username, password) => {
    try {
        const result = await createUserDB(firstname, lastname, username, password);
        return result[0].userID
    } catch(e) {
        throw new Error(e.message);
    }
};

const addUserWallet = async(userid, walletaddr) => {
    try {
        return await addUserWalletDB(userid, walletaddr);
    } catch(e) {
        throw new Error(e.message);
    }
};

// ADDED BY CLAIRE
const getUserInfo = async(userid) => {
    try {
        return await getUserInfoDB(userid);
    } catch(e) {
        throw new Error(e.message);
    }
};

const updateUserSettings = async(userid, fname, lname, uname, pword) => {
    try {
        return await updateUserSettingsDB(userid, fname, lname, uname, pword);
    } catch(e) {
        throw new Error(e.message);
    }
};

module.exports = {
    verifyLogin,
    getWallet,
    createUser,
    addUserWallet,
    getUserInfo,
    updateUserSettings
};