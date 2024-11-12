import React from 'react';
import styled from 'styled-components';
import { darken } from 'polished';
import { useTranslation } from 'react-i18next';
import Link from 'next/link';

import { ArrowLeft } from 'react-feather';
import { RowBetween } from '../Row';
// import QuestionHelper from '../QuestionHelper'
import Settings from '../Settings';
import { useDispatch } from 'react-redux';
import { AppDispatch } from 'state';
import { resetMintState } from 'state/mint/actions';

const Tabs = styled.div`
    ${({ theme }) => theme.flexRowNoWrap}
    align-items: center;
    border-radius: 3rem;
    justify-content: space-evenly;
`;

const StyledNavLink = styled.a<{ isActive: boolean }>`
    ${({ theme }) => theme.flexRowNoWrap}
    align-items: center;
    justify-content: center;
    height: 3rem;
    border-radius: 3rem;
    outline: none;
    cursor: pointer;
    text-decoration: none;
    color: ${({ theme, isActive }) => (isActive ? theme.text1 : theme.text3)};
    font-size: 20px;
    font-weight: ${({ isActive }) => (isActive ? 500 : 'normal')};

    &:hover,
    &:focus {
        color: ${({ theme }) => darken(0.1, theme.text1)};
    }
`;

const ActiveText = styled.div`
    font-weight: 500;
    font-size: 20px;
`;

const StyledArrowLeft = styled(ArrowLeft)`
    color: ${({ theme }) => theme.text1};
`;

export function SwapPoolTabs({ active }: { active: 'swap' | 'pool' }) {
  const { t } = useTranslation();
  return (
    <Tabs style={{ marginBottom: '20px', display: 'none' }}>
      <Link href="/swap" passHref>
        <StyledNavLink id="swap-nav-link" isActive={active === 'swap'}>
          {t('Swap')}
        </StyledNavLink>
      </Link>
      <Link href="/pool" passHref>
        <StyledNavLink id="pool-nav-link" isActive={active === 'pool'}>
          {t('Liquidity')}
        </StyledNavLink>
      </Link>
    </Tabs>
  );
}

export function FindPoolTabs() {
  return (
    <Tabs>
      <RowBetween style={{ padding: '1rem 1rem 0 1rem' }}>
        <Link href="/pool" passHref>
          <StyledArrowLeft />
        </Link>
        <ActiveText>Import Pool</ActiveText>
        <Settings />
      </RowBetween>
    </Tabs>
  );
}

export function AddRemoveTabs({ adding, creating }: { adding: boolean; creating: boolean }) {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <Tabs>
      <RowBetween style={{ padding: '1rem 1rem 0 1rem' }}>
        <Link href="/pool" passHref>
          <a
            onClick={() => {
              if (adding) dispatch(resetMintState());
            }}
          >
            <StyledArrowLeft />
          </a>
        </Link>
        <ActiveText>{creating ? 'Create a pair' : adding ? 'Add Liquidity' : 'Remove Liquidity'}</ActiveText>
        <Settings />
      </RowBetween>
    </Tabs>
  );
}
