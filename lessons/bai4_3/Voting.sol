// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;

contract Voting {
    // Admin (owner) tạo danh sách ứng viên
    address public owner;

    // Struct Candidate gồm name (string), voteCount (uint)
    struct Candidate {
        string name;
        uint256 voteCount;
    }

    // Mapping candidates(uint => Candidate)
    mapping(uint256 => Candidate) public candidates;

    // Mapping hasVoted(address => bool)
    mapping(address => bool) public hasVoted;

    // Modifier onlyOwner để kiểm soát việc tạo ứng viên
    constructor() {
        owner = msg.sender;
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Only owner can add the candidate.");
        _;
    }

    // Event Voted(address voter, uint candidateId)
    event Voted(address indexed voter, uint256 indexed candidateId);

    // Function to add a new candidate (onlyOwner)
    uint256 public candidatesCount;

    function addCandidate(string memory _name) public onlyOwner {
        candidates[candidatesCount] = Candidate(_name, 0);
        candidatesCount++;
    }

    // Function to vote for a candidate
    function vote(uint256 _candidateId) public {
        // Người dùng chỉ được vote 1 lần cho 1 ứng viên
        require(!hasVoted[msg.sender], "You have already voted.");
        require(_candidateId < candidatesCount, "Invalid candidate ID.");

        candidates[_candidateId].voteCount++;
        hasVoted[msg.sender] = true;

        // Ghi log mỗi lần vote thành công bằng event
        emit Voted(msg.sender, _candidateId);
    }
}
