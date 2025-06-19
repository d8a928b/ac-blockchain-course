// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistry {
    // Tạo struct Student gồm: name (string), age (uint), isRegistered (bool)
    struct Student {
        string name;
        uint256 age;
        bool isRegistered;
    }

    // Dùng mapping(address => Student) để lưu thông tin từng người theo địa chỉ ví
    mapping(address => Student) private students;

    // Hàm register(string name, uint age) cho phép caller đăng ký bản thân
    function register(string calldata name, uint256 age) external {
        require(!students[msg.sender].isRegistered, "Already registered.");
        students[msg.sender] = Student(name, age, true);
    }

    // Hàm getStudent(address user) trả về thông tin student
    function getStudent(address user)
        external
        view
        returns (
            string memory name,
            uint256 age,
            bool isRegistered
        )
    {
        Student memory s = students[user];
        return (s.name, s.age, s.isRegistered);
    }

    // Hàm isStudentRegistered(address user) trả về true/false nếu student đã đăng ký
    function isStudentRegistered(address user) external view returns (bool) {
        return students[user].isRegistered;
    }
}
