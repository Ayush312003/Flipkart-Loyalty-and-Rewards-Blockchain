/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BigNumberish,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result, EventFragment } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface TodoListInterface extends utils.Interface {
  contractName: "TodoList";
  functions: {
    "completeTask(uint256)": FunctionFragment;
    "createTask(string)": FunctionFragment;
    "removeTask(uint256)": FunctionFragment;
    "taskCount()": FunctionFragment;
    "tasks(uint256)": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "completeTask",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "createTask", values: [string]): string;
  encodeFunctionData(
    functionFragment: "removeTask",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(functionFragment: "taskCount", values?: undefined): string;
  encodeFunctionData(functionFragment: "tasks", values: [BigNumberish]): string;

  decodeFunctionResult(
    functionFragment: "completeTask",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "createTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "removeTask", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "taskCount", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "tasks", data: BytesLike): Result;

  events: {
    "TaskCreated(uint256,string,bool)": EventFragment;
  };

  getEvent(nameOrSignatureOrTopic: "TaskCreated"): EventFragment;
}

export type TaskCreatedEvent = TypedEvent<
  [BigNumber, string, boolean],
  { id: BigNumber; content: string; completed: boolean }
>;

export type TaskCreatedEventFilter = TypedEventFilter<TaskCreatedEvent>;

export interface TodoList extends BaseContract {
  contractName: "TodoList";
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: TodoListInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    completeTask(
      _taskId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    createTask(
      _content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    removeTask(
      _taskId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;

    taskCount(overrides?: CallOverrides): Promise<[BigNumber]>;

    tasks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, boolean] & {
        id: BigNumber;
        content: string;
        completed: boolean;
      }
    >;
  };

  completeTask(
    _taskId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  createTask(
    _content: string,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  removeTask(
    _taskId: BigNumberish,
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  taskCount(overrides?: CallOverrides): Promise<BigNumber>;

  tasks(
    arg0: BigNumberish,
    overrides?: CallOverrides
  ): Promise<
    [BigNumber, string, boolean] & {
      id: BigNumber;
      content: string;
      completed: boolean;
    }
  >;

  callStatic: {
    completeTask(
      _taskId: BigNumberish,
      overrides?: CallOverrides
    ): Promise<void>;

    createTask(_content: string, overrides?: CallOverrides): Promise<void>;

    removeTask(_taskId: BigNumberish, overrides?: CallOverrides): Promise<void>;

    taskCount(overrides?: CallOverrides): Promise<BigNumber>;

    tasks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<
      [BigNumber, string, boolean] & {
        id: BigNumber;
        content: string;
        completed: boolean;
      }
    >;
  };

  filters: {
    "TaskCreated(uint256,string,bool)"(
      id?: null,
      content?: null,
      completed?: null
    ): TaskCreatedEventFilter;
    TaskCreated(
      id?: null,
      content?: null,
      completed?: null
    ): TaskCreatedEventFilter;
  };

  estimateGas: {
    completeTask(
      _taskId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    createTask(
      _content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    removeTask(
      _taskId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;

    taskCount(overrides?: CallOverrides): Promise<BigNumber>;

    tasks(arg0: BigNumberish, overrides?: CallOverrides): Promise<BigNumber>;
  };

  populateTransaction: {
    completeTask(
      _taskId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    createTask(
      _content: string,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    removeTask(
      _taskId: BigNumberish,
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;

    taskCount(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    tasks(
      arg0: BigNumberish,
      overrides?: CallOverrides
    ): Promise<PopulatedTransaction>;
  };
}
