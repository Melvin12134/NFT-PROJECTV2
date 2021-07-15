import Web3 from "web3";
import { useWallet, UseWalletProvider } from 'web3';


const Walletconnect = () => {

const wallet = useWallet()

const connectWallet = async (e) => {
    e.preventDefault()
    await wallet.connect()
}
    return ( 

<div>
    <button onClick={connectWallet}>
        Connect Wallet
    </button>
</div>

    )
}

export const test = () => {
    
    return (
    <UseWalletProvider
      chainId={1337}
      connectors={{
        // This is how connectors get configured
        portis: { provider: window.cleanEthereum },
      }}
    >
      <Walletconnect />
    </UseWalletProvider>
  )}