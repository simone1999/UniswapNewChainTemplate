import { Currency, ETHER, Token, ChainId as ChainIds, ChainId } from "@uniswap/sdk";
import React, { useMemo } from 'react';
import styled from 'styled-components';

import EthereumLogo from '../../assets/images/ethereum-logo.png';
import BitgertLogo from '../../assets/images/bitgert-logo.png';
import DogeLogo from '../../assets/images/doge-logo.png';
import DokenLogo from '../../assets/images/doken.png';
import FuseLogo from '../../assets/images/fuse.svg';
import useHttpLocations from '../../hooks/useHttpLocations';
import { useActiveWeb3React } from '../../hooks';
import { WrappedTokenInfo } from '../../state/lists/hooks';
import Logo from '../Logo';
import { NETWORK_LABELS } from "../Header";

const getTokenLogoURL = (address: string, chainId: ChainId) =>
  `https://raw.githubusercontent.com/simone1999/trustwallet-assets/master/blockchains/${NETWORK_LABELS[chainId]?.toLowerCase()}/assets/${address}/logo.png`;

const StyledEthereumLogo = styled.img<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
  border-radius: 24px;
`;

const StyledLogo = styled(Logo)<{ size: string }>`
  width: ${({ size }) => size};
  height: ${({ size }) => size};
  border-radius: ${({ size }) => size};
  box-shadow: 0px 6px 10px rgba(0, 0, 0, 0.075);
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
      return <StyledEthereumLogo src={BitgertLogo} size={size} style={style} />;
    } else if (chainId === ChainIds.DOGE) {
      return <StyledEthereumLogo src={DogeLogo} size={size} style={style} />;
    } else if (chainId === ChainIds.DOKEN) {
      return <StyledEthereumLogo src={DokenLogo} size={size} style={style} />;
    } else if (chainId === ChainIds.FUSE) {
      return <StyledEthereumLogo src={FuseLogo} size={size} style={style} />;
    } else {
      return <StyledEthereumLogo src={EthereumLogo} size={size} style={style} />;
    }
  }

  return <StyledLogo size={size} srcs={srcs} alt={`${currency?.symbol ?? 'token'} logo`} style={style} />;
}
