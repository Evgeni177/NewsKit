import React from 'react';
import {Cell, Grid, Link, Paragraph} from 'newskit';
import Layout, {LayoutProps} from '../../components/layout';
import {PageIntroduction} from '../../components/page-introduction';
import {SectionIntroduction} from '../../components/section-introduction';
import {Separator} from '../../components/separator';
import {MediaList} from '../../components/media-list';

const cardContents = [
  {
    title: 'User focusse',
    subtitle:
      'We don’t design for screens, we design for people; whether the product teams using our components or the customers using the end products.',
    description:
      'We establish insights on our user needs through qualitative and quantitative data from research. We continually test our components and the overall design system to ensure it meets these needs.',
  },
  {
    title: 'Inclusive',
    subtitle:
      'Every design decision has the potential to include or exclude users. To ensure our solutions meet the needs of as many users as possible we take an inclusive first, design approach. ',
    description:
      'The default components are accessible to WCAG 2.1 AA standards. We strive for clarity around everything we do, simplifying the complex. We use simple language, avoid acronyms and offer more detail when required. Our users should always be able to understand and act with confidence.',
  },
  {
    title: 'Essential',
    subtitle:
      'Every component serves a user’s need that is shared by multiple services or products.',
    description:
      "We don't create new solutions to solve problems that already exist in the system unless they are intended to replace them. We never build something 'just in case'. Every design decision and component has a clear purpose and contributes to a larger purpose; if it doesn’t, it shouldn’t be there.",
  },
  {
    title: 'Collaborative',
    subtitle: 'Great ideas come from everywhere.',
    description:
      'Everyone is encouraged to contribute. We share everything we are doing at every step in the process: designs, code, ideas, successes or failures. We encourage and seek feedback, suggestions and contributions. We all take responsibility for the output of the team and reject ownership.',
  },
  {
    title: 'Consistent',
    subtitle:
      'Ensuring everything reusable and shareable instead of constantly reinventing different solutions to solve the same need. ',
    description:
      'We create familiarity across our products by using the same solution to the same problem.',
  },
  {
    title: 'Robust',
    subtitle:
      'Our users require a design system that they can trust and rely upon. ',
    description:
      'We thoroughly consider, design, develop and test solutions before they are released for users to consume. Whenever we make a change to the design system, we communicate this through well-structured documentation.',
  },
];

const cardStylePresets = [
  'cardContainerNonInteractive030',
  'cardContainerNonInteractive030',
  'cardContainerNonInteractive020',
  'cardContainerNonInteractive020',
  'cardContainerNonInteractive010',
  'cardContainerNonInteractive010',
];

const cardStyles = cardStylePresets.map(preset => ({
  card: {
    stylePreset: preset,
    teaserContainer: {
      spaceInset: {
        xs: 'spaceInset040',
        sm: 'spaceInset040',
        lg: 'spaceInset050',
        xl: 'spaceInset050',
      },
    },
  },
  title: {
    stylePreset: 'inkWhiteSubtle',
    typographyPreset: 'utilityLabel020',
  },
  subtitle: {
    stylePreset: 'inkWhiteContrast',
    typographyPreset: 'editorialHeadline030',
  },
  description: {
    stylePreset: 'inkWhiteSubtle',
    typographyPreset: 'editorialParagraph020',
  },
}));

const cardsForPage = cardContents.map((content, index) => ({
  ...content,
  styles: {...cardStyles[index]},
}));

export default (layoutProps: LayoutProps) => (
  //  TODO: remove path hack after all docs pages are done - https://nidigitalsolutions.jira.com/browse/PPDSE-312
  <Layout {...layoutProps} path={`${layoutProps.path}-new`}>
    <Grid lgMargin="sizing000" xsRowGutter="sizing000">
      <PageIntroduction
        type="About"
        name="Introduction"
        introduction="NewsKit is News UK’s design system. It provides interactive building blocks and guidelines for crafting cohesive digital product interfaces and accelerating development.
      build better products faster."
        hero={{src: '/static/roadmap-hero.svg', alt: 'introduction-hero-image'}}
      />
      <SectionIntroduction title="Introduction" cellProps={{lg: 8}}>
        <>
          <Paragraph>
            The design system aims to improve the consistency and quality of
            digital products and experiences, enabling the design and
            development process to be more efficient and focused, establishing a
            common language between designer and engineer, and providing clear,
            considered guidance around design and engineering best practices.
          </Paragraph>
          <br />
          <Paragraph>
            NewsKit currently serves a wide range of designers and developers at
            News UK building digital products and experiences with a view to
            becoming publicly open source in the future.
          </Paragraph>
          <br />
          <Paragraph>
            It is maintained by a core centralised team at News UK with
            contributions from other product teams to evolve and improve
            NewsKit.
          </Paragraph>
          <br />
          <Paragraph>
            The UI library is built using{' '}
            <Link href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2349139141/Designing+with+NewsKit+-+Web+Documentation">
              Figma for design
            </Link>{' '}
            and{' '}
            <Link href="https://nidigitalsolutions.jira.com/wiki/spaces/NPP/pages/2348942613/Engineering+with+NewsKit+-+Web+Documentation">
              React for the codebase.
            </Link>
          </Paragraph>
        </>
      </SectionIntroduction>
      <Cell xs={12} md={10} lg={8} mdOffset={1}>
        <Separator />
      </Cell>
      <SectionIntroduction title="Principles" cellProps={{lg: 8}}>
        NewsKit design system and the NewsKit team is guided by a set of
        principles.
      </SectionIntroduction>
      <MediaList cards={cardsForPage} />
    </Grid>
  </Layout>
);
