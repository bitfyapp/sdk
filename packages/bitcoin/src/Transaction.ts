import {SignedTransaction} from '@baas-sdk/common';
import * as bitcore from 'bitcore-lib';
import {Signable} from "@baas-sdk/common/lib/interfaces/Signable";
import {TransactionOptions} from "./TransactionOptions";
import {UnspentOutput} from "./index";

export class Transaction implements Signable {
    private sources: UnspentOutput[];
    private change: string;
    private target: string;
    private amount: number;
    private fee: number;
    private readonly environment: string;

    constructor(options?: TransactionOptions) {
        this.environment = options?.environment ?? 'production';
    }

    getEnvironment(): string {
        return this.environment;
    }

    getNetwork(): string {
        return "bitcoin";
    }

    setFee(fee: number): void {
        this.fee = fee;
    }

    setSources(utxos: bitcore.Transaction.UnspentOutput[]): void {
        this.sources = utxos;
    }

    setChange(address: string) {
        this.change = address;
    }

    setTarget(address: string): void {
        this.target = address;
    }

    setAmount(amount:number) {
        this.amount = amount;
    }

    async sign(key: string): Promise<SignedTransaction> {
        const transaction = new bitcore.Transaction();

        transaction.from(this.sources);
        transaction.to(this.target, this.amount);
        transaction.change(this.change);
        transaction.fee(this.fee);
        transaction.sign(key);

        return {
            network: this.getNetwork(),
            content: transaction.serialize(),
            environment: this.environment,
        }
    }
}
