import { Transaction as BitcoinTransaction } from '@baas-sdk/bitcoin';

const tx = txFactory({
    from: '',
    to: '',
    amount: 0.000010000,
    fee: 0.00010000,
    nonce: 'string',
});
tx.sign(privateKey);
client.broadcast(tx);
