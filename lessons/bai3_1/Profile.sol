// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Profile {
    // Biến name (kiểu string) khai báo public
    string public name;

    // Biến age (kiểu uint) khai báo public
    uint256 public age;

    // Hàm setProfile(string _name, uint _age) cập nhật name và age
    function setProfile(string memory _name, uint256 _age) public {
        name = _name;
        age = _age;
    }
}
