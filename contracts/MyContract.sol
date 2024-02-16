// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.24;

contract MyContract {
    string public s_msg;

    constructor(string memory _msg) {
        s_msg = _msg;
    }

    function setMsg(string memory _msg) external {
        s_msg = _msg;
    }

    function getMsg() external view returns (string memory){
        return s_msg;
    }
}
