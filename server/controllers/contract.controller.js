const { getContractService, postContractService } = require('../services/contract.service');

const getContract = async (req, res, next) => {
    try {
        const contracts = await getContractService(req.body.userid)

        res.status(200).json(contracts)

    } catch (e) {
        console.log(e)

        res.sendStatus(500)
    }
}

const postContract = async (req, res, next) => {
    try {
        const contract = await postContractService(req.body.token, req.body.landlord_addr, req.body.tenant_addr, 
                                    req.body.monthlyfee, req.body.startdate, req.body.enddate)
                                    
        res.status(200).json({'contractid': contract})

    } catch (e) {
        console.log(e)

        res.sendStatus(500)
    }
}

module.exports = {
    getContract,
    postContract
}