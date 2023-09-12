import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import "hardhat-deploy";
import dotenv from "dotenv";

dotenv.config()

const solidity = {
  compilers: [
    {
      version: '0.8.9',
      settings: {
        optimizer: {
          enabled: true,
          runs: 200,
        },
      },
    },
  ],
  overrides: {},
}

const config: HardhatUserConfig = {
  solidity: solidity,
  defaultNetwork: "nitro806",
  networks: {
    hardhat: {
      chainId: 1338,
      throwOnTransactionFailures: true,
      allowUnlimitedContractSize: true,
      // accounts:
      //   [
      //     {
      //       privateKey: process.env.DEVNET_PRIVKEY,
      //       balance: '1000000000000000000000000000',
      //     },
      //   ]
      // ,
      // blockGasLimit: 200000000,
      // mining: {
      //   auto: false,
      //   interval: 1000,
      // },
      // forking: {
      //   url: 'https://mainnet.infura.io/v3/' + process.env['INFURA_KEY'],
      //   enabled: process.env['SHOULD_FORK'] === '1',
      // },
    },
    goerli: {
      url: 'https://goerli.infura.io/v3/309820d3955640ec9cda472d998479ef',
      accounts: process.env.DEVNET_PRIVKEY
        ? [process.env.DEVNET_PRIVKEY]
        : [],
    },

    arbGoerliRollup: {
      url: process.env.L2_RPC_URL || 'https://goerli-rollup.arbitrum.io/rpc',
      accounts: process.env.DEVNET_PRIVKEY
        ? [process.env.DEVNET_PRIVKEY]
        : [],
    },
    L2: {
      url: process.env.L2_RPC_URL || 'https://goerli-rollup.arbitrum.io/rpc',
      accounts: process.env.DEVNET_PRIVKEY
        ? [process.env.DEVNET_PRIVKEY]
        : [],
    },
    arb1: {
      url: 'https://arb1.arbitrum.io/rpc',
      accounts: process.env['MAINNET_PRIVKEY']
        ? [process.env['MAINNET_PRIVKEY']]
        : [],
    },
    nova: {
      url: 'https://nova.arbitrum.io/rpc',
      accounts: process.env['MAINNET_PRIVKEY']
        ? [process.env['MAINNET_PRIVKEY']]
        : [],
    },
    geth: {
      url: 'http://localhost:8545',
    },
    local: {
      url: 'http://localhost:8449',
      chainId: 808,
      accounts: process.env.DEVNET_PRIVKEY
        ? [process.env.DEVNET_PRIVKEY]
        : [],
    },
    nitro806: {
      url: 'https://rpc806.nativ3.network',
      chainId: 806,
      accounts: process.env.DEVNET_PRIVKEY
        ? [process.env.DEVNET_PRIVKEY]
        : [],
    },
    nitro333333: {
      url: 'https://rpctest.nativ3.network',
      chainId: 333333,
      accounts: process.env.DEVNET_PRIVKEY
        ? [process.env.DEVNET_PRIVKEY]
        : [],
    },

  },
  etherscan: {
    apiKey: {
      goerli: process.env.ETHERSCAN_API_KEY,
      arbitrumOne: process.env.ARBISCAN_API_KEY,
      arbitrumTestnet: process.env.ARBISCAN_API_KEY,
      arbGoerliRollup: process.env.ARBISCAN_API_KEY,
      L2: process.env.ARBISCAN_API_KEY,
    },
    customChains: [
      {
        network: 'nova',
        chainId: 42170,
        urls: {
          apiURL: 'https://api-nova.arbiscan.io/api',
          browserURL: 'https://nova.arbiscan.io/',
        },
      },
      {
        network: 'arbGoerliRollup',
        chainId: 421613,
        urls: {
          apiURL: 'https://api-goerli.arbiscan.io/api',
          browserURL: 'https://goerli.arbiscan.io/',
        },
      },
      {
        network: 'nitro805',
        chainId: 805,
        urls: {
          apiURL: 'https://api.nativ3.network/api',
          browserURL: 'https://scan805.nativ3.network/',
        },
      },
    ],
  },
  namedAccounts: {
    deployer: {
      default: 0,
    },
    escrowHolder: {
      default: 1,
      1: "0x3Ca87464b0705361FC117B92BF53bF7BD6ce75c2",
      421613: "0x3Ca87464b0705361FC117B92BF53bF7BD6ce75c2"
    }
  },
  verify: {
    etherscan: {
      apiKey: process.env.ARBISCAN_API_KEY
    }
  }
};

export default config;
