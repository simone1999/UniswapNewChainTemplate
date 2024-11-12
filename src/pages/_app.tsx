import React, {StrictMode, useEffect} from 'react';
import '../i18n';
import 'inter-ui';
import styled from 'styled-components';
import Header from '../components/Header';
import Polling from '../components/Header/Polling';
import Popups from '../components/Popups';
import Web3ReactManager from '../components/Web3ReactManager';
import {AppProps} from "next/app";
import ListsUpdater from "../state/lists/updater";
import UserUpdater from "../state/user/updater";
import ApplicationUpdater from "../state/application/updater";
import TransactionUpdater from "../state/transactions/updater";
import MulticallUpdater from "../state/multicall/updater";
import ThemeProvider, {FixedGlobalStyle, ThemedGlobalStyle} from "../theme";
import { Web3ReactProvider } from '@web3-react/core';
import Web3ProviderNetwork from '../components/Web3ProviderNetwork';
import getLibrary from "../utils/getLibrary";
import {Provider} from "react-redux";
import store from "../state";
import Head from "next/head";

const AppWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: flex-start;
    overflow-x: hidden;
`;

const HeaderWrapper = styled.div`
    ${({ theme }) => theme.flexRowNoWrap}
    width: 100%;
    justify-content: space-between;
`;

const BodyWrapper = styled.div`
    width: 100%;
    padding: 3rem 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    overflow-y: auto;
    overflow-x: hidden;
    z-index: 1;
`;

const BodyWrapperInner = styled.div`
  position: relative;
  max-width: 500px;
  width: 100%;
  padding: 0.2rem;
  border-radius: 1.6rem;
  box-shadow: rgba(0, 0, 0, 0.01) 0 0 1px, rgba(0, 0, 0, 0.04) 0 4px 8px, rgba(0, 0, 0, 0.04) 0 16px 24px,
    rgba(0, 0, 0, 0.01) 0 24px 32px;
  background: ${({ theme }) => theme.bg1};

  ${({ theme }) => theme.mediaWidth.upToExtraSmall`
    width: 90%;
  `}
`;

function Updaters() {
  return (
    <>
      <ListsUpdater />
      <UserUpdater />
      <ApplicationUpdater />
      <TransactionUpdater />
      <MulticallUpdater />
    </>
  );
}

function MyApp({ Component, pageProps }: AppProps) {

  useEffect(() => {
    if (typeof window !== 'undefined' && 'ethereum' in window) {
      (window.ethereum as any).autoRefreshOnNetworkChange = false;
    }
  }, []);

  return (
    <>
      <FixedGlobalStyle />
      <StrictMode>
        <Web3ReactProvider getLibrary={getLibrary}>
          <Web3ProviderNetwork getLibrary={getLibrary}>
            <Provider store={store}>
              <Updaters />
              <ThemeProvider>
                <ThemedGlobalStyle />
                <AppWrapper>
                  <Head>
                    <title>IceCreamSwap Quai</title>
                    <meta name="viewport" content="width=device-width, initial-scale=1"/>
                  </Head>
                  <HeaderWrapper>
                    <Header/>
                  </HeaderWrapper>

                  <BodyWrapper>
                    <Popups />
                    <Polling />
                    <Web3ReactManager>
                      <BodyWrapperInner>
                        <Component {...pageProps} />
                      </BodyWrapperInner>
                    </Web3ReactManager>
                  </BodyWrapper>
                </AppWrapper>
              </ThemeProvider>
            </Provider>
          </Web3ProviderNetwork>
        </Web3ReactProvider>
      </StrictMode>
    </>
  );
}

export default MyApp;