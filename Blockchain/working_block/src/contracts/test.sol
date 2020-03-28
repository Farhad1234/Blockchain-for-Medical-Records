pragma solidity >=0.4.21 <0.6.0;
// from web3 import Web3, HTTPProvider,TestRPCProvider;
// import ether;
// import wei;


contract test {
    string public message;
    string public add;
    string[] hex_storage;
    address patient;
    int256 len;

    // pure???

     constructor() public {
        add = "0x8b3048177e619F33F6516d49b51ED477904cf3b1";
    }




    event printHex(string x);


    // contract SimpleStorage {
  string ipfsHash;

  function set(string memory x) public {
    ipfsHash = x;
  }

  function get() public view returns (string memory) {
    return ipfsHash;
  }




    // function input1(string memory initialMessage) public payable {

    //         // let gas = parseInt(4000000).toString(16);
    //         // let gasPrice = parseInt(4000000000).toString(16);
    //         // let transactionObject = {
    //         //          gas: gas,
    //         //          gasPrice: gasPrice,
    //         //          data: deploy,
    //         //          from: req.body.sender_address
    //         //                                     };



    //     // web3.eth.sendTransaction({ from : dummy_account_1,
    //     //  nonce: "2", to: add, value: web3.toWei(1, 'ether'), data : "12345678", gas: 3000000, gasPrice: web3.toWei('50', 'gwei') });
    //     // patient = msg.sender;
    //     // message = initialMessage;
    // }

    // // modifier ispatient {
    //     require(msg.sender == patient);
    //     }

    // function setMessage(string memory newMessage) public
    // {
    //     message = newMessage;
    // }
    // function getMessage() public view returns (string memory)
    //     {
    //         return message;
    //     }

    // function storeMember(string memory hex_data) public
    // {
    //     hex_storage.push(hex_data);
    // }

    // function getStringLength() public returns (int64)
    // {
    //     return int64(hex_storage.length);
    // }

    // function showMember() public pure      //idhar pure kyu lagega?
    // {
    //     len = getStringLength();
    //     for ( uint i = 0 ; i<int(len); i++)
    //     {
    //         // printHex(hex_storage[i]);
    //     }
    // }

    // function cleanOutBalance() ispatient public
    // {
    //     uint bal = address(this).balance;
    //     address(patient).transfer(bal);
    // }

    // function displayBalance() public view returns (uint)
    // {
    //     uint bal = address(this).balance;
    //     return bal;
    // }


}