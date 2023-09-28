import {Client} from "../../src";
import * as dotenv from 'dotenv';

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
    test('Create custom token.', async () => {
        const request = client.tokenContractManager.addToken({
            name: "teste",
            symbol: "",
            networkId: 1,
            contractAddress: "dadda",
            precision: 18,
            symbolFee: "TES"
        });
    });
})
