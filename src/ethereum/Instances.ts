// import { CustomProvider } from "eraswap-sdk/dist";
import { ethers } from "ethers";
// import { CouponDappCouponDappFactory } from "./CouponDappCouponDappFactory";
import { EsCloudFactory } from "./EsCloudFactory";
import { HostFactory } from "./HostFactory";

// const nodeUrl = process.env.REACT_APP_NODE_URL || 'https://node2.testnet.eraswap.network/';

window.provider = new ethers.providers.JsonRpcProvider(
  "https://rpc-mumbai.mainnet.eraswap.network"
);
window.providerESN = new ethers.providers.JsonRpcProvider(
  "https://rpc-mumbai.mainnet.eraswap.network"
);
// window.provider = new CustomProvider("mainnet");
// window.providerESN = new CustomProvider("mainnet");

window.ESCloudInstance = EsCloudFactory.connect(
  "0xD28d35d1A5A3cC69cDb4C9d2e462dBB5E6d9A0b0", //0x7314d48fCf1534d586dFbb1a4b67CA12663B6f12
  window.providerESN
);

window.HostInstance = HostFactory.connect(
  "0x304067DbBc83d1BF9676cd477E0D1de8570b51EF",
  window.providerESN
);

// export const BetInst = BetFactory.connect(addresses.Bet, providerESN);

// export const providerESN = new ethers.providers.JsonRpcProvider(nodeUrl);

console.log("custom provider", window.providerESN);
