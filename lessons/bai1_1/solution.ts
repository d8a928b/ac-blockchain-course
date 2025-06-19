import crypto from "crypto";

export type Block = {
  index: number;
  timestamp: string;
  transactions: any[];
  previous_hash: string;
  current_hash: string;
};

// ✍️ TODO: Viết hàm tại đây
export function isValidBlock(block: Block): boolean {
  const { index, timestamp, transactions, previous_hash, current_hash } = block;
  const value =
    index + timestamp + JSON.stringify(transactions) + previous_hash;
  const calculatedHash = crypto
    .createHash("sha256")
    .update(value)
    .digest("hex");
  return calculatedHash === current_hash;
}
