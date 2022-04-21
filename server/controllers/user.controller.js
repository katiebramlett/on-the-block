const { verifyLogin, getWallet, createUser, addUserWallet, getUserInfo, updateUserSettings, updateWallet } = require('../services/user.service');

/* GET requests */
const login = async (req, res, next) => {

    try {
        const token = await verifyLogin(req.body.username, req.body.password)

        res.status(200).json({token: token})

    } catch(e) {
        console.log(e.message)
        res.sendStatus(401)
    }
}

/* get all wallets connected a user account */
const getUserWallet = async (req, res, next) => {
    try {
        const wallets = await getWallet(req.params.userid)

        res.json({"wallets" : wallets})

        next()
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
};

/* update user's wallet */
const postUpdateWallet = async (req, res, next) => {
    try {
        const wallet = await updateWallet(req.params.userid, req.body.walletaddr)

        res.sendStatus(200)

        next()
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
};


// ADDED BY CLAIRE - get all setting info for a user
const getUserSettingsInfo = async (req, res, next) => {
    try {
        const settings = await getUserInfo(req.params.userid)

        res.status(200).json({"settings" : settings})

        next()
    } catch(e) {
        console.log(e.message)
        res.sendStatus(500)
    }
};

/* POST requests */

/* create a new user to insert into the database */
const postUser = async (req, res, next) => {
    body = req.body;

    try {
        // maybe lets return the id of the user created  
        const token = await createUser(body.firstname, body.lastname, body.username, body.password);

        res.status(200).json({token: token});   
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) & next(error);
    }
};

/* add a wallet connected to a specific user account */
const postWallet = async (req, res, next) => {
    try {
        // don't need to return anything 
        await addUserWallet(req.params.userid);
        res.sendStatus(201);
        
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) & next(error);
    }
};

// ADDED BY CLAIRE - update a users settings 
const postUserSettings = async (req, res, next) => {
    try { 
        await updateUserSettings(req.params.userid, req.body.fname, req.body.lname, req.body.uname, req.body.pword);
        res.sendStatus(201);
        
    } catch(e) {
        console.log(e.message);
        res.sendStatus(500) & next(error);
    }
};

/* export functions used */
module.exports = {
    login,
    getUserWallet,
    getUserSettingsInfo,
    postUser,
    postWallet,
    postUserSettings,
    postUpdateWallet
}