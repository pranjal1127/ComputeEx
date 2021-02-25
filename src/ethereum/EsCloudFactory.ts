/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import { Contract, ContractFactory, Overrides } from "@ethersproject/contracts";

import type { EsCloud } from "./EsCloud";

export class EsCloudFactory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(overrides?: Overrides): Promise<EsCloud> {
    return super.deploy(overrides || {}) as Promise<EsCloud>;
  }
  getDeployTransaction(overrides?: Overrides): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): EsCloud {
    return super.attach(address) as EsCloud;
  }
  connect(signer: Signer): EsCloudFactory {
    return super.connect(signer) as EsCloudFactory;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): EsCloud {
    return new Contract(address, _abi, signerOrProvider) as EsCloud;
  }
}

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "Host",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "Details",
        type: "bytes32",
      },
    ],
    name: "ApplyHost",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "Clone",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "Host",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bytes32",
        name: "_details",
        type: "bytes32",
      },
    ],
    name: "NewHost",
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
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "Host",
        type: "address",
      },
      {
        indexed: true,
        internalType: "bytes32",
        name: "file",
        type: "bytes32",
      },
    ],
    name: "RaisedDispute",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "Admin",
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
        name: "Host_address",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "file",
        type: "bytes32",
      },
    ],
    name: "Dispute",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_Host",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "Details",
        type: "bytes32",
      },
    ],
    name: "approveHost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    name: "clonedContracts",
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
    name: "dayswappers",
    outputs: [
      {
        internalType: "contract IDayswappers",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "host",
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
    name: "implementation",
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
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
    ],
    name: "isAdmin",
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
        name: "",
        type: "address",
      },
    ],
    name: "isHost",
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
    inputs: [],
    name: "kycDapp",
    outputs: [
      {
        internalType: "contract IKycDapp",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_Host",
        type: "address",
      },
      {
        internalType: "bytes32",
        name: "_Details",
        type: "bytes32",
      },
    ],
    name: "newHost",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "nrtManager",
    outputs: [
      {
        internalType: "contract INRTManager",
        name: "",
        type: "address",
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
    inputs: [
      {
        internalType: "address",
        name: "_buyer",
        type: "address",
      },
      {
        internalType: "address",
        name: "_seller",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_value",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_distribute",
        type: "uint256",
      },
    ],
    name: "payRewards",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [],
    name: "prepaidEs",
    outputs: [
      {
        internalType: "contract IPrepaidEs",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "randomnessManager",
    outputs: [
      {
        internalType: "contract RandomnessManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "bytes32",
        name: "_username",
        type: "bytes32",
      },
    ],
    name: "resolveAddress",
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
    inputs: [
      {
        internalType: "bytes32",
        name: "_username",
        type: "bytes32",
      },
    ],
    name: "resolveAddressStrict",
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
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "resolveUsername",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_wallet",
        type: "address",
      },
    ],
    name: "resolveUsernameStrict",
    outputs: [
      {
        internalType: "bytes32",
        name: "",
        type: "bytes32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "user",
        type: "address",
      },
      {
        internalType: "bool",
        name: "status",
        type: "bool",
      },
    ],
    name: "setAdmin",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_kycDapp",
        type: "address",
      },
    ],
    name: "setKycDapp",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "storageFactory",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyClub",
    outputs: [
      {
        internalType: "contract ITimeAllyClub",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyManager",
    outputs: [
      {
        internalType: "contract ITimeAllyManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "timeallyPromotionalBucket",
    outputs: [
      {
        internalType: "contract ITimeAllyPromotionalBucket",
        name: "",
        type: "address",
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
  {
    inputs: [],
    name: "validatorManager",
    outputs: [
      {
        internalType: "contract IValidatorManager",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6117658061007d6000396000f3fe6080604052600436106101475760003560e01c80630366e7f41461014c5780630d541ecb146101615780630df5202f146101975780631d849b30146101b95780631f70693c146101d9578063208b3804146101f957806324d7806c1461020e57806329b2dfa31461023b57806333b005d01461025b5780634b0bddd21461027b5780635c60da1b1461029b5780635f9f68c2146102b057806367b48b18146102d05780636a14920a146102e5578063722d2b3e146103055780638da5cb5b1461031a57806398b1a44d1461032f578063a7017b521461034f578063a76c91e714610364578063b9f9f8c814610384578063ba262eb8146103a4578063bf8c3144146103c4578063dccc1b08146103d9578063eb2931b7146103ee578063f2fde38b1461040e578063f45679511461042e578063fb82480f14610443578063fe55bde914610463575b600080fd5b61015f61015a366004611372565b610478565b005b34801561016d57600080fd5b5061018161017c36600461133a565b6108ed565b60405161018e91906114ed565b60405180910390f35b3480156101a357600080fd5b506101ac61093d565b60405161018e9190611451565b3480156101c557600080fd5b506101ac6101d4366004611436565b61095b565b3480156101e557600080fd5b506101816101f436600461133a565b6109ae565b34801561020557600080fd5b506101ac610a31565b34801561021a57600080fd5b5061022e61022936600461133a565b610a4a565b60405161018e91906114e2565b34801561024757600080fd5b5061015f6102563660046113ef565b610a68565b34801561026757600080fd5b5061022e61027636600461133a565b610b4c565b34801561028757600080fd5b5061015f6102963660046113b7565b610b61565b3480156102a757600080fd5b506101ac610bc4565b3480156102bc57600080fd5b5061015f6102cb3660046113ef565b610bd3565b3480156102dc57600080fd5b506101ac610c3c565b3480156102f157600080fd5b506101ac610300366004611436565b610c4b565b34801561031157600080fd5b506101ac610c97565b34801561032657600080fd5b506101ac610cb5565b34801561033b57600080fd5b5061015f61034a36600461133a565b610cc4565b34801561035b57600080fd5b506101ac610d22565b34801561037057600080fd5b5061015f61037f36600461133a565b610d4b565b34801561039057600080fd5b506101ac61039f36600461133a565b610da5565b3480156103b057600080fd5b5061015f6103bf3660046113ef565b610dc0565b3480156103d057600080fd5b506101ac610f63565b3480156103e557600080fd5b506101ac610f83565b3480156103fa57600080fd5b5061022e61040936600461133a565b610f9e565b34801561041a57600080fd5b5061015f61042936600461133a565b610fb3565b34801561043a57600080fd5b506101ac611014565b34801561044f57600080fd5b506101ac61045e366004611436565b61102c565b34801561046f57600080fd5b506101ac611056565b600061048f60646104898585611075565b906110d5565b90508034146104b95760405162461bcd60e51b81526004016104b090611563565b60405180910390fd5b6104c1610a31565b6001600160a01b0316623e8ec46104de6064610489856014611075565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b168152610519918991600401611465565b6000604051808303818588803b15801561053257600080fd5b505af1158015610546573d6000803e3d6000fd5b5050505050610553610a31565b6001600160a01b0316637ef407056105716064610489856014611075565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b1681526105ac918991600401611465565b6000604051808303818588803b1580156105c557600080fd5b505af11580156105d9573d6000803e3d6000fd5b50505050506105e6610a31565b6001600160a01b0316623e8ec46106036064610489856014611075565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b16815261063e918a91600401611465565b6000604051808303818588803b15801561065757600080fd5b505af115801561066b573d6000803e3d6000fd5b5050505050610678610a31565b6001600160a01b0316637ef407056106966064610489856014611075565b604080516060810182526032808252600060208301528183015290516001600160e01b031960e085901b1681526106d1918a91600401611465565b6000604051808303818588803b1580156106ea57600080fd5b505af11580156106fe573d6000803e3d6000fd5b505050505061070b61093d565b6001600160a01b03166388cbfff3610729606461048985600a611075565b6040518263ffffffff1660e01b81526004016000604051808303818588803b15801561075457600080fd5b505af1158015610768573d6000803e3d6000fd5b50505050506000610777610c3c565b6001600160a01b0316636a14920a6040518163ffffffff1660e01b81526004016107a0906115e4565b60206040518083038186803b1580156107b857600080fd5b505afa1580156107cc573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906107f09190611356565b905060006001600160a01b03821661080e606461048986600a611075565b60405161081a9061144e565b60006040518083038185875af1925050503d8060008114610857576040519150601f19603f3d011682016040523d82523d6000602084013e61085c565b606091505b505090508061087d5760405162461bcd60e51b81526004016104b0906115fc565b610885610a31565b6001600160a01b0316639048f53a88876040518363ffffffff1660e01b81526004016108b29291906114a6565b600060405180830381600087803b1580156108cc57600080fd5b505af11580156108e0573d6000803e3d6000fd5b5050505050505050505050565b6000806108f9836109ae565b9050806109375760405162461bcd60e51b815260040180806020018281038252602a81526020018061169f602a913960400191505060405180910390fd5b92915050565b60006109566a27292a2fa6a0a720a3a2a960a91b61095b565b905090565b60008061096783610c4b565b90506001600160a01b0381166109375760405162461bcd60e51b815260040180806020018281038252602681526020018061170a6026913960400191505060405180910390fd5b600154604080516307dc1a4f60e21b81526001600160a01b03848116600483015291516000939290921691631f70693c91602480820192602092909190829003018186803b1580156109ff57600080fd5b505afa158015610a13573d6000803e3d6000fd5b505050506040513d6020811015610a2957600080fd5b505192915050565b60006109566a444159535741505045525360a81b61095b565b6001600160a01b031660009081526004602052604090205460ff1690565b610a70610c3c565b6001600160a01b03166360f140d8336040518263ffffffff1660e01b8152600401610a9b9190611451565b60206040518083038186803b158015610ab357600080fd5b505afa158015610ac7573d6000803e3d6000fd5b505050506040513d601f19601f82011682018060405250810190610aeb919061141a565b610b075760405162461bcd60e51b81526004016104b0906115b5565b816001600160a01b03167fb9e547ad2d972f93a29ce58beb98d6999f885bdd485d1c77fd368c007385d50982604051610b4091906114ed565b60405180910390a25050565b60046020526000908152604090205460ff1681565b610b69610cb5565b6001600160a01b0316336001600160a01b031614610b995760405162461bcd60e51b81526004016104b090611644565b6001600160a01b03919091166000908152600460205260409020805460ff1916911515919091179055565b6002546001600160a01b031681565b3360009081526006602052604090205460ff16610c025760405162461bcd60e51b81526004016104b0906114f6565b60405181906001600160a01b038416907f9ebe3bd45730594dfa6cc2364a08fbba024c0d2ecc9a583da8f19ac04c8e0c3b90600090a35050565b6001546001600160a01b031690565b6001546040805163350a490560e11b81526004810184905290516000926001600160a01b031691636a14920a916024808301926020929190829003018186803b1580156109ff57600080fd5b60006109566f2a24a6a2a0a6262cafa6a0a720a3a2a960811b61095b565b6000546001600160a01b031690565b33610ccd610cb5565b6001600160a01b031614610d16576040805162461bcd60e51b815260206004820181905260248201526000805160206116c9833981519152604482015290519081900360640190fd5b610d1f81611114565b50565b60006109567a151253515053131657d41493d353d51253d3905317d09550d2d155602a1b61095b565b610d53610cb5565b6001600160a01b0316336001600160a01b031614610d835760405162461bcd60e51b81526004016104b090611644565b600280546001600160a01b0319166001600160a01b0392909216919091179055565b6005602052600090815260409020546001600160a01b031681565b3360009081526004602052604090205460ff16610def5760405162461bcd60e51b81526004016104b09061152c565b6001600160a01b038281166000908152600560205260409020541615610e275760405162461bcd60e51b81526004016104b09061158e565b600254600090610e3f906001600160a01b0316611136565b60038054600181019091557fc2575a0e9e593c00f959f8c92f12db2869c3395a3b0502d05e2516446f71f85b0180546001600160a01b038084166001600160a01b0319928316811790935586166000908152600560205260409081902080549092168317909155516303d65f8160e31b815291925090631eb2fc0890610ecd908690869030906004016114bf565b600060405180830381600087803b158015610ee757600080fd5b505af1158015610efb573d6000803e3d6000fd5b5050506001600160a01b03821660008181526006602052604090819020805460ff19166001179055519091507f2429fd6b427fa39a9701524fee44a07e4c2f8f037587116265ea4c45b9acbfba90610f5690869086906114a6565b60405180910390a2505050565b6000610956712920a72227a6a722a9a9afa6a0a720a3a2a960711b61095b565b60006109566c2a24a6a2a0a6262cafa1a62aa160991b61095b565b60066020526000908152604090205460ff1681565b610fbb6111de565b6000546001600160a01b0390811691161461100b576040805162461bcd60e51b815260206004820181905260248201526000805160206116c9833981519152604482015290519081900360640190fd5b610d1f816111e2565b600061095669505245504149445f455360b01b61095b565b6003818154811061103c57600080fd5b6000918252602090912001546001600160a01b0316905081565b6000610956702b20a624a220aa27a92fa6a0a720a3a2a960791b61095b565b60008261108457506000610937565b8282028284828161109157fe5b04146110ce5760405162461bcd60e51b81526004018080602001828103825260218152602001806116e96021913960400191505060405180910390fd5b9392505050565b60006110ce83836040518060400160405280601a815260200179536166654d6174683a206469766973696f6e206279207a65726f60301b815250611298565b600180546001600160a01b0319166001600160a01b0392909216919091179055565b60006001600160a01b03821661118d576040805162461bcd60e51b81526020600482015260176024820152761152540c4c4d8dce8815105491d15517d254d7d3955313604a1b604482015290519081900360640190fd5b60008260601b9050604051733d602d80600a3d3981f3363d3d373d3d3d363d7360601b81528160148201526e5af43d82803e903d91602b57fd5bf360881b60288201526037816000f0949350505050565b3390565b6001600160a01b03811661123d576040805162461bcd60e51b815260206004820152601f60248201527f4f776e61626c653a204e45575f4f574e45525f49535f5a45524f5f4144445200604482015290519081900360640190fd5b600080546040516001600160a01b03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080546001600160a01b0319166001600160a01b0392909216919091179055565b600081836113245760405162461bcd60e51b81526004018080602001828103825283818151815260200191508051906020019080838360005b838110156112e95781810151838201526020016112d1565b50505050905090810190601f1680156113165780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600083858161133057fe5b0495945050505050565b60006020828403121561134b578081fd5b81356110ce8161167b565b600060208284031215611367578081fd5b81516110ce8161167b565b60008060008060808587031215611387578283fd5b84356113928161167b565b935060208501356113a28161167b565b93969395505050506040820135916060013590565b600080604083850312156113c9578182fd5b82356113d48161167b565b915060208301356113e481611690565b809150509250929050565b60008060408385031215611401578182fd5b823561140c8161167b565b946020939093013593505050565b60006020828403121561142b578081fd5b81516110ce81611690565b600060208284031215611447578081fd5b5035919050565b90565b6001600160a01b0391909116815260200190565b6001600160a01b03831681526080810160208083018460005b600381101561149b5781518352918301919083019060010161147e565b505050509392505050565b6001600160a01b03929092168252602082015260400190565b6001600160a01b0393841681526020810192909252909116604082015260600190565b901515815260200190565b90815260200190565b6020808252601c908201527b121bdcdd0e881e5bdd48185c99481b9bdd08105d5d1a1bdc9a5e995960221b604082015260600190565b6020808252601d908201527f41646d696e3a20796f7520617265206e6f7420417574686f72697a6564000000604082015260600190565b602080825260119082015270125b9cdd59999a58da595b9d17d19d5b99607a1b604082015260600190565b6020808252600d908201526c105b1c9958591e48115e1a5cdd609a1b604082015260600190565b6020808252601590820152741154d0db1bdd590e8812d650d7d491545552549151605a1b604082015260600190565b6b0434841524954595f444150560a41b815260200190565b60208082526028908201527f52656e74696e67446170703a20434841524954595f5452414e534645525f49536040820152675f4641494c494e4760c01b606082015260800190565b6020808252601e908201527f476f7665726e3a20796f7520617265206e6f7420417574686f72697a65640000604082015260600190565b6001600160a01b0381168114610d1f57600080fd5b8015158114610d1f57600080fdfe52656769737472793a205245534f4c5645445f4e554c4c5f555345524e414d455f494e5f5354524943544f776e61626c653a2043414c4c45525f49535f4e4f545f5448455f4f574e4552536166654d6174683a206d756c7469706c69636174696f6e206f766572666c6f7752656769737472793a205245534f4c5645445f5a45524f5f414444525f494e5f535452494354a2646970667358221220cf5f5901d921493352b85a83ff0a4b27f7bfbd9efed40cff4c2a05913975912464736f6c63430007050033";