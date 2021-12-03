const Web3 = require("web3");
const ABICODE = require('../../identidad-digital-blockchain/contracts/abi/TestNFT.json');
const ADDRESS = "0x27883702D76c032959426500E469092eaE9d7f39";
const PROVIDER = "HTTP://127.0.0.1:7545";

const USER_ADDRESS = "0x27883702D76c032959426500E469092eaE9d7f39";
const USER_KEY = "fe79e7da8573c66cfc45b8b00b613e78c19f4b7ffe8fda4db05376fa445ecf32";

const web3 = new Web3(
    new Web3.providers.HttpProvider(PROVIDER)
);
const contract = new web3.eth.Contract(ABICODE,ADDRESS);

class API_TestNFT {

    createZorro = async(uri, score) => {
        console.log("<createZorro>");
        let result = false;
        let encodedABI = contract.methods.createZorro(uri, score).encodeABI();
        let signedTx = await web3.eth.accounts.signTransaction(
            {
              data: encodedABI,
              from: USER_ADDRESS,
              gas: 2000000,
              to: ADDRESS,
            },
            USER_KEY,
            false,
        );
        let response = await web3.eth.sendSignedTransaction(signedTx.rawTransaction).on('receipt', response =>{
            result = true;
        }).catch((err) => {
            console.error("ERR",err);
        });
        console.log("</createZorro>");
        return result;
    };

}

module.exports = API_TestNFT;