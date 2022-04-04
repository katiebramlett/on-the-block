const e = require("express");
const { getContractDB, getPendingTenantDB, getAwaitingLandlordDB, createContractDB }  = require("../db/contract.db");

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

const createContractService = async(userid, landlordwallet, tenantwallet, monthlyfee, startdate, enddate) => {
    try {
        const result = createContractDB(userid, landlordwallet, tenantwallet, monthlyfee, startdate, enddate)

        return result

    } catch {
        console.log(e)
    }

}

module.exports = {
    getContractService,
    getPendingTenantService,
    getAwaitingLandlordService,
    createContractService
}