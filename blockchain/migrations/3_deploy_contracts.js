const Check = artifacts.require("Check");
const Checker = artifacts.require("Checker");

module.exports = function(deployer) {
  deployer.deploy(Checker,Check.address);
};
