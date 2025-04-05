---
title: NFT交易所构建
author: Ray 
date: 2025/02/22 21:30
categories:
 - web3生态
tags:
 - web3
showComment: false
---
## NFT交易所

## ERC20代币标准

以太坊的代币标准，如果要发行自己的代币的话，就需要自己用到这个合约

* 转账余额(balancOf())
* 转帐(transfer())
* 授权转账(transferFrom())
* 授权(approve())
* 代币总供给(totalSupply())
* 授权转账额度(allowance)
* 代币信息(可选)

### IERC20

规定的是ERC标准的接口合约(大部分项目都有接口先行这个概念，为了就是统一开发人员的实现)，规定了ERC代币需要实现的函数和事件

#### 事件

* 释放条件：当 `value`单位的货币从账户from转移到另一账户时to时

```solidity
event Transfer(address indexed from,address indexed to,uint256)
```

* 当 `value`单位的货币从账户owner授权给另一账户spender时

```solidity
event Approval(address indexed owner,address indexed spender,uint256 vlaue)
```

#### 函数

* totalSupply()返回代币总供给
* balanceOf()返回账户余额
* transfer()转账
* allowance()返回授权额度
* approve()授权
* transferFrom()授权转账

最后:ERC20是**同质化代币**的标准

## ERC721非同质化代币标准

**ERC165**

这个合约接口规定了智能合约可以声明他支持的接口

```solidity
interface IERC165{
    function supportInterface(bytes4 interfacedId) external view returns(bool)
}
```

我们可以看下ERC721是如何实现supportInterface()函数的

```solidity
function supportInterface(bytes4 interfaceId) external view returns(bool){
    return interfaceId==type(IERC721).interfaceId || interfaceId==type(IERC165).interfaceId;
}
```

其实就是通过type(xxx)这个语法来实现的.

接下来我们来看看都有哪些ERC721

### 事件

有3个事件，其中Transfer和Approval事件也有，这也是二者都作为代币所具有的共性

* Transfer事件：在转账时被释放，记录代币的发出地址from，接收地址to和tokenId
* Approval事件：在授权时被释放，记录授权地址owner，被授权地址approved和tokenId
* ApprovalForAll：在批量授权时释放，记录批量授权的发出地址owner，被授权地址operator和授权与否的approved

### 函数

* balanceOf：返回某地址的NFT持有量balance
* ownerOf：返回某tokenId的主人owner
* transferFrom：普通转账，参数为转出地址from，接收地址to和tokenId
* safeTransferFrom：安全转账(如果接收方是合约地址，会要求实现ERC721Receiver接口)。参数为转出地址from，接收地址为tokenId
* approve：授权另一个地址使用你的NFT，参数为被授权地址approve和tokenId
* getApproved：查询tokenId被批准给了哪个地址。
* setApprovalForAll：将自己持有的系列NFT批量授权给某个地址operator
* isApprovedForAll：查询某地址的NFT是否批量授权给了另一个operator地址
* safeTransferFrom：安全转账的重载函数，里面包含了data

## ERC1155
