# LightNet Desktop Wallet

## Installation

**None of these package are signed yet.** Make sure you only download 
LightNet Wallet from this GitHub, and **NOWHERE ELSE**.

#### [CLICK HERE AND GRAB THE LATEST RELEASE](https://github.com/LIGHTNET-SYSTEMS/DPOS-Wallet/releases)

### Running in development mode

This runs best with `node v10.15.3` and `electron v5.0.1`

- clone the repo
- run `yarn install` to install the dependencies. **Important: You can only use yarn to install right now as there's two versions of eosjs being pulled in and only yarn supports aliasing**.
- run `npm start` to start the local server with hot-reloading
- run `electron .` or `./node_modules/.bin/electron .` from the directory to start electron.


### Building

- `npm run build`
- `npm run release-mac` or `npm run release-win` or `npm run release-linux` ( you must build from the target machine )

### Manually changing/adding default network
1. Go to /src/models/Settings.js                      
1. Change/add new network to ```networks``` array.        
```let network = new Network('LightNet', 'http', '88.99.248.77', 8000, Blockchains.EOSIO, LTNChainId);```                  
```network.token = new Token(Blockchains.EOSIO, 'eosio.token', 'LTN', 'LTN', 4, LTNChainId);```                     
```this.networks.push(network);```                          
 1. Be careful, you should also provide new ```ChainID``` as well.                             
```const LTNChainId = 'ea666b3d188bdbc8a448d34bca381c8d78abfd1c5e50afbb14d87531f0a443d0';```                       


