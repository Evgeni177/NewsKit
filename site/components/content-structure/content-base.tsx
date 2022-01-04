import {Block, Divider, TextBlock} from 'newskit';
import React from 'react';
import {ContentBaseProps} from './types';

export const ContentBase: React.FC<ContentBaseProps> = ({
  overrides,
  headline,
  description,
  children,
  toc,
  id,
  showSeparator: showDivider,
}) => {
  const {
    headline: {spaceStack: headlineSpace = '', ...headlineOverrides} = {},
    description: {
      spaceStack: descriptionSpace = '',
      ...descriptionOverrides
    } = {},
    separator: separatorOverrides,
  } = overrides || {};

  const tocAttributes = {
    id,
    'data-toc-indexed': toc || headline,
  };
  const isPrimary = Boolean(headline && toc && id);

  return (
    <>
      {/* headline container */}
      {headline && (
        <>
          <TextBlock
            {...(isPrimary ? tocAttributes : {})}
            {...headlineOverrides}
          >
            {headline}
          </TextBlock>
          {(description || children) && <Block spaceStack={headlineSpace} />}
        </>
      )}

      {/* description container */}
      {description && (
        <>
          <TextBlock as="p" {...descriptionOverrides}>
            {description}
          </TextBlock>
          {children && <Block spaceStack={descriptionSpace} />}
        </>
      )}

      {/* react Container */}
      {children && <>{children}</>}

      {/* separator */}
      <Block {...separatorOverrides} />

      {showDivider && (
        <Block {...separatorOverrides}>
          <Divider />
        </Block>
      )}
    </>
  );
};