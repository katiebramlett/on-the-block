const e = require("express");
const { getContractDB, createContractDB }  = require("../db/contract.db");

const getContractService = async (userid) => {
    try {
        const contracts = await getContractDB(userid);

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
    createContractService
}