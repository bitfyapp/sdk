import { ClientOptions } from "./ClientOptions";
import { SignedTransaction } from "@baas-sdk/common";

export class Client {
  private readonly http;

  constructor(private readonly options: ClientOptions) {}

  sendSelfSignedTx(signedTransaction: SignedTransaction): Promise<string>
  sendSelfSignedTx(signedTransaction: string, networkId: number): Promise<string>

  async sendSelfSignedTx(signedTransaction: SignedTransaction | string, networkId?: number): Promise<string> {
    const data = {
      signed_transaction: signedTransaction,
      network_id: networkId,
    }
    if (typeof signedTransaction === "object") {
      data.signed_transaction = signedTransaction.content;
      data.network_id = await this.getNetworkId(signedTransaction);
    }

    return this.http.post('/broadcasts', data).then(({ data }) => data.data);
  }

  private getNetworkId(signedTx: SignedTransaction): Promise<number> {
    return Promise.resolve(1);
  }
}
