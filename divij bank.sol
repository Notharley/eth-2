// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract DivijShuklaBankToken {
    string public name = "DivijShuklaBankToken";
    string public symbol = "DSBT";
    uint8 public decimals = 18;
    uint256 private _totalSupply = 5000000 * (10 ** uint256(decimals)); // Updated total supply

    mapping(address => uint256) private _balances;

    event Transfer(address indexed from, address indexed to, uint256 value);

    constructor() {
        _balances[msg.sender] = _totalSupply;
    }

    function totalSupply() public view returns (uint256) {
        return _totalSupply;
    }

    function balanceOf(address account) public view returns (uint256) {
        return _balances[account];
    }

    function transfer(address to, uint256 amount) public returns (bool) {
        require(to != address(0), "Transfer to the zero address");
        require(_balances[msg.sender] >= amount, "Insufficient balance");

        _balances[msg.sender] -= amount;
        _balances[to] += amount;

        emit Transfer(msg.sender, to, amount);
        return true;
    }
}
