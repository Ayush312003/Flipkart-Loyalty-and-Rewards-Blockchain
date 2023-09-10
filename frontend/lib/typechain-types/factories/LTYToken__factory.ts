/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { POTATToken, POTATTokenInterface } from "../POTATToken";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Approval",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "to",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "value",
        type: "uint256",
      },
    ],
    name: "Transfer",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "owner",
        type: "address",
      },
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
    ],
    name: "allowance",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "approve",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "account",
        type: "address",
      },
    ],
    name: "balanceOf",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "buying",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "decimals",
    outputs: [
      {
        internalType: "uint8",
        name: "",
        type: "uint8",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "subtractedValue",
        type: "uint256",
      },
    ],
    name: "decreaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "spender",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "addedValue",
        type: "uint256",
      },
    ],
    name: "increaseAllowance",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "name",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "symbol",
    outputs: [
      {
        internalType: "string",
        name: "",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "totalSupply",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transfer",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "sender",
        type: "address",
      },
      {
        internalType: "address",
        name: "recipient",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "transferFrom",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50604051806040016040528060078152602001666c6f79616c747960c81b815250604051806040016040528060038152602001624c545960e81b8152508160039080519060200190610063929190610091565b508051610077906004906020840190610091565b5050600580546001600160a01b0319163317905550610165565b82805461009d9061012a565b90600052602060002090601f0160209004810192826100bf5760008555610105565b82601f106100d857805160ff1916838001178555610105565b82800160010185558215610105579182015b828111156101055782518255916020019190600101906100ea565b50610111929150610115565b5090565b5b808211156101115760008155600101610116565b600181811c9082168061013e57607f821691505b6020821081141561015f57634e487b7160e01b600052602260045260246000fd5b50919050565b610a78806101746000396000f3fe6080604052600436106100a75760003560e01c806370a082311161006457806370a0823114610182578063928bc6a0146101b857806395d89b41146101c2578063a457c2d7146101d7578063a9059cbb146101f7578063dd62ed3e1461021757600080fd5b806306fdde03146100ac578063095ea7b3146100d757806318160ddd1461010757806323b872dd14610126578063313ce567146101465780633950935114610162575b600080fd5b3480156100b857600080fd5b506100c161025d565b6040516100ce919061096a565b60405180910390f35b3480156100e357600080fd5b506100f76100f2366004610940565b6102ef565b60405190151581526020016100ce565b34801561011357600080fd5b506002545b6040519081526020016100ce565b34801561013257600080fd5b506100f7610141366004610904565b610305565b34801561015257600080fd5b50604051601281526020016100ce565b34801561016e57600080fd5b506100f761017d366004610940565b6103b4565b34801561018e57600080fd5b5061011861019d3660046108af565b6001600160a01b031660009081526020819052604090205490565b6101c06103f0565b005b3480156101ce57600080fd5b506100c161040c565b3480156101e357600080fd5b506100f76101f2366004610940565b61041b565b34801561020357600080fd5b506100f7610212366004610940565b6104b4565b34801561022357600080fd5b506101186102323660046108d1565b6001600160a01b03918216600090815260016020908152604080832093909416825291909152205490565b60606003805461026c90610a07565b80601f016020809104026020016040519081016040528092919081815260200182805461029890610a07565b80156102e55780601f106102ba576101008083540402835291602001916102e5565b820191906000526020600020905b8154815290600101906020018083116102c857829003601f168201915b5050505050905090565b60006102fc3384846104c1565b50600192915050565b60006103128484846105e5565b6001600160a01b03841660009081526001602090815260408083203384529091529020548281101561039c5760405162461bcd60e51b815260206004820152602860248201527f45524332303a207472616e7366657220616d6f756e74206578636565647320616044820152676c6c6f77616e636560c01b60648201526084015b60405180910390fd5b6103a985338584036104c1565b506001949350505050565b3360008181526001602090815260408083206001600160a01b038716845290915281205490916102fc9185906103eb9086906109bf565b6104c1565b341561040a5761040a336104056064346109e5565b6107b4565b565b60606004805461026c90610a07565b3360009081526001602090815260408083206001600160a01b03861684529091528120548281101561049d5760405162461bcd60e51b815260206004820152602560248201527f45524332303a2064656372656173656420616c6c6f77616e63652062656c6f77604482015264207a65726f60d81b6064820152608401610393565b6104aa33858584036104c1565b5060019392505050565b60006102fc3384846105e5565b6001600160a01b0383166105235760405162461bcd60e51b8152602060048201526024808201527f45524332303a20617070726f76652066726f6d20746865207a65726f206164646044820152637265737360e01b6064820152608401610393565b6001600160a01b0382166105845760405162461bcd60e51b815260206004820152602260248201527f45524332303a20617070726f766520746f20746865207a65726f206164647265604482015261737360f01b6064820152608401610393565b6001600160a01b0383811660008181526001602090815260408083209487168084529482529182902085905590518481527f8c5be1e5ebec7d5bd14f71427d1e84f3dd0314c0f7b2291e5b200ac8c7c3b925910160405180910390a3505050565b6001600160a01b0383166106495760405162461bcd60e51b815260206004820152602560248201527f45524332303a207472616e736665722066726f6d20746865207a65726f206164604482015264647265737360d81b6064820152608401610393565b6001600160a01b0382166106ab5760405162461bcd60e51b815260206004820152602360248201527f45524332303a207472616e7366657220746f20746865207a65726f206164647260448201526265737360e81b6064820152608401610393565b6001600160a01b038316600090815260208190526040902054818110156107235760405162461bcd60e51b815260206004820152602660248201527f45524332303a207472616e7366657220616d6f756e7420657863656564732062604482015265616c616e636560d01b6064820152608401610393565b6001600160a01b0380851660009081526020819052604080822085850390559185168152908120805484929061075a9084906109bf565b92505081905550826001600160a01b0316846001600160a01b03167fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef846040516107a691815260200190565b60405180910390a350505050565b6001600160a01b03821661080a5760405162461bcd60e51b815260206004820152601f60248201527f45524332303a206d696e7420746f20746865207a65726f2061646472657373006044820152606401610393565b806002600082825461081c91906109bf565b90915550506001600160a01b038216600090815260208190526040812080548392906108499084906109bf565b90915550506040518181526001600160a01b038316906000907fddf252ad1be2c89b69c2b068fc378daa952ba7f163c4a11628f55a4df523b3ef9060200160405180910390a35050565b80356001600160a01b03811681146108aa57600080fd5b919050565b6000602082840312156108c157600080fd5b6108ca82610893565b9392505050565b600080604083850312156108e457600080fd5b6108ed83610893565b91506108fb60208401610893565b90509250929050565b60008060006060848603121561091957600080fd5b61092284610893565b925061093060208501610893565b9150604084013590509250925092565b6000806040838503121561095357600080fd5b61095c83610893565b946020939093013593505050565b600060208083528351808285015260005b818110156109975785810183015185820160400152820161097b565b818111156109a9576000604083870101525b50601f01601f1916929092016040019392505050565b600082198211156109e057634e487b7160e01b600052601160045260246000fd5b500190565b600082610a0257634e487b7160e01b600052601260045260246000fd5b500490565b600181811c90821680610a1b57607f821691505b60208210811415610a3c57634e487b7160e01b600052602260045260246000fd5b5091905056fea2646970667358221220812f80872781fe7b38e37637b476531f0a1d6e2367710d7fa0fc838f9528a77264736f6c63430008070033";

type POTATTokenConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: POTATTokenConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class POTATToken__factory extends ContractFactory {
  constructor(...args: POTATTokenConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "POTATToken";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<POTATToken> {
    return super.deploy(overrides || {}) as Promise<POTATToken>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): POTATToken {
    return super.attach(address) as POTATToken;
  }
  connect(signer: Signer): POTATToken__factory {
    return super.connect(signer) as POTATToken__factory;
  }
  static readonly contractName: "POTATToken";
  public readonly contractName: "POTATToken";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): POTATTokenInterface {
    return new utils.Interface(_abi) as POTATTokenInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): POTATToken {
    return new Contract(address, _abi, signerOrProvider) as POTATToken;
  }
}