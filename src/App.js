import { ethers } from "ethers";
import Web3Modal from "web3modal";

const providerOptions = {};

function App() {
  const connectWallet = async () => {
    try {
      let web3Modal = new Web3Modal({
        cacheProvider: false,
        providerOptions,
      });
      const web3ModalInstance = await web3Modal.connect();
      const web3ModalProvider = new ethers.providers.Web3Provider(
        web3ModalInstance
      );
      console.log(web3ModalProvider);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <>
      <div>
        <h1>Click to connect</h1>
        <button onClick={connectWallet}>Connect</button>
      </div>
    </>
  );
}
export default App;
