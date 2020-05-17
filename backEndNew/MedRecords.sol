pragma solidity >=0.4.21 <0.6.2;

contract MedRecords {

    constructor() public {
        placeHolderTest = "11111111111111111111";
    }
    string public placeHolderTest;
    uint public patientCount = 0;
    string public imagetext;

    struct patient {
        uint pId;
        string name;
        string phone;
        address payable owner;
        record[] medicalRec;
        uint numRecords;
    }

    struct record{
        uint cost;
        address payable owner;
        address payable uploader;
        string procedure;
        uint hospId;
        string doctorName;
        bool treated;
        string image;
    }

    mapping(uint => patient) public patients;
    // mapping( => record) public records;

    event PatientAdded(
        uint pId,
        string name,
        string phone,
        address payable owner,
        uint numRecords
    );

    event RecordAdded(
        uint pId,
        uint cost,
        address payable owner,
        address payable uploader,
        string procedure,
        uint hospId,
        string doctorName,
        bool treated,
        string image
    );


    function createPatient(string memory name1, string memory phone1, address payable patientAddress1 )
     public {

        patientCount ++;
        patients[patientCount] = patient(patientCount, name1, phone1, patientAddress1,new record[](0),0);

        emit PatientAdded(patientCount, name1, phone1, msg.sender, 0);
    }


    function createRecord(uint pId1, uint cost1, string memory procedure1, uint hospId1, string memory docName1, bool treated1, string memory image1)
     public {

        uint position = patients[pId1].numRecords;
        patients[pId1].numRecords++;

        patients[pId1].medicalRec[position] = record(cost1, patients[pId1].owner,msg.sender,procedure1,hospId1,docName1,treated1,image1);

        emit RecordAdded(pId1,cost1, patients[pId1].owner,msg.sender,procedure1,hospId1,docName1,treated1,image1);
    }

}
