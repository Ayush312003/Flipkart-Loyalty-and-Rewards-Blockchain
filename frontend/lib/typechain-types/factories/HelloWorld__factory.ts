/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { HelloWorld, HelloWorldInterface } from "../HelloWorld";

const _abi = [
  {
    inputs: [],
    name: "getCount1",
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
    name: "greet",
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
];

const _bytecode =
  "0x60c0604052600c60808190526b48656c6c6f20576f726c642160a01b60a090815261002d9160009190610045565b50606460015534801561003f57600080fd5b50610119565b828054610051906100de565b90600052602060002090601f01602090048101928261007357600085556100b9565b82601f1061008c57805160ff19168380011785556100b9565b828001600101855582156100b9579182015b828111156100b957825182559160200191906001019061009e565b506100c59291506100c9565b5090565b5b808211156100c557600081556001016100ca565b600181811c908216806100f257607f821691505b6020821081141561011357634e487b7160e01b600052602260045260246000fd5b50919050565b6101b8806101286000396000f3fe608060405234801561001057600080fd5b50600436106100365760003560e01c8063048ab90a1461003b578063cfae32171461004f575b600080fd5b604051600081526020015b60405180910390f35b610057610064565b60405161004691906100f2565b6000805461007190610147565b80601f016020809104026020016040519081016040528092919081815260200182805461009d90610147565b80156100ea5780601f106100bf576101008083540402835291602001916100ea565b820191906000526020600020905b8154815290600101906020018083116100cd57829003601f168201915b505050505081565b600060208083528351808285015260005b8181101561011f57858101830151858201604001528201610103565b81811115610131576000604083870101525b50601f01601f1916929092016040019392505050565b600181811c9082168061015b57607f821691505b6020821081141561017c57634e487b7160e01b600052602260045260246000fd5b5091905056fea26469706673582212201a7c7909248e2eab9465c766d078b783d2331f3459d7016f717b328810af3c4c64736f6c63430008070033";

type HelloWorldConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: HelloWorldConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class HelloWorld__factory extends ContractFactory {
  constructor(...args: HelloWorldConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
    this.contractName = "HelloWorld";
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<HelloWorld> {
    return super.deploy(overrides || {}) as Promise<HelloWorld>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): HelloWorld {
    return super.attach(address) as HelloWorld;
  }
  connect(signer: Signer): HelloWorld__factory {
    return super.connect(signer) as HelloWorld__factory;
  }
  static readonly contractName: "HelloWorld";
  public readonly contractName: "HelloWorld";
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): HelloWorldInterface {
    return new utils.Interface(_abi) as HelloWorldInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): HelloWorld {
    return new Contract(address, _abi, signerOrProvider) as HelloWorld;
  }
}