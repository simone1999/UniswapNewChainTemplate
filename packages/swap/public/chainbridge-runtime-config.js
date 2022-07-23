window.__RUNTIME_CONFIG__ = {
  INDEXER__URL: "http://localhost:8000",
  UI_EXPLORER_URL: "http://localhost:3003",
  CHAINBRIDGE: {
    chains: [
      {
        domainId: 1,
        networkId: 56,
        name: "BinanceSmartChain",
        decimals: 18,
        bridgeAddress: "0xDC2393dc10734BF153153038943a5deB42b209cd",
        erc20HandlerAddress: "0xC7E6d7E08A89209F02af47965337714153c529F0",
        rpcUrl: "https://bsc-dataseed3.binance.org/",
        type: "Ethereum",
        nativeTokenSymbol: "BNB",
        tokens: [
          {
            address: "0xce6c9c70f91c6797873EFC80505f972290A88f5D",
            name: "IceCream",
            symbol: "ICE",
            imageUri: "https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png",
            resourceId: "0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02"
          }
        ]
      },
      {
        domainId: 2,
        networkId: 32520,
        name: "Bitgert",
        decimals: 18,
        bridgeAddress: "0x12AA82525DEfF84777fa78578A68ceB854A85f43",
        erc20HandlerAddress: "0x8687cD1d02A28098571067ddB18F33fEF667C929",
        rpcUrl: "https://rpc.icecreamswap.com",
        type: "Ethereum",
        nativeTokenSymbol: "Brise",
        tokens: [
          {
            address: "0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D",
            name: "IceCream",
            symbol: "ICE",
            imageUri: "https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/bitgert/assets/0xB999Ea90607a826A3E6E6646B404c3C7d11fa39D/logo.png",
            resourceId: "0x0000000000000000000000B999Ea90607a826A3E6E6646B404c3C7d11fa39D02"
          },
        ],
      },
    ],
  },
};
