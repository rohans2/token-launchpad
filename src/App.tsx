import {
  ConnectionProvider,
  WalletProvider,
} from "@solana/wallet-adapter-react";
import { TokenLaunchpad } from "./TokenLaunchpad";
import "@solana/wallet-adapter-react-ui/styles.css";
import {
  WalletDisconnectButton,
  WalletModalProvider,
  WalletMultiButton,
} from "@solana/wallet-adapter-react-ui";

function App() {
  return (
    <div
      style={{
        width: "100vw",
      }}
    >
      <ConnectionProvider endpoint="https://api.devnet.solana.com">
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                padding: 20,
              }}
            >
              <WalletMultiButton />
              <WalletDisconnectButton />
            </div>

            <TokenLaunchpad />
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  );
}

export default App;
