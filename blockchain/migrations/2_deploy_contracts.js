const Check = artifacts.require("Check");
const Checker = artifacts.require("Checker");
const ICheck = artifacts.require("ICheck");

module.exports = function(deployer) {
  deployer.deploy(Check);
};
