const { verifyLogin, getWallet, createUser, addUserWallet } = require('../services/user.service');

// apparently next calls the next function in the middleware call stack 

/* Status codes in use 
 * 200 - OK 
 * 201 - CREATED RESOURCE
 * 400 - BAD REQUEST 
 * 401 - UNAUTHORIZED
 * 404 - NOT FOUND 
 * 500 - INTERNAL SERVER ERROR
 * 
 * Useful articles: 
 * https://stackoverflow.com/questions/58339810/node-js-service-layer-design
 * https://softwareontheroad.com/error-handling-nodejs/
 * 
 * 
 * Might want to define an error codes structure for ease of use and import this here 
 * 
 * */ 

/* GET requests */
const login = async (req, res, next) => {
    //  
    // can use promises for error catching as well 
    // these are errors that should be given to the user through http requests
    // can deal with server errors elsewhere
    // otherwise can just check return types instead of throwing errors (which can be costly)
    // want to have some wallets here 
    try {
        const token = await verifyLogin(req.body.username, req.body.password)

        res.status(200).json({token: token})

    } catch(e) {
        console.log(e.message)
        res.sendStatus(401)
    }
    // invalid login credentials 
    // will eventually replace this with a call to Firebase instead of the DB calls 
    // ahhh 

    // res.json({
    //     token: 'test123'
    // })
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
        await addUserWallet(req.params.userid, req.params.walletaddr);
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
    postUser,
    postWallet
}