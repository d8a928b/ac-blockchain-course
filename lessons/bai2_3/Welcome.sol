// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Welcome {
    // Biến greeting dạng string, khai báo public
    string public greeting;

    // Constructor truyền vào giá trị khởi tạo cho greeting
    constructor(string memory _greeting) {
        greeting = _greeting;
    }

    // Hàm getGreeting() trả về greeting
    // Sửa hàm để trả thêm địa chỉ người deploy (msg.sender)
    function getGreeting() public view returns (string memory, address) {
        return (greeting, msg.sender);
    }
}
