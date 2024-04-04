import { Configuration } from '@alephium/cli'
import { Number256 } from '@alephium/web3'
import dotenv from 'dotenv';

dotenv.config();

const defaultSettings = {};

const configuration: Configuration<unknown> = {
  networks: {
    devnet: {
      nodeUrl: 'http://localhost:22973',
      // here we could configure which address groups to deploy the contract
      privateKeys: ['a642942e67258589cd2b1822c631506632db5a12aabcf413604e785300d762a5'],
      confirmations: 1,
      settings: defaultSettings,
    },

    testnet: {
      nodeUrl: process.env.TESTNET_NODE_URL as string,
      privateKeys: process.env.PRIVATE_KEYS === undefined ? [] : process.env.PRIVATE_KEYS.split(','),
      confirmations: 1,
      settings: defaultSettings,
    },

    mainnet: {
      nodeUrl: process.env.NODE_URL as string,
      privateKeys: process.env.PRIVATE_KEYS === undefined ? [] : process.env.PRIVATE_KEYS.split(','),
      confirmations: 1,
      settings: defaultSettings,
    }
  }
}

export default configuration
