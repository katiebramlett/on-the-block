// logic for validating request parameters, query, sending 
// response with correct code

const { getContractService } = require('../services/contract.service');


const getContract = async (req, res, next) => {

    try {
        // const userid = req.session.token
        const userid = 50;

        const contracts = await getContractService(userid)

        res.status(200).json(contracts)

    } catch (e) {
        console.log(e)

        res.sendStatus(500)
    }
}

module.exports = {
    getContract
}