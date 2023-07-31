export type NonciConfig = {
  secret: string;
  hostUri: string;
};

export type CreateNonceResponse = {
  message: string;
  id: string;
  signature: string;
  nonceValue: string;
  nonceAccountPublicKey: string;
};

export type Transaction = {
  id: string;
  createdAt: string;
  updatedAt: string;
  signedTx: string;
  recipient: string;
  isProcessed: boolean;
  durableNonceId?: string;
  durableNonce?: Nonce;
  signature: null | any;
};

export type Nonce = {
  id: string;
  isActivate: boolean;
  createdAt: string;
  updatedAt: string;
  createTxSig: string;
  deleteTxSig: string;
  nonceValue: string;
  Transaction: Transaction | null;
  isDeleted?: boolean;
  publicKey?: string;
  privateKey?: string;
};
