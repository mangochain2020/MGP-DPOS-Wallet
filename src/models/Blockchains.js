
export const Blockchains = {
    EOSIO:'eos',
};

export const BlockchainsArray =
    Object.keys(Blockchains).map(key => ({key, value:Blockchains[key]}));

export const blockchainName = x => {
    switch(x){
        case Blockchains.EOSIO: return 'EOSIO';
        default: return 'Other';
    }
}