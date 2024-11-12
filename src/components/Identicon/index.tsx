import React, { useEffect, useRef } from 'react';
import styled from 'styled-components';
import { useActiveWeb3React } from '../../hooks';

const StyledIdenticonContainer = styled.div`
    height: 1rem;
    width: 1rem;
    border-radius: 1.125rem;
    background-color: ${({ theme }) => theme.bg4};
`;

export default function Identicon() {
  const ref = useRef<HTMLDivElement>();
  const { account } = useActiveWeb3React();

  useEffect(() => {
    if (account && ref.current) {
      // Dynamically import jazzicon only on the client side
      import('jazzicon').then((Jazzicon) => {
        ref.current!.innerHTML = '';
        ref.current!.appendChild(Jazzicon.default(16, parseInt(account.slice(2, 10), 16)));
      });
    }
  }, [account]);

  return <StyledIdenticonContainer ref={ref as any} />;
}
