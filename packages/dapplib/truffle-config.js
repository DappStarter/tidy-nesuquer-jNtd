require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'inner enroll bundle food town rifle still concert grace muscle army giant'; 
let testAccounts = [
"0x5b0ef0bf33aebd759bfa6c33ed93f067d884c0233b6f61cdcb8fa8ca9e96aac7",
"0x9572dad4fa6fc3c4c5e7d62cd0f68693089d38823d7d9968d4dbf81b655f563e",
"0xb3ed787e1cc2e73c06b9db6a4069e429f145511f8bc8154b5d0ebf1b0ff48055",
"0xc361b87341bd191447fa6e9d40cd34f23296bb4553cfa50e88c269647a58e5ff",
"0x5578722ebf8a3dd592428df77aebb722174e249570d7827b02d535546652aa73",
"0x8205f63caccf066c6d6fa79cd0b49f025ad7132991e1f522c1b48be2186f09d5",
"0xa16a0e9de577eb4bfc184caf8633c59fe41a1647d1e5bc409756638f3427d2e6",
"0x44585dcdfc435715887cebb8199b59f989a39e1e63ada3d6a02d3e6ae5475828",
"0x7b76a987f0596e32e68ff69361ebe9588630035150c5031bac617cf4f126e69c",
"0x3adbb8afacd02f42058f41b170916e5c18259f041c5707bf9165fbb84113d7f3"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

