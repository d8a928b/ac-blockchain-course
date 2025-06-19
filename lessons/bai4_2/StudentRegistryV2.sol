// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract StudentRegistryV2 {
    // Tạo struct Student gồm: name (string), age (uint), isRegistered (bool)
    struct Student {
        string name;
        uint256 age;
        bool isRegistered;
    }

    // Dùng mapping(address => Student) để lưu thông tin từng người theo địa chỉ ví
    mapping(address => Student) private students;

    // Chỉ owner (người deploy contract) được phép thêm sinh viên
    address public owner;

    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can register the student.");
        _;
    }

    // Khi thêm sinh viên thành công sẽ emit event
    event StudentRegistered(
        address indexed studentAddress,
        string name,
        uint256 age
    );

    function registerStudent(
        address studentAddress,
        string calldata name,
        uint256 age
    ) external onlyOwner {
        require(!students[studentAddress].isRegistered, "Already registered.");
        students[studentAddress] = Student(name, age, true);

        emit StudentRegistered(studentAddress, name, age);
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
