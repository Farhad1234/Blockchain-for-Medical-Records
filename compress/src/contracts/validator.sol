pragma solidity >=0.4.21 <0.6.0;

contract Hospital{
    string public recordId;

    constructor() public {
        recordId = "ad9d8dlk54i9a30oo3o6jj87";
    }
    function getHospitalName(int number) public pure returns (string memory name){
        if(number==1){
            name = ("Hospital A");
            }
        else if(number == 2){
            name = ("Hospital B");
            }
        else {
            name = ("Does not exist");
            }
    }
}