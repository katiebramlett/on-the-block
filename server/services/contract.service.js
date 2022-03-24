const e = require("express");
const { getContractDB, postContractDB }  = require("../db/contract.db");

const getContractService = async (userid) => {
    try {
        const contracts = await getContractDB(userid);

        return contracts

    } catch (e) {
        console.log(e)
    }
}

const postContractService = async(userid, landlordwallet, tenantwallet, monthlyfee, startdate, enddate) => {
    try {
        const result = postContractDB(userid, landlordwallet, tenantwallet, monthlyfee, startdate, enddate)

        return result

    } catch {
        console.log(e)
    }

}

module.exports = {
    getContractService,
    postContractService
}