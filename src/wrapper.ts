import axios from 'axios';
import { CreateNonceResponse, Nonce, NonciConfig, Transaction } from '@/types';

export class Nonci {
  protected secret: string;
  protected hostUri: string;

  constructor(config: NonciConfig) {
    this.secret = config.secret;
    this.hostUri = config.hostUri;
  }

  // create nonce
  public async createNonce(): Promise<CreateNonceResponse> {
    const response = await axios(`${this.hostUri}/nonce/create`, {
      method: 'GET',
      headers: {
        Authorization: `Bearer ${this.secret}`
      }
    });

    return await response.data;
  }

  // get all nonces
  public async getAllNonces(): Promise<Nonce[]> {
    const response = await axios(`${this.hostUri}/nonce/all`, {
      method: 'GET'
    });

    return await response.data.nonces;
  }

  // get active nonces
  public async getActiveNonces(): Promise<Nonce[]> {
    const response = await axios(`${this.hostUri}/nonce/active`, {
      method: 'GET'
    });

    return await response.data.nonces;
  }

  // get used nonces
  public async getUsedNonces(): Promise<Nonce[]> {
    const response = await axios(`${this.hostUri}/nonce/used`, {
      method: 'GET'
    });

    return await response.data.nonces;
  }

  // get nonce by id
  public async getNonceById(id: string): Promise<Nonce> {
    const response = await axios(`${this.hostUri}/nonce/id/${id}`, {
      method: 'GET'
    });

    return await response.data.nonce;
  }

  // get nonce by public key
  public async getNonceByPublicKey(id: string): Promise<Nonce> {
    const response = await axios(`${this.hostUri}/nonce/publicKey/${id}`, {
      method: 'GET'
    });

    return await response.data.nonce;
  }

  // add transaction to queue
  public async addTxToQueue(tx: { serializedTransaction: string; durableNonceId: string; recipientAddress: string }): Promise<Transaction> {
    const response = await axios(`${this.hostUri}/transaction`, {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${this.secret}`
      },
      data: tx
    });

    return await response.data.unprocessedTransaction;
  }

  // get all transactions
  public async getAllTxs(): Promise<Transaction[]> {
    const response = await axios(`${this.hostUri}/transaction/all`, {
      method: 'GET'
    });

    return await response.data.transactions;
  }

  // get pending transactions
  public async getPendingTxs(): Promise<Transaction[]> {
    const response = await axios(`${this.hostUri}/transaction/pending`, {
      method: 'GET'
    });

    return await response.data.transactions;
  }

  // get processed transactions
  public async getProcessedTxs(): Promise<Transaction[]> {
    const response = await axios(`${this.hostUri}/transaction/processed`, {
      method: 'GET'
    });

    return await response.data.transactions;
  }

  // get transaction by id
  public async getTxById(id: string): Promise<Transaction> {
    const response = await axios(`${this.hostUri}/transaction/id/${id}`, {
      method: 'GET'
    });

    return await response.data.transaction;
  }

  // get transaction by recipient
  public async getTxByRecipient(recipient: string): Promise<Transaction[]> {
    const response = await axios(`${this.hostUri}/transaction/recipient/${recipient}`, {
      method: 'GET'
    });

    return await response.data.transaction;
  }

  // get random transaction with nonce
  public async getRandomTxWithNonce(durableNonceId: string): Promise<string> {
    const response = await axios(`${this.hostUri}/transaction/random-with-nonce/`, {
      method: 'POST',
      data: {
        durableNonceId
      }
    });

    return await response.data.serializedTransaction;
  }

  // delete nonce by id
  public async deleteNonceById(id: string): Promise<string> {
    const response = await axios(`${this.hostUri}/nonce/delete/${id}`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${this.secret}`
      }
    });

    return await response.data.signature;
  }

  // delete nonce by id
  public async deleteUsedNonces(): Promise<any> {
    const response = await axios(`${this.hostUri}/nonce/all-used`, {
      method: 'DELETE',
      headers: {
        Authorization: `Bearer ${this.secret}`
      }
    });

    return await response.data;
  }
}
