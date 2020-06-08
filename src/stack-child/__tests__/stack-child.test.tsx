import React from 'react';
import {renderToFragmentWithTheme} from '../../test/test-utils';
import {Stack} from '../../stack';
import {Tag} from '../../tag/tag';
import {StackChild} from '..';

describe('StackChild', () => {
  test(`renders within a Stack with custom order`, () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      children: [
        <StackChild order={2}>
          <Tag>child 1</Tag>
        </StackChild>,
        <StackChild order={3}>
          <Tag>child 2</Tag>
        </StackChild>,
        <StackChild order={1}>
          <Tag>child 3</Tag>
        </StackChild>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });

  test('renders within a Stack, when Stack is a list', () => {
    const fragment = renderToFragmentWithTheme(Stack, {
      list: true,
      children: [
        <StackChild order={2}>
          <Tag>child 1</Tag>
        </StackChild>,
        <StackChild order={3}>
          <Tag>child 2</Tag>
        </StackChild>,
        <StackChild order={1}>
          <Tag>child 3</Tag>
        </StackChild>,
      ],
    });

    expect(fragment).toMatchSnapshot();
  });
});
