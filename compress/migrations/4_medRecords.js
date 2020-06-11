const MedRecords = artifacts.require("MedRecords");

module.exports = function(deployer) {
  deployer.deploy(MedRecords);
};
 