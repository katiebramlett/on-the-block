const { getContractDB }  = require("../db/contract.db");

const getContractService = async (userid) => {

    try {

        const contracts = await getContractDB(userid);

        console.log(contracts)

        return contracts

    } catch (e) {
        console.log(e)
    }

}

module.exports = {
    getContractService
}