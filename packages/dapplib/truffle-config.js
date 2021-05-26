require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid area frame foot cheap response prefer prosper hunt muscle army gaze'; 
let testAccounts = [
"0xe575428c61bc04e6b594a2c5d7d400f5af6e3d321b55ab31269b4ac05e45d9b0",
"0xd69813545be924693427ddd2bdb760d7dfab55ff22ec7cf7532801c90e07ddad",
"0x46c4e2c8849cd59d4745ad51bf99d21fd4d4ad63ba94aa5923ac6848d94610c0",
"0x95641da6d7dee11770c7112740bc835c6ae529efda4305156aa36e5ff5c13af6",
"0xf42737dd7f0baca40cb2ffdc64b0bc4edc3755dccda2e70af3705321c0d77a71",
"0xb42b31bbffe87048b2dec6e289b29207d68d5e1ba771ef3a36c41168fb2f1310",
"0x6a610f6c699bfa89ec17217451c701a63cbbfae39e996ecdde4fa5f4f7a2ff39",
"0x7e5d05ee291a685e5ee17651c46200aff201faae26d9163ed1273f5af9c9f1ab",
"0x776bdce9ae121bed05df9dd45fb43a45ea1604d7eded038dfd84974c407ae041",
"0x96d4a554b806c5851197d0a6bfb56379201104a9209be270115370dfa2bf0143"
]; 
let rpcUri = 'https://rpc-mumbai.matic.today';
let wsUri = 'wss://ws-mumbai.matic.today';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: rpcUri,
            wsUri: wsUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                rpcUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            gas: 2000000,
            network_id: 80001,
            confirmations: 1,
            timeoutBlocks: 100,
            skipDryRun: true
        }
    },
    compilers: {
        solc: {
            version: '^0.5.11'
        }
    }
};
