pragma solidity >=0.4.21 <0.6.2;

contract Insurance {

    constructor() public {
        placeHolderTest = "11111111111111111111";
    }
    string public placeHolderTest;
    uint public clientCount = 0;
    string public imagetext;


    struct patient {
         uint pId;
        string name;
        string phone;
        address payable owner;
        uint numRecords;
        
        uint[] cost;
        address[] uploader;
        string[] procedure;
        uint[] hospId;
        string[] doctorName;
        bool[] treated;
        string[] image;
        
    }

    mapping(uint => patient) public clients;
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


    function createClient(string memory name1, string memory phone1, address payable patientAddress1 )
     public {
        clientCount ++;

        clients[clientCount] = patient(
            clientCount,
            name1,
            phone1,
            patientAddress1,
            0,
            new uint[](0),
            new address[](0),
            new string[](0),
            new uint[](0),
            new string[](0),
            new bool[](0),
            new string[](0)
            );

        emit PatientAdded(clientCount, name1, phone1, msg.sender, 0);
    }


    function createRecord(uint pId1, uint cost1, string memory procedure1, uint hospId1, string memory docName1, bool treated1, string memory image1)
     public {

        uint position = clients[pId1].numRecords;
        clients[pId1].numRecords++;

        clients[pId1].cost[position] = cost1; //, clients[pId1].owner,msg.sender,procedure1,hospId1,docName1,treated1,image1);
        clients[pId1].uploader[position] = msg.sender;
        clients[pId1].procedure[position] = procedure1;
        clients[pId1].hospId[position] = hospId1;
        clients[pId1].doctorName[position] = docName1;
        clients[pId1].treated[position] = treated1;
        clients[pId1].image[position] = image1;

        emit RecordAdded(pId1,cost1, clients[pId1].owner,msg.sender,procedure1,hospId1,docName1,treated1,image1);
    }

}
