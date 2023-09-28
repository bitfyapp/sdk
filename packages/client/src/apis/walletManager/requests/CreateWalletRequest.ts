export interface CreateWalletRequest {
    networkId: number;
    description?: string;
    addressType?: 'legacy' | 'segwit';
}
