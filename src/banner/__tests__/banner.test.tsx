import React from 'react';
import {Banner} from '../banner';
import {BannerProps} from '../types';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {TextBlock} from '../../text-block';

const BannerMessage = <TextBlock>test banner message</TextBlock>;

describe('Banner', () => {
  test('renders with default props', () => {
    const props: BannerProps = {
      children: BannerMessage,
    };
    const fragment = renderToFragmentWithTheme(Banner, props) as any;

    expect(fragment).toMatchSnapshot();
  });
});