import { useRouter } from 'next/router';
import { ParsedQs, parse } from 'qs';
import { useMemo } from 'react';

export default function useParsedQueryString(): ParsedQs {
  const { asPath } = useRouter();
  const search = asPath.split('?')[1] || '';

  return useMemo(
    () => (search ? parse(search, { parseArrays: false, ignoreQueryPrefix: true }) : {}),
    [search]
  );
}
