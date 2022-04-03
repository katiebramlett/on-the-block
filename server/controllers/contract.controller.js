const { getContractService, createContractService } = require('../services/contract.service');

const getContract = async (req, res, next) => {
    try {
        const contracts = await getContractService(req.params.userid)

        res.status(200).json(contracts)

    } catch (e) {
        console.log(e)

        res.sendStatus(500)
    }
}

const createContract = async (req, res, next) => {
    try {
        // token=userid
        const contract = await createContractService(req.body.token, req.body.landlord_addr, req.body.tenant_addr, 
                                    req.body.monthlyfee, req.body.startdate, req.body.enddate)
                                    
        res.status(200).json({'contractid': contract})

    } catch (e) {
        console.log(e)

        res.sendStatus(500)
    }
}

module.exports = {
    getContract,
    createContract
}