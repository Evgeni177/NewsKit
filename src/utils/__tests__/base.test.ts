import {createTheme, compileTheme} from '../../theme';
import {getSizingCssFromTheme} from '../style/getters';
import {getXFromTheme} from '../style/base';
import {
  getResponsiveSize,
  getResponsiveSpace,
  getResponsiveMotion,
  getResponsiveBorder,
} from '../style/get-defaults';

describe('getXFromTheme', () => {
  const theme: any = compileTheme(
    createTheme({
      name: 'test-theme',
      overrides: {
        componentDefaults: {
          tabs: {
            sizing: {xs: 'sizing010', sm: 'sizing020', md: 'sizing030'},
            width: '100%',
            size: 'sizing010',
            space: 'space010',
            motionDuration: 'motionDuration030',
            weight: 'borderWidth020',
          },
        },
      },
    }),
  );

  test('getXFromTheme with non MQ value', () => {
    const result = getXFromTheme('sizing')('width', 'sizing050')({theme});
    expect(result).toEqual({width: '24px'});
  });
  test('getXFromTheme with MQ value', () => {
    const result = getXFromTheme('sizing')('width', {
      xs: 'sizing010',
      sm: 'sizing020',
      md: 'sizing030',
    })({theme});
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {width: '4px'},
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        width: '8px',
      },
      '@media screen and (min-width: 768px)': {width: '12px'},
    });
  });

  test('getXFromTheme with non MQ and callback', () => {
    const cb = (value: string) => ({padding: `${value} 0`, width: value});
    const result = getXFromTheme('sizing')(cb, 'sizing050')({theme});
    expect(result).toEqual({width: '24px', padding: '24px 0'});
  });
  test('getXFromTheme with MQ and callback', () => {
    const cb = (value: string) => ({padding: `${value} 0`, width: value});
    const mq = {
      xs: 'sizing010',
      sm: 'sizing020',
      md: 'sizing030',
    };
    const result = getXFromTheme('sizing')(cb, mq)({theme});
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        width: '4px',
        padding: '4px 0',
      },
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        width: '8px',
        padding: '8px 0',
      },
      '@media screen and (min-width: 768px)': {
        width: '12px',
        padding: '12px 0',
      },
    });
  });
  test('getXFromTheme with no value and callback', () => {
    const result = getXFromTheme('sizing')('width', '')({theme});
    expect(result).toEqual('');
  });

  test('getSizingCssFromTheme non MQ', () => {
    const result = getSizingCssFromTheme(
      'width',
      'sizing050',
    )({
      theme,
    });
    expect(result).toEqual({width: '24px'});
  });

  test('getSizingCssFromTheme with MQ', () => {
    const result = getSizingCssFromTheme('width', {
      xs: 'sizing010',
      sm: 'sizing020',
      md: 'sizing030',
    })({
      theme,
    });
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {width: '4px'},
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        width: '8px',
      },
      '@media screen and (min-width: 768px)': {width: '12px'},
    });
  });
  test('getSizingCssFromTheme non MQ and callback', () => {
    const cb = (value: string) => ({width: value});
    const result = getSizingCssFromTheme(
      cb,
      'sizing050',
    )({
      theme,
    });
    expect(result).toEqual({width: '24px'});
  });

  test('getSizingCssFromTheme with MQ and callback', () => {
    const cb = (value: string) => ({width: value});
    const result = getSizingCssFromTheme(cb, {
      xs: 'sizing010',
      sm: 'sizing020',
      md: 'sizing030',
    })({
      theme,
    });
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {width: '4px'},
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        width: '8px',
      },
      '@media screen and (min-width: 768px)': {width: '12px'},
    });
  });

  test('getResponsiveSize non MQ with Plain css value', () => {
    const result = getResponsiveSize(
      'minWidth',
      'tabs',
      '',
      'width',
    )({
      theme,
    });
    expect(result).toEqual({minWidth: '100%'});
  });

  test('getResponsiveSize non MQ with Token value', () => {
    const result = getResponsiveSize(
      'minWidth',
      'tabs',
      '',
      'size',
    )({
      theme,
    });
    expect(result).toEqual({minWidth: '4px'});
  });

  test('getResponsiveSize non MQ with token value and callback', () => {
    const cb = (value: string) => ({minWidth: value});
    const result = getResponsiveSize(
      cb,
      'tabs',
      '',
      'size',
    )({
      theme,
    });
    expect(result).toEqual({minWidth: '4px'});
  });

  test('getResponsiveSize with MQ', () => {
    const result = getResponsiveSize(
      'minWidth',
      'tabs',
      '',
      'sizing',
    )({
      theme,
    });
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        minWidth: '4px',
      },
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        minWidth: '8px',
      },
      '@media screen and (min-width: 768px)': {
        minWidth: '12px',
      },
    });
  });

  test('getResponsiveSize with MQ and callback', () => {
    const cb = (value: string) => ({minWidth: value});
    const result = getResponsiveSize(
      cb,
      'tabs',
      '',
      'sizing',
    )({
      theme,
    });
    expect(result).toEqual({
      '@media screen and (max-width: 479px)': {
        minWidth: '4px',
      },
      '@media screen and (min-width: 480px) and (max-width: 767px)': {
        minWidth: '8px',
      },
      '@media screen and (min-width: 768px)': {
        minWidth: '12px',
      },
    });
  });

  test('getResponsiveSpace', () => {
    const result = getResponsiveSpace(
      'minWidth',
      'tabs',
      '',
      'space',
    )({
      theme,
    });
    expect(result).toEqual({minWidth: '4px'});
  });

  test('getResponsiveBorder', () => {
    const result = getResponsiveBorder(
      'border',
      'tabs',
      '',
      'weight',
    )({
      theme,
    });
    expect(result).toEqual({border: '2px'});
  });

  test('getResponsiveMotion', () => {
    const result = getResponsiveMotion(
      'transitionTime',
      'tabs',
      '',
      'motionDuration',
    )({
      theme,
    });
    expect(result).toEqual({transitionTime: '300ms'});
  });
});
