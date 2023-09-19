import { Transaction as EthTransaction } from 'web3-eth-accounts';
import {bytesToUint8Array} from "web3-utils";

interface TransactionData {
    to: string;
    amount: string;
    nonce: string;
    fee: number;
}

export class Transaction {
    private readonly to: string;
    private readonly value: string;
    private readonly nonce: string;
    private readonly gasPrice: number;

    constructor(data: TransactionData) {
        this.to = data.to;
        this.value = data.amount;
        this.nonce = data.nonce;
        this.gasPrice = data.fee;
    }

    async sign(privateKey: string): Promise<string> {
        const tx = EthTransaction.fromTxData({
            to: this.to,
            value: this.value,
            nonce: this.nonce,
            gasPrice: this.gasPrice,
        })
        const signedTx = tx.sign(bytesToUint8Array(privateKey));

        return signedTx.serialize().toString()
    }
}
