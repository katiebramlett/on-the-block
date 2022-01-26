var RentalContract = artifacts.require("./RentalContract.sol");

module.exports = function(deployer) {
  deployer.deploy(RentalContract);
};
