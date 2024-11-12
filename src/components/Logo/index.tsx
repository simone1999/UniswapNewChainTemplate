import React, { useState } from 'react';
import { HelpCircle } from 'react-feather';
import { ImageProps } from 'rebass';
import Image from "next/image";

const BAD_SRCS: { [tokenAddress: string]: true } = {};

export interface LogoProps extends Pick<ImageProps, 'style' | 'alt' | 'className'> {
  srcs: string[];
}

/**
 * Renders an image by sequentially trying a list of URIs, and then eventually a fallback triangle alert
 */
export default function Logo({ srcs, alt, size, ...rest }: LogoProps & { size: string }) {
  const [, refresh] = useState<number>(0);

  const src: string | undefined = srcs.find((src) => !BAD_SRCS[src]);

  if (src) {
    return (
      <Image
        {...rest}
        alt={alt}
        src={src}
        width={size}
        height={size}
        onError={() => {
          if (src) BAD_SRCS[src] = true;
          refresh((i) => i + 1);
        }}
      />
    );
  }

  return <HelpCircle {...rest} />;
}
