import {SignedTransaction} from "./SignedTransaction";

export interface Signable {
    sign(key: string, key2?: string): Promise<SignedTransaction>

    getNetwork(): string
    getEnvironment(): string
}
