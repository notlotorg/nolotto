export interface IWallet {
  name: string;
  appName: string;
  imageUrl: string;
  aboutUrl: string;
  platforms: WalletOsTypes[];
  bridgeUrl: string;
  universalLink: string;
}
export type WalletOsTypes = "ios" | "android" | "macos" | "windows" | "linux";
