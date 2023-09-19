import {Signable} from "./Signable";

export interface Transaction<P = any> extends Signable {
  setSource(address: string): void
  setTarget(address: string): void
  setFee(fee: number): void
  setAmount(amount: number): void
  setParams(params: P): void
}
