const { getContractService, getPendingTenantService, getAwaitingLandlordService, getActiveContractsService, getDeniedContractsService, getTerminatedContractsService, createContractService, updateContractStatusService } = require('../services/contract.service');

const getContract = async (req, res, next) => {
    try {
        const contracts = await getContractService(req.params.userid)

        res.status(200).json(contracts)

    } catch (e) {
        console.log(e)

        res.sendStatus(500)
    }
}

const getPendingTenant = async (req, res, next) => {
    try {
        const contracts = await getPendingTenantService(req.params.userid)

        res.status(200).json(contracts)

    } catch (e) {
        console.log(e)

        res.sendStatus(500)
    }
}

const getAwaitingLandlord = async (req, res, next) => {
    try {
        const contracts = await getAwaitingLandlordService(req.params.userid)

        res.status(200).json(contracts)

    } catch (e) {
        console.log(e)

        res.sendStatus(500)
    }
}

const getActiveContracts = async (req, res, next) => {
    try {
        const contracts = await getActiveContractsService(req.params.userid)

        res.status(200).json(contracts)

    } catch (e) {
        console.log(e)

        res.sendStatus(500)
    }
}

const getDeniedContracts = async (req, res, next) => {
    try {
        const contracts = await getDeniedContractsService(req.params.userid)

        res.status(200).json(contracts)

    } catch (e) {
        console.log(e)

        res.sendStatus(500)
    }
}

const getTerminatedContracts = async (req, res, next) => {
    try {
        const contracts = await getTerminatedContractsService(req.params.userid)

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

const updateContractStatus = async (req, res, next) => {
    try {
        // token=userid
        const contract = await updateContractStatusService(req.body.contractid, req.body.status)
             
        res.status(200).json({'contractid': contract})

    } catch (e) {
        console.log(e)

        res.sendStatus(500)
    }
}

module.exports = {
    getContract,
    getPendingTenant,
    getAwaitingLandlord,
    getActiveContracts,
    getDeniedContracts,
    getTerminatedContracts,
    createContract,
    updateContractStatus
}