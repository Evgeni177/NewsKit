import React from 'react';
import {newskitLightTheme, compileTheme, Block} from 'newskit';

import {FoundationPageTemplate} from '../../templates/foundation-page-template';
import {ComponentPageCell} from '../../components/layout-cells';
import {
  ContentSection,
  ContentPrimary,
  ContentSecondary,
} from '../../components/content-structure';
import {LayoutProps} from '../../components/layout';
import {
  Illustration,
  getIllustrationComponent,
} from '../../components/illustrations/illustration-loader';
import {Table} from '../../components/table';
import {Code} from '../../components/code';
import {Link} from '../../components/link';
import {MediaList} from '../../components/media-list';
import {InlineCode} from '../../components/markdown-elements';

const compiledNewskitLightTheme = compileTheme(newskitLightTheme);

const RANGE_DESCRIPTION: {[key: string]: string} = {
  xs: '0-479',
  sm: '480-767',
  md: '768-1023',
  lg: '1024-1439',
  xl: '1440>',
};

const USAGE_DESCRIPTION: {[key: string]: string | JSX.Element} = {
  xs: 'Small handset, large handset',
  sm: 'Large handset, small tablet',
  md: 'Large tablet',
};

const LANDSCAPE_USAGE_DESCRIPTION: {[key: string]: string | JSX.Element} = {
  sm: 'Small handset',
  md: 'Large handset, small tablet',
  lg: 'Large tablet',
  xl: 'Large tablet',
};

const bps = compiledNewskitLightTheme.breakpoints;

const breakpointsRows = Object.entries(bps).map(([tokenName, tokenValue]) => ({
  token: tokenName,
  breakpoint: tokenValue,
  range: RANGE_DESCRIPTION[tokenName] || '',
  usage: USAGE_DESCRIPTION[tokenName] || '',
  landscapeUsage: LANDSCAPE_USAGE_DESCRIPTION[tokenName] || '',
}));

export default (layoutProps: LayoutProps) => (
  <FoundationPageTemplate
    headTags={{
      title: 'Breakpoints | Newskit design system',
      description:
        'Breakpoints set a visual point on a screen to adapt the design of content (responsive design), ensuring a consistent, optimised experience across different screen widths.',
    }}
    layoutProps={layoutProps}
    pageIntroduction={{
      type: 'Foundations',
      name: 'Breakpoints',
      hero: {
        illustration: 'foundations/breakpoints/hero',
      },
      introduction: `Breakpoints set a visual point on a screen to adapt the design of content (responsive design), ensuring a consistent, optimised experience across different screen widths.`,
    }}
    featureCard={{
      title: 'Colours',
      description:
        'Colour is key to expressing brand and identity but it also plays an important role in conveying meaning to a user.',
      href: '/foundations/colours',
    }}
  >
    <ComponentPageCell>
      <ContentSection sectionName="overview">
        <ContentPrimary
          id="overview"
          toc="Overview"
          headline="Overview"
          description={
            <>
              There are five breakpoints available and the breakpoint range,
              margins and gutters can be customised.
              <br />
              <br />
              The default values are outlined below:
            </>
          }
        >
          <Block stylePreset="imageRoundedMedium">
            <Illustration path="foundations/breakpoints/overview" />
          </Block>
        </ContentPrimary>

        <ContentSecondary>
          <Table
            columns={[
              'Token',
              'Breakpoint',
              'Range',
              'Usage',
              'Landscape Usage',
            ]}
            rows={breakpointsRows}
          />
        </ContentSecondary>

        <ContentSecondary description="Default breakpoints can be overriden in the theme.">
          <Code>
            {`
        import {createTheme} from 'newskit'; 
        
        const theme = createTheme({ 
            name: 'theme-with-custom-breakpoints', 
            overrides: { 
                breakpoints: { 
                    xs: 0, // 0-359 
                    sm: 360, 
                    md: 540, 
                    lg: 720, 
                    xl: 1080, 
                } 
            }, 
        });
        `}
          </Code>
        </ContentSecondary>

        <ContentSecondary description="All breakpoints are fluid until the maximum grid width of 1920px (default), at this point the grid becomes fixed.">
          <MediaList
            cardsLayout={{
              xs: 'vertical',
              sm: 'vertical',
              md: 'horizontal',
              lg: 'horizontal',
              xl: 'horizontal',
            }}
            layout="1-span"
            cards={[
              {
                title: 'Fluid',
                description: `
                  Fluid layouts are calculated to their relative size, and
                  stretch as the viewport is resized. For example, if you set
                  the width of your layout to 100% width, each column will only
                  be calculated to its relative size., and will stretch as the
                  browser is resized.
                  `,
                media: getIllustrationComponent(
                  'foundations/breakpoints/fluid',
                ),
              },
              {
                title: 'Fixed',
                description: `
                  Fixed layouts do not respond to the size of the screen (viewport) but remain at a fixed width at a specific numerical value e.g. 1920px.
                  `,
                media: getIllustrationComponent(
                  'foundations/breakpoints/fixed',
                ),
              },
            ]}
          />
        </ContentSecondary>

        <ContentSecondary
          showSeparator
          description={
            <>
              Max-width defaults can be overidden in the{' '}
              <Link
                href="/components/grid/"
                overrides={{typographyPreset: 'editorialParagraph030'}}
              >
                Grid & Cell component.
              </Link>
            </>
          }
        />
      </ContentSection>

      <ContentSection sectionName="usage">
        <ContentPrimary
          id="usage"
          toc="Using breakpoints"
          headline="Using breakpoints"
          description="NewsKit enables the appearance and behaviour of UI elements to change at different breakpoints."
        >
          <Block stylePreset="imageRoundedMedium">
            <Illustration path="foundations/breakpoints/usage" />
          </Block>
        </ContentPrimary>

        <ContentSecondary
          description={
            <>
              In the codebase, changing the appearance and behaviour of UI
              elements can be achieved by utilising the{' '}
              <Link href="/foundations/theming/component-defaults/">
                component defaults and overrides system
              </Link>{' '}
              to override design tokens at specific breakpoints. For example,
              setting different typography presets at different breakpoints, can
              make the text larger on bigger devices than on smaller devices.
              <br />
              <br />
              Properties that support this are specified in the Props sections
              of the component documentation as using the generic{' '}
              <InlineCode>MQ</InlineCode> type, i.e.{' '}
              <InlineCode>{`MQ<string>`}</InlineCode>.
              <br />
              <br />
              This is done by passing a single string token to be used across
              all breakpoints, or an object for a combination of multiple
              breakpoints - comprising of breakpoint keys and token values.
            </>
          }
        />

        <ContentSecondary
          showSeparator
          headline="Example"
          description="This example below shows different typography presets being used at different breakpoint."
        >
          <Code>{`
    typographyPreset: {
        xs: 'editorialHeadline010',
        md: 'editorialHeadline020',
        lg: 'editorialHeadline030',
      }
    `}</Code>
        </ContentSecondary>
      </ContentSection>
    </ComponentPageCell>
  </FoundationPageTemplate>
);