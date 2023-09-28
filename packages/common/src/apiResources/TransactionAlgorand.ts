import {Transaction} from "./Transaction";

export interface TransactionAlgorand extends Transaction {
    fee: number;
    transactionIndex: undefined;
}
