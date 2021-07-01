export const formatWalletAddress = (walletAddress) =>
  `${walletAddress.slice(0, 6)}...${walletAddress.slice(-4)}`;
