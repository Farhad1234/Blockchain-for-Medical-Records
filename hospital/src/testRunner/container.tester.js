const Marketplace = artifacts.require('./container.sol')



contract('container', ([base, patient, hospital, insurance, other]) => {

    let contr;
    console.log("STarting")

    before(async () => { contr = await container.deployed() })


    describe('deployment', async () => {

    const address = await contr.address

    console.log("Current user address is ", address)

    const phd = await contr.placeHolderTest()

    console.log("test constructor: ", phd)

    result = await contr.createPatient("sampPatient", 1234567, "Sample Procedure", 666, "Dr. ABC", "sample procedure") //, { from: seller })

    result = await contr.createPatient("sampPatient111", 6666666, "Sample Procedure1111", 55555, "Dr. XYZ1111", "sample procedure11111")


    pCount = await contr.patientCount

    const event = result.logs[0].args

    console.log(event)

    })


})