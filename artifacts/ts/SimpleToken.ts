/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import {
  Address,
  Contract,
  ContractState,
  TestContractResult,
  HexString,
  ContractFactory,
  EventSubscribeOptions,
  EventSubscription,
  CallContractParams,
  CallContractResult,
  TestContractParams,
  ContractEvent,
  subscribeContractEvent,
  subscribeContractEvents,
  testMethod,
  callMethod,
  multicallMethods,
  fetchContractState,
  ContractInstance,
  getContractEventsCurrentCount,
  TestContractParamsWithoutMaps,
  TestContractResultWithoutMaps,
} from "@alephium/web3";
import { default as SimpleTokenContractJson } from "../SimpleToken.ral.json";
import { getContractByCodeHash } from "./contracts";

// Custom types for the contract
export namespace SimpleTokenTypes {
  export type Fields = {
    symbol: HexString;
    name: HexString;
    decimals: bigint;
    supply: bigint;
  };

  export type State = ContractState<Fields>;

  export interface CallMethodTable {
    getSymbol: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getName: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<HexString>;
    };
    getDecimals: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
    getTotalSupply: {
      params: Omit<CallContractParams<{}>, "args">;
      result: CallContractResult<bigint>;
    };
  }
  export type CallMethodParams<T extends keyof CallMethodTable> =
    CallMethodTable[T]["params"];
  export type CallMethodResult<T extends keyof CallMethodTable> =
    CallMethodTable[T]["result"];
  export type MultiCallParams = Partial<{
    [Name in keyof CallMethodTable]: CallMethodTable[Name]["params"];
  }>;
  export type MultiCallResults<T extends MultiCallParams> = {
    [MaybeName in keyof T]: MaybeName extends keyof CallMethodTable
      ? CallMethodTable[MaybeName]["result"]
      : undefined;
  };
}

class Factory extends ContractFactory<
  SimpleTokenInstance,
  SimpleTokenTypes.Fields
> {
  getInitialFieldsWithDefaultValues() {
    return this.contract.getInitialFieldsWithDefaultValues() as SimpleTokenTypes.Fields;
  }

  at(address: string): SimpleTokenInstance {
    return new SimpleTokenInstance(address);
  }

  tests = {
    getSymbol: async (
      params: Omit<
        TestContractParamsWithoutMaps<SimpleTokenTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getSymbol", params);
    },
    getName: async (
      params: Omit<
        TestContractParamsWithoutMaps<SimpleTokenTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<HexString>> => {
      return testMethod(this, "getName", params);
    },
    getDecimals: async (
      params: Omit<
        TestContractParamsWithoutMaps<SimpleTokenTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getDecimals", params);
    },
    getTotalSupply: async (
      params: Omit<
        TestContractParamsWithoutMaps<SimpleTokenTypes.Fields, never>,
        "testArgs"
      >
    ): Promise<TestContractResultWithoutMaps<bigint>> => {
      return testMethod(this, "getTotalSupply", params);
    },
  };
}

// Use this object to test and deploy the contract
export const SimpleToken = new Factory(
  Contract.fromJson(
    SimpleTokenContractJson,
    "",
    "a2800413eb2c5c23d48068db23df5f8eeaba04653e12c8ed59d589720d96dadd"
  )
);

// Use this class to interact with the blockchain
export class SimpleTokenInstance extends ContractInstance {
  constructor(address: Address) {
    super(address);
  }

  async fetchState(): Promise<SimpleTokenTypes.State> {
    return fetchContractState(SimpleToken, this);
  }

  methods = {
    getSymbol: async (
      params?: SimpleTokenTypes.CallMethodParams<"getSymbol">
    ): Promise<SimpleTokenTypes.CallMethodResult<"getSymbol">> => {
      return callMethod(
        SimpleToken,
        this,
        "getSymbol",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getName: async (
      params?: SimpleTokenTypes.CallMethodParams<"getName">
    ): Promise<SimpleTokenTypes.CallMethodResult<"getName">> => {
      return callMethod(
        SimpleToken,
        this,
        "getName",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getDecimals: async (
      params?: SimpleTokenTypes.CallMethodParams<"getDecimals">
    ): Promise<SimpleTokenTypes.CallMethodResult<"getDecimals">> => {
      return callMethod(
        SimpleToken,
        this,
        "getDecimals",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
    getTotalSupply: async (
      params?: SimpleTokenTypes.CallMethodParams<"getTotalSupply">
    ): Promise<SimpleTokenTypes.CallMethodResult<"getTotalSupply">> => {
      return callMethod(
        SimpleToken,
        this,
        "getTotalSupply",
        params === undefined ? {} : params,
        getContractByCodeHash
      );
    },
  };

  async multicall<Calls extends SimpleTokenTypes.MultiCallParams>(
    calls: Calls
  ): Promise<SimpleTokenTypes.MultiCallResults<Calls>> {
    return (await multicallMethods(
      SimpleToken,
      this,
      calls,
      getContractByCodeHash
    )) as SimpleTokenTypes.MultiCallResults<Calls>;
  }
}
