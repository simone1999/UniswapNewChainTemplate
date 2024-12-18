import { Currency, ETHER, Token, ChainId as ChainIds, ChainId } from "@uniswap/sdk";
import React, { useMemo } from 'react';
import styled from 'styled-components';

import useHttpLocations from '../../hooks/useHttpLocations';
import { useActiveWeb3React } from '../../hooks';
import { WrappedTokenInfo } from '../../state/lists/hooks';
import Logo from '../Logo';
import { NETWORK_LABELS } from "../Header";
import Image from "next/image";

const getTokenLogoURL = (address: string, chainId: ChainId) =>
  `https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/${NETWORK_LABELS[chainId]?.toLowerCase()}/assets/${address}/logo.png`;

const StyledEthereumLogoInner = styled.div<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
  overflow: hidden; /* Ensure the image fits within the rounded borders */
  display: inline-block;
`;
const StyledEthereumLogo = ({ src, size, style }: { src: string; size: string; style?: React.CSSProperties }) => (
  <StyledEthereumLogoInner size={size} style={style}>
    <Image src={src} alt="Ethereum Logo" width={size} height={size} objectFit="contain" />
  </StyledEthereumLogoInner>
);

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.075);
  background-color: ${({ theme }) => theme.white};
`;

export default function CurrencyLogo({
  currency,
  size = '24px',
  style,
}: {
  currency?: Currency;
  size?: string;
  style?: React.CSSProperties;
}) {
  const uriLocations = useHttpLocations(currency instanceof WrappedTokenInfo ? currency.logoURI : undefined);
  const { chainId } = useActiveWeb3React();

  const srcs: string[] = useMemo(() => {
    if (currency === ETHER) return [];

    if (currency instanceof Token) {
      if (currency instanceof WrappedTokenInfo) {
        return [...uriLocations, getTokenLogoURL(currency.address, currency.chainId)];
      }

      return [getTokenLogoURL(currency.address, currency.chainId)];
    }
    return [];
  }, [currency, uriLocations]);

  if (currency === ETHER) {
    if (chainId === ChainIds.BITGERT) {
      return <StyledEthereumLogo src={"/images/bitgert-logo.png"} size={size} style={style} />;
    } else if (chainId === ChainIds.DOGE) {
      return <StyledEthereumLogo src={"/images/doge-logo.png"} size={size} style={style} />;
    } else if (chainId === ChainIds.DOKEN) {
      return <StyledEthereumLogo src={"assets/images/doken.png"} size={size} style={style} />;
    } else if (chainId === ChainIds.FUSE) {
      return <StyledEthereumLogo src={"/images/fuse.svg"} size={size} style={style} />;
    } else if (chainId === ChainIds.QUAI_TESTNET) {
      return <StyledEthereumLogo src={"/images/quai-logo.png"} size={size} style={style} />;
    } else {
      return <StyledEthereumLogo src={"/images/ethereum-logo.png"} size={size} style={style} />;
    }
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />;
}
