# Bài 3.3: Deploy & debug contract đầu tiên trên testnet

## **🎯 Mục tiêu bài học**

- Biết cách deploy contract lên testnet
  thật như Sepolia.
- Kết nối MetaMask với Remix để dùng
  Injected Web3.
- Kiểm tra transaction thật: gas,
  status, hash, logs.
- Gỡ lỗi (debug) contract khi bị lỗi
  logic hoặc thiếu gas.

## **📘 Nội dung chính**

### **1. Kết nối Remix với MetaMask**

- Cài đặt MetaMask và thêm ví.
- Chuyển sang testnet như
  Sepolia.
- Vào Remix → Deploy & Run Transactions
  → chọn 'Injected Provider - MetaMask'
- MetaMask sẽ hiện popup xác
  nhận.

### **2. Nhận test ETH để chạy contract**

- Dùng faucet testnet:
  <a href="https://cloud.google.com/application/web3/faucet"
  target="_blank"
  rel="noopener noreferrer">https://cloud.google.com/application/web3/faucet</a>
- Nhập địa chỉ ví để nhận 0.05 test
  ETH.

### **3. Deploy contract thật**

- Viết một contract đơn giản (Hello hoặc
  VotingEligibility).
- Compile như bình thường.
- Bấm 'Deploy', xác nhận giao dịch trên
  MetaMask.
- Quan sát địa chỉ contract đã tạo, hash
  transaction.

### **4. Kiểm tra và debug**

1. Mở
    <a href="https://sepolia.etherscan.io" target="_blank"
    rel="noopener noreferrer">https://sepolia.etherscan.io</a>
2. Tìm theo địa chỉ ví hoặc tx
    hash.
3. Kiểm tra: gas, logs, errors nếu
    có.
4. Nếu contract lỗi:

- Check lại require()
- Kiểm tra parameter truyền sai
- Gọi sai visibility (vd: gọi hàm
  private từ ngoài)

