import { SignedTransaction } from '@baas-sdk/common';

export class Transaction {
    private from: string;
    private to: string;
    private amount: number;
    private fee: number;

    setAmount(amount: number): void {
        this.amount = amount;
    }

    setFee(fee: number): void {
        this.fee = fee;
    }

    sign(key: string, key2?: string): Promise<SignedTransaction> {
        return Promise.resolve(undefined);
    }

    setSource(address: string): void {
        this.source = address;
    }

    setTarget(address: string): void {
        this.target = address;
    }

}
