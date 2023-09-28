import {BaasApiAuthenticationError, Client} from "../../src";
import * as dotenv from 'dotenv';
import {Token} from '@bws-baas/common';

dotenv.config({ path: './.env.e2e'});

const client = new Client({
    environment: 'sandbox',
    auth: {
        clientSecret: process.env.AUTH_CLIENT_SECRET,
        clientId: process.env.AUTH_CLIENT_ID,
        applicationName: process.env.AUTH_APPLICATION_NAME,
    }
});

describe('Client test', () => {
    test('throws BaasApiAuthenticationError when credentials are invalid.', async () => {
        const client = new Client({
            environment: 'sandbox',
            auth: {
                clientSecret: 'XXXX-XXXX-XXXX-XXXX',
                clientId: 'cliente inexistente',
                applicationName: 'playground',
            }
        });
        const request = client.walletManager.getWallet(1);
        await expect(request).rejects.toBeInstanceOf(BaasApiAuthenticationError);
    })
    test('Get wallet test', async () => {
        const request = await client.walletManager.getWallet(Number(process.env.DEFAULT_WALLET_ID));
        expect(request).toHaveProperty('id');
        expect(request).toHaveProperty('nativeTokenSymbol');
        expect(request).toHaveProperty('description');
        expect(request).toHaveProperty('networkId');
        expect(request).toHaveProperty('precision');
        expect(request).toHaveProperty('tokens.0');
        expect(request).toHaveProperty('tokens.0');
        expect(request).toHaveProperty('tokens.0.name');
        expect(request).toHaveProperty('tokens.0.symbol');
        expect(request).toHaveProperty('tokens.0.symbolFee');
        expect(request).toHaveProperty('tokens.0.precision');
        // expect(request).toHaveProperty('tokens.0.contractAddress');
        // expect(request).toHaveProperty('tokens.0.networkId');
        // expect(request).toHaveProperty('tokens.0.isNative');
        // expect(request).toHaveProperty('tokens.0.network');
        // expect(request).toHaveProperty('tokens.0.network.id');
        // expect(request).toHaveProperty('tokens.0.network.name');
        expect(request).toHaveProperty('addresses.0');
        expect(request).toHaveProperty('createdAt');
        expect(request).toHaveProperty('updatedAt');
    })
    test('List wallet test', async () => {
        const request= await client.walletManager.getWallets()
        expect(request).toHaveProperty('items');
        expect(request).toHaveProperty('items.length')
    })
    test('Create wallet test', async () => {
        const request= await client.walletManager.createWallet({ networkId: 1 })
        expect(request).toHaveProperty('id');
        expect(request).toHaveProperty('nativeTokenSymbol');
        expect(request).toHaveProperty('description');
        expect(request).toHaveProperty('networkId');
        expect(request).toHaveProperty('precision');
        expect(request).toHaveProperty('tokens.0');
        expect(request).toHaveProperty('tokens.0');
        expect(request).toHaveProperty('tokens.0.name');
        expect(request).toHaveProperty('tokens.0.symbol');
        expect(request).toHaveProperty('tokens.0.symbolFee');
        expect(request).toHaveProperty('tokens.0.precision');
        // expect(request).toHaveProperty('tokens.0.contractAddress');
        // expect(request).toHaveProperty('tokens.0.networkId');
        // expect(request).toHaveProperty('tokens.0.isNative');
        // expect(request).toHaveProperty('tokens.0.network');
        // expect(request).toHaveProperty('tokens.0.network.id');
        // expect(request).toHaveProperty('tokens.0.network.name');
        expect(request).toHaveProperty('addresses.0');
        expect(request).toHaveProperty('createdAt');
        expect(request).toHaveProperty('updatedAt');
    })
})
