import Web3 from "web3";
// This function detects most providers injected at window.ethereum
import detectEthereumProvider from "@metamask/detect-provider";
const FALLBACK_WEB3_PROVIDER =
    process.env.REACT_APP_NETWORK || "http://0.0.0.0:8545";

const getWeb3 = () =>
    new Promise((resolve, reject) => {
        // Wait for loading completion to avoid race conditions with web3 injection timing.
        window.addEventListener("load", async () => {
            // Modern dapp browsers...
            if (window.ethereum) {
                window.ethereum.on("chainChanged", (_chainId) =>
                    window.location.reload()
                );
                window.ethereum.on("accountsChanged", (accounts) => {
                    window.location.reload();
                    // "accounts" will always be an array, but it can be empty.
                });
                try {
                    await window.ethereum.send("eth_requestAccounts");
                    window.web3 = new Web3(window.ethereum);
                    // Acccounts now exposed
                    resolve(window.web3);
                } catch (error) {
                    reject(error);
                }
            }
            // Fallback to localhost; use dev console port by default...
            else {
                const provider = new Web3.providers.HttpProvider(
                    FALLBACK_WEB3_PROVIDER
                );
                const web3 = new Web3(provider);
                console.log(
                    "No web3 instance injected, using Infura/Local web3."
                );
                resolve(web3);
            }
        });
    });

export default getWeb3;
