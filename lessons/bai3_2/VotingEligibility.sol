// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract VotingEligibility {
    // Biến minAge kiểu uint, giá trị khởi tạo = 18
    uint256 public minAge = 18;

    // Hàm checkEligibility(uint age) trả về true/false
    // Nếu age >= minAge → trả về true
    // Ngược lại → trả về false
    function checkEligibility(uint256 age) public view returns (bool) {
        return age >= minAge;
    }

    // Hàm updateMinAge(uint newMinAge)
    // Chỉ cho phép người deploy gọi được (sử dụng require với msg.sender)
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can update minAge.");
        _;
    }

    // Cập nhật lại minAge
    function updateMinAge(uint256 newMinAge) public onlyOwner {
        minAge = newMinAge;
    }
}
