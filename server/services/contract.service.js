const e = require("express");
const { getContractDB, getPendingTenantDB, getAwaitingLandlordDB, getActiveContractsDB, getDeniedContractsDB, getTerminatedContractsDB, createContractDB, updateContractStatustDB }  = require("../db/contract.db");

const getContractService = async (userid) => {
    try {
        const contracts = await getContractDB(userid);

        return contracts

    } catch (e) {
        console.log(e)
    }
}

const getPendingTenantService = async (userid) => {
    try {
        const contracts = await getPendingTenantDB(userid);

        return contracts

    } catch (e) {
        console.log(e)
    }
}

const getAwaitingLandlordService = async (userid) => {
    try {
        const contracts = await getAwaitingLandlordDB(userid);

        return contracts

    } catch (e) {
        console.log(e)
    }
}

const getActiveContractsService = async (userid) => {
    try {
        const contracts = await getActiveContractsDB(userid);

        return contracts

    } catch (e) {
        console.log(e)
    }
}

const getDeniedContractsService = async (userid) => {
    try {
        const contracts = await getDeniedContractsDB(userid);

        return contracts

    } catch (e) {
        console.log(e)
    }
}

const getTerminatedContractsService = async (userid) => {
    try {
        const contracts = await getTerminatedContractsDB(userid);

        return contracts

    } catch (e) {
        console.log(e)
    }
}

const createContractService = async(userid, landlordwallet, tenantwallet, monthlyfee, startdate, enddate) => {
    try {
        const result = createContractDB(userid, landlordwallet, tenantwallet, monthlyfee, startdate, enddate)

        return result

    } catch {
        console.log(e)
    }

}

const updateContractStatusService = async(contractid, status) => {
    try {
        const result = updateContractStatustDB(contractid, status)

        return result

    } catch {
        console.log(e)
    }
}

module.exports = {
    getContractService,
    getPendingTenantService,
    getAwaitingLandlordService,
    getActiveContractsService,
    getDeniedContractsService,
    getTerminatedContractsService,
    createContractService,
    updateContractStatusService
}