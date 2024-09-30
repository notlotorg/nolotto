import { TonClient, TonClient4 } from "@ton/ton";
import TonWeb from "tonweb";

const client = new TonClient({
  endpoint:
    import.meta.env.VITE_ENV === "development"
      ? "https://testnet.toncenter.com/api/v2/jsonRPC"
      : "https://toncenter.com/api/v2/jsonRPC",
});

const tonWebClient = new TonWeb();

export const initClient = () => {};

export const getClient = (): TonClient => client;

export const getTonWebClient = (): TonWeb => tonWebClient;

export const tonService = {
  initClient,
  getClient,
  getTonWebClient,
};
