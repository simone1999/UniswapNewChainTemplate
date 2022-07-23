# Uniswap Template for new Chains
forked from https://github.com/1azy-guy/CoolSwap-interface

Template for deploying and operating a custom Uniswap.
this is th Frontend and to use it with a custom Uniswap following parameters needs replacement:
<CHAIN_NAME>: name of the Blockchain in Caps and no spaces e.g.: MOONBEAM
<chain_name>: name of chain, can contain spaces e.g.: Moonbeam
<chain_name_lower>: name of the chain in lowercase e.g.g: moonbeam
<chain_id>: chain_id as integer e.g.: 1284
<rpc_url>: url to an RPC endpoint of the chain e.g.: https://rpc.api.moonbeam.network
<factory_address>: address of the Factory smart Contract e.g.: 0x1FabE390868058C746Ff151032b79b910e4194cb
<router_address>: address of the Router02 smart contract e.g.: 0x2d78c1F4Eb5F3A6065E0038a5D1F3577f9062e92
<multicall_address>: address of the multicall smart contract e.g.: 0xA63dc61430B5b2c1C18D39d753b49C12C2AA9091
<init_code_hash>: hash of the pool init code e.g.: 0x1892ee6b3b8f653471529d0b06a772bdc5588bb0b15607cb427c8148f70004a9
<NATIVE_TOKEN_SYMBOL>: symbol of the native token written in caps e.g.: GLMR
<WRAPPED_NATIVE_TOKEN_SYMBOL>: symbol of the wrapped native token written in caps e.g.: WGLMR
<native_token>: name of the native token, allowed to contain spaces e.g.: Glimmer
<wrapped_native_token>: name of the wrapped native token, allowed to contain spaces e.g.: Wrapped Glimmer
<native_token_address>: address of the wrapped native Token e.g.: 0xAcc15dC74880C9944775448304B263D191c6077F
<native_token_decimals>: decimal places of the wrapped native token, mostly 18 e.g.: 18
<lp_token_symbol>: symbol of the liquidity provision token e.g.: SWAP-LP
<lp_token_name>: name of the Liquidity Provision token e.g.: Swap-LP-Token
<site_name>: name of the website, can contain spaces e.g.: Moonbeam-Swap


also:
Token List in forks/@uniswap/default-token-list/build/uniswap-dafault.tokenlist.json needs to be edited for default token list
ethereum logo under src/assets/images/ethereum-logo.png must be replaced with native currency logo of the chain
if swaps should also happen through other tokens than the wrapped native token, edit src/constants/index.js