import { ethers } from "ethers";
import { CustomProvider } from "eraswap-sdk";
import { EsCloud } from "./ethereum/EsCloud";
import { Host } from "./ethereum/Host";

declare global {
  interface Window {
    provider: CustomProvider | ethers.providers.JsonRpcProvider;
    ethereum: ethers.providers.ExternalProvider;
    ESCloudInstance: EsCloud;
    HostInstance: Host;
    providerESN: CustomProvider | ethers.providers.JsonRpcProvider;
    wallet: any;
  }
}
