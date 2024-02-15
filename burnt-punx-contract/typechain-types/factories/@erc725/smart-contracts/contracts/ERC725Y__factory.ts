/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type {
  Signer,
  AddressLike,
  ContractDeployTransaction,
  ContractRunner,
} from "ethers";
import type { PayableOverrides } from "../../../../common";
import type {
  ERC725Y,
  ERC725YInterface,
} from "../../../../@erc725/smart-contracts/contracts/ERC725Y";

const _abi = [
  {
    inputs: [
      {
        internalType: "address",
        name: "initialOwner",
        type: "address",
      },
    ],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "ERC725Y_DataKeysValuesEmptyArray",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC725Y_DataKeysValuesLengthMismatch",
    type: "error",
  },
  {
    inputs: [],
    name: "ERC725Y_MsgValueDisallowed",
    type: "error",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "callerAddress",
        type: "address",
      },
    ],
    name: "OwnableCallerNotTheOwner",
    type: "error",
  },
  {
    inputs: [],
    name: "OwnableCannotSetZeroAddressAsOwner",
    type: "error",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
      {
        indexed: false,
        internalType: "bytes",
        name: "dataValue",
        type: "bytes",
      },
    ],
    name: "DataChanged",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
    ],
    name: "getData",
    outputs: [
      {
        internalType: "bytes",
        name: "dataValue",
        type: "bytes",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "dataKeys",
        type: "bytes32[]",
      },
    ],
    name: "getDataBatch",
    outputs: [
      {
        internalType: "bytes[]",
        name: "dataValues",
        type: "bytes[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "dataKey",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "dataValue",
        type: "bytes",
      },
    ],
    name: "setData",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32[]",
        name: "dataKeys",
        type: "bytes32[]",
      },
      {
        internalType: "bytes[]",
        name: "dataValues",
        type: "bytes[]",
      },
    ],
    name: "setDataBatch",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes4",
        name: "interfaceId",
        type: "bytes4",
      },
    ],
    name: "supportsInterface",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052604051610bdc380380610bdc833981016040819052610022916100c5565b6001600160a01b038116610049576040516306b620db60e21b815260040160405180910390fd5b61005281610058565b506100f5565b6000546001600160a01b038281169116146100c257600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0383161790555b50565b6000602082840312156100d757600080fd5b81516001600160a01b03811681146100ee57600080fd5b9392505050565b610ad8806101046000396000f3fe60806040526004361061006b5760003560e01c806301ffc9a71461007057806354f6127f146100a5578063715018a6146100d25780637f23690c146100e95780638da5cb5b146100fc578063979024211461011e578063dedff9c614610131578063f2fde38b1461015e575b600080fd5b34801561007c57600080fd5b5061009061008b366004610568565b61017e565b60405190151581526020015b60405180910390f35b3480156100b157600080fd5b506100c56100c0366004610599565b6101b5565b60405161009c91906105f8565b3480156100de57600080fd5b506100e76101c0565b005b6100e76100f73660046106c0565b6101d4565b34801561010857600080fd5b50610111610209565b60405161009c9190610706565b6100e761012c3660046107ac565b610218565b34801561013d57600080fd5b5061015161014c366004610880565b6102d8565b60405161009c91906108bc565b34801561016a57600080fd5b506100e7610179366004610920565b610382565b60006001600160e01b031982166318a6a9a560e21b14806101af57506301ffc9a760e01b6001600160e01b03198316145b92915050565b60606101af826103bd565b6101c861045f565b6101d2600061049a565b565b6101dc61045f565b34156101fb5760405163f36ba73760e01b815260040160405180910390fd5b6102058282610513565b5050565b6000546001600160a01b031690565b61022061045f565b341561023f5760405163f36ba73760e01b815260040160405180910390fd5b805182511461026157604051633bcc897960e01b815260040160405180910390fd5b8151600003610283576040516397da5f9560e01b815260040160405180910390fd5b60005b82518110156102d3576102cb8382815181106102a4576102a4610949565b60200260200101518383815181106102be576102be610949565b6020026020010151610513565b600101610286565b505050565b606081516001600160401b038111156102f3576102f361060b565b60405190808252806020026020018201604052801561032657816020015b60608152602001906001900390816103115790505b50905060005b825181101561037c5761035783828151811061034a5761034a610949565b60200260200101516103bd565b82828151811061036957610369610949565b602090810291909101015260010161032c565b50919050565b61038a61045f565b6001600160a01b0381166103b1576040516306b620db60e21b815260040160405180910390fd5b6103ba8161049a565b50565b60008181526001602052604090208054606091906103da9061095f565b80601f01602080910402602001604051908101604052809291908181526020018280546104069061095f565b80156104535780601f1061042857610100808354040283529160200191610453565b820191906000526020600020905b81548152906001019060200180831161043657829003601f168201915b50505050509050919050565b33610468610209565b6001600160a01b0316146101d2573360405163bf1169c560e01b81526004016104919190610706565b60405180910390fd5b6104a2610209565b6001600160a01b0316816001600160a01b0316146103ba57600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0383166001600160a01b031990911617905550565b600082815260016020526040902061052b82826109e3565b50817fece574603820d07bc9b91f2a932baadf4628aabcb8afba49776529c14a6104b28260405161055c91906105f8565b60405180910390a25050565b60006020828403121561057a57600080fd5b81356001600160e01b03198116811461059257600080fd5b9392505050565b6000602082840312156105ab57600080fd5b5035919050565b6000815180845260005b818110156105d8576020818501810151868301820152016105bc565b506000602082860101526020601f19601f83011685010191505092915050565b60208152600061059260208301846105b2565b634e487b7160e01b600052604160045260246000fd5b604051601f8201601f191681016001600160401b03811182821017156106495761064961060b565b604052919050565b600082601f83011261066257600080fd5b81356001600160401b0381111561067b5761067b61060b565b61068e601f8201601f1916602001610621565b8181528460208386010111156106a357600080fd5b816020850160208301376000918101602001919091529392505050565b600080604083850312156106d357600080fd5b8235915060208301356001600160401b038111156106f057600080fd5b6106fc85828601610651565b9150509250929050565b6001600160a01b0391909116815260200190565b60006001600160401b038211156107335761073361060b565b5060051b60200190565b600082601f83011261074e57600080fd5b8135602061076361075e8361071a565b610621565b8083825260208201915060208460051b87010193508684111561078557600080fd5b602086015b848110156107a1578035835291830191830161078a565b509695505050505050565b600080604083850312156107bf57600080fd5b82356001600160401b03808211156107d657600080fd5b6107e28683870161073d565b93506020915081850135818111156107f957600080fd5b8501601f8101871361080a57600080fd5b803561081861075e8261071a565b81815260059190911b8201840190848101908983111561083757600080fd5b8584015b8381101561086f578035868111156108535760008081fd5b6108618c8983890101610651565b84525091860191860161083b565b508096505050505050509250929050565b60006020828403121561089257600080fd5b81356001600160401b038111156108a857600080fd5b6108b48482850161073d565b949350505050565b600060208083016020845280855180835260408601915060408160051b87010192506020870160005b8281101561091357603f198886030184526109018583516105b2565b945092850192908501906001016108e5565b5092979650505050505050565b60006020828403121561093257600080fd5b81356001600160a01b038116811461059257600080fd5b634e487b7160e01b600052603260045260246000fd5b600181811c9082168061097357607f821691505b60208210810361037c57634e487b7160e01b600052602260045260246000fd5b601f8211156102d3576000816000526020600020601f850160051c810160208610156109bc5750805b601f850160051c820191505b818110156109db578281556001016109c8565b505050505050565b81516001600160401b038111156109fc576109fc61060b565b610a1081610a0a845461095f565b84610993565b602080601f831160018114610a455760008415610a2d5750858301515b600019600386901b1c1916600185901b1785556109db565b600085815260208120601f198616915b82811015610a7457888601518255948401946001909101908401610a55565b5085821015610a925787850151600019600388901b60f8161c191681555b5050505050600190811b0190555056fea264697066735822122075beb1f4a931ef97369edbb11e76e8ba88bc1d12da1596148841403ade48e40064736f6c63430008180033";

type ERC725YConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: ERC725YConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class ERC725Y__factory extends ContractFactory {
  constructor(...args: ERC725YConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    initialOwner: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(initialOwner, overrides || {});
  }
  override deploy(
    initialOwner: AddressLike,
    overrides?: PayableOverrides & { from?: string }
  ) {
    return super.deploy(initialOwner, overrides || {}) as Promise<
      ERC725Y & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): ERC725Y__factory {
    return super.connect(runner) as ERC725Y__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): ERC725YInterface {
    return new Interface(_abi) as ERC725YInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): ERC725Y {
    return new Contract(address, _abi, runner) as unknown as ERC725Y;
  }
}