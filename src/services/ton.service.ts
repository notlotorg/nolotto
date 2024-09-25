import { TonClient, TonClient4 } from "@ton/ton";

const client = new TonClient({
  endpoint: "https://toncenter.com/api/v2/jsonRPC",
});

export const initClient = () => {};

export const getClient = (): TonClient => client;

export const tonService = {
  initClient,
  getClient,
};
