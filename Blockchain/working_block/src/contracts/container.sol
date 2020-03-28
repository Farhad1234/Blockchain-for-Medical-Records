pragma solidity >=0.4.21 <0.6.2;

contract container {

    constructor() public {
        placeHolderTest = "11111111111111111111";
    }
    string public placeHolderTest;
    uint public patientCount = 0;

    struct patient {
        uint pId;
        string name;
        uint cost;
        address payable owner;
        string procedure;
        uint hospId;
        string doctorName;
        bool treated;
    }


    mapping(uint => patient) public patients;

    event PatientAdded(
        uint pId,
        string name,
        uint cost,
        address payable owner,
        string procedure,
        uint hospId,
        string doctorName,
        bool treated
    );

    function createPatient(string memory name1, uint cost1, string memory procedure1, uint hId1, string memory docName1, bool treat1 ) public {
        require(bytes(name1).length > 0);
        require(cost1 > 0);
        patientCount ++;
        patients[patientCount] = patient(patientCount, name1, cost1, msg.sender, procedure1, hId1, docName1, treat1);
 
        emit PatientAdded(patientCount, name1, cost1, msg.sender, procedure1, hId1, docName1,treat1);
    }


}
