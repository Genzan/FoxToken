//************************************************* */
// Autor Alan Enrique Escudero Caporal
// Fecha 30/Nov/2020
// Version: 1.0.0
//************************************************* */
pragma solidity ^0.5.0;
//import '@openzeppelin/contracts/token/ERC721/ERC721.sol';
//import "@openzeppelin/contracts/drafts/Counters.sol";

import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.5.0/contracts/token/ERC721/ERC721.sol";
import "https://github.com/OpenZeppelin/openzeppelin-contracts/blob/v2.5.0/contracts/drafts/Counters.sol";

contract TestNFT is ERC721 {
    using Counters for Counters.Counter;
    Counters.Counter private _tokenIds;
    mapping (uint256 => Zorro) TokenList;
// La Whitelist sera general o por token?
    mapping (address => bool) internal Whitelist;

    //Structs used
    struct Zorro {
        string URI;
        uint16 score;
    }

    //Events
    event ZorroCreated(uint256 _tokenId);
    event ScoreUpdated(uint256 _tokenId, uint16 _score);
    event URIUpdated(uint256 _tokenId, string _URI);
    event TransferToken(uint256 _tokenId, address _from, address _to);

    constructor(address _contractOwner) ERC721() public {
        Whitelist[_contractOwner] = true;
    }

    function createZorro(string memory _URI, uint16 _score) public returns (uint256 _newItemId) {
        _tokenIds.increment();
        uint256 newItemId = _tokenIds.current();
        TokenList[newItemId].URI = _URI;
        TokenList[newItemId].score = _score;
        _mint(msg.sender, newItemId);
        emit ZorroCreated(newItemId);
        return newItemId;
    }

    function getScore(uint256 _tokenId) public view returns (uint16 _score) {
        require(_exists(_tokenId), "ERR: Token no existe");
        return (TokenList[_tokenId].score);
    }

    function getURI(uint256 _tokenId) public view returns (string memory _URI) {
        require(_exists(_tokenId), "ERR: Token no existe");
        require(Whitelist[msg.sender], "ERR: Usuario no valido para esta accion");
        return (TokenList[_tokenId].URI);
    }

    function updateScore(uint256 _tokenId, uint16 _score) public {
        require(_exists(_tokenId), "ERR: Token no existe");
        require(ownerOf(_tokenId) == msg.sender, "ERR: Esta funcion esta reservada al dueño del token unicamente");
        TokenList[_tokenId].score = _score;
        emit ScoreUpdated(_tokenId, _score);
    }

    function updateURI(uint256 _tokenId, string memory _URI) public {
        require(_exists(_tokenId), "ERR: Token no existe");
        require(ownerOf(_tokenId) == msg.sender, "ERR: Esta funcion esta reservada al dueño del token unicamente");
        TokenList[_tokenId].URI = _URI;
        emit URIUpdated(_tokenId, _URI);
    }

    function transferFrom(address _from, address _to, uint256 _tokenId) public {
        require(_exists(_tokenId), "ERR: Token no existe");
        super.transferFrom(_from, _to, _tokenId);
        emit TransferToken(_tokenId, _from, _to);
    }

}