import * as React from 'react';
import {
  styled,
  ThemeProvider,
  DateTime,
  Headline,
  TextBlock,
  P,
  TagSize,
  Grid,
  Cell,
  createTheme,
  Image,
  getMediaQueryFromTheme,
  getSizingFromTheme,
  getTypographyPresetFromTheme,
  SizingKeys,
  getColorFromTheme,
  IconButton,
  ButtonSize,
  Facebook,
  Twitter,
  WhatsApp,
  Stack,
  Flow,
  Tag,
  ShareBar,
} from 'newskit';

import Layout from '../../components/layout';
import PageTitle from '../../components/page-title';

const LayoutContainer = styled.div<{
  marginBottom?: SizingKeys;
  mdMarginBottom?: SizingKeys;
}>`
  margin-bottom: ${getSizingFromTheme(undefined, 'marginBottom')};

  ${getMediaQueryFromTheme('md')} {
    margin-bottom: ${getSizingFromTheme(undefined, 'mdMarginBottom')};
  }
`;

const TagListContainer = styled.div`
  display: flex;
  justify-content: center;
  border-top: 1px solid ${getColorFromTheme('interface040')};
  border-bottom: ${({theme}) => `1px solid ${theme.colors.interface040}`};
  margin-bottom: ${getSizingFromTheme('sizing080')};
  padding: 20px 0 16px 0;
`;

const AuthorContainer = styled.div`
  display: flex;
`;

const StyledImage = styled(Image)`
  border-radius: 50%;
  height: ${getSizingFromTheme('sizing080')};
  width: ${getSizingFromTheme('sizing080')};
`;

const AuthorImageContainer = styled.div`
  width: 58px;
`;

const AuthorName = styled.span`
  ${getTypographyPresetFromTheme('utilityBody010')};
  display: block;
`;

const Description = styled.span`
  ${getTypographyPresetFromTheme('utilitySubheading050')};
  display: block;
`;

const newsKitDaily = createTheme({
  name: 'newskit-daily',
  overrides: {
    componentDefaults: {
      grid: {
        maxWidth: 1280,
        rowGutters: {
          md: 16,
          lg: 16,
        },
      },
    },
  },
});

const Article: React.FC<{
  toggleTheme: () => void;
  themeMode: string;
}> = ({toggleTheme, themeMode}) => (
  <React.Fragment>
    <PageTitle title="The NewsKit Daily" />
    <ThemeProvider theme={newsKitDaily}>
      <Layout
        path="/pages/article"
        toggleTheme={toggleTheme}
        themeMode={themeMode}
      >
        <Grid>
          <Cell xs={12}>
            <Headline>
              Stocking A Commercial Kitchen Finding High Quality Cookware Online
            </Headline>
          </Cell>
          <Cell xs={12}>
            <LayoutContainer marginBottom="sizing020">
              <Description>
                Refrigerated Treats Make For A Cool Event
              </Description>
            </LayoutContainer>
          </Cell>

          <Cell xs={12} md={6}>
            <AuthorContainer>
              <AuthorImageContainer>
                <StyledImage
                  height="414"
                  width="736"
                  src="https://via.placeholder.com/736x414"
                  alt="Author image"
                />
              </AuthorImageContainer>
              <div>
                <AuthorName>Nick Dorman</AuthorName>
                <DateTime
                  date="2019-10-30T13:18:17Z"
                  dateFormat="d MMMM yyyy"
                />
              </div>
            </AuthorContainer>
          </Cell>

          <Cell xs={12} md={6}>
            <LayoutContainer marginBottom="sizing020">
              <ShareBar>
                <IconButton
                  size={ButtonSize.Large}
                  overrides={{
                    stylePreset: 'buttonSocialTwitter',
                  }}
                >
                  <Twitter />
                </IconButton>
                <IconButton
                  size={ButtonSize.Large}
                  overrides={{
                    stylePreset: 'buttonSocialFacebook',
                  }}
                >
                  <Facebook />
                </IconButton>
                <IconButton
                  size={ButtonSize.Large}
                  overrides={{
                    stylePreset: 'buttonSocialWhatsapp',
                  }}
                >
                  <WhatsApp />
                </IconButton>
              </ShareBar>
            </LayoutContainer>
          </Cell>

          <Cell xs={12}>
            <LayoutContainer marginBottom="sizing020">
              <Image
                src="https://via.placeholder.com/736x414"
                alt="Placeholder image"
                height="414"
                width="736"
              />
            </LayoutContainer>
          </Cell>

          <Cell xs={12}>
            <LayoutContainer marginBottom="sizing060">
              <TextBlock>
                <P>
                  Chopped, sliced or wedged, hard-cooked eggs are the basis of
                  egg salad and add protein and a happy glow to tossed and
                  composed salads and casseroles.
                </P>
                <P>
                  Chopped yolks and whites comprise Eggs Goldenrod and Polonaise
                  Sauce. Whole hard-cooked eggs become comforting, familiar
                  deviled eggs or zingy, newly rediscovered ickled eggs. Simply
                  sprinkled with a herb or more fancily coated in sausage for
                  Scotch eggs, hard-cooked eggs are nature&apos;s own handheld
                  snack food. With a supply of hard-cooked eggs on hand,
                  you&apos;re ready for almost any meal occasion.
                </P>
                <P>
                  Chopped yolks and whites comprise Eggs Goldenrod and Polonaise
                  Sauce. Whole hard-cooked eggs become comforting, familiar
                  deviled eggs or zingy, newly rediscovered ickled eggs. Simply
                  sprinkled with a herb or more fancily coated in sausage for
                  Scotch eggs, hard-cooked eggs are nature&apos;s own handheld
                  snack food. With a supply of hard-cooked eggs on hand,
                  you&apos;re ready for almost any meal occasion.
                </P>
                <P>
                  Very fresh eggs may be difficult to peel. The fresher the
                  eggs, the more the shell membranes cling tenaciously to the
                  shells. The simplest method for easy peeling is to buy and
                  refrigerate eggs a week to 10 days in advance of hard cooking.
                  This brief &apos;breather&apos; allows the eggs to take in air
                  which helps seperate the membranes from the shell. 1.
                </P>
                <P>
                  1. Place eggs in single layer in saucepan. Add enough tap
                  water to come at least 1 inch above eggs. 2. Cover. Quickly
                  bring just to boiling. Turn off heat. 3. If necessary, remove
                  pan from burner to prevent further boiling. Let eggs stand,
                  covered, in the hot water about 15 minutes for large eggs (12
                  minutes for medium, 18 for extra large).
                </P>
              </TextBlock>
            </LayoutContainer>
          </Cell>

          <Cell xs={12}>
            <TagListContainer>
              <Stack flow={Flow.HorizontalCenter} spaceInline="sizing040">
                <Tag size={TagSize.Small} href="/">
                  Cooking
                </Tag>
                <Tag size={TagSize.Small} href="/">
                  Recipe
                </Tag>
                <Tag size={TagSize.Small} href="/">
                  Eggs
                </Tag>
                <Tag size={TagSize.Small} href="/">
                  Kitchen
                </Tag>
              </Stack>
            </TagListContainer>
          </Cell>
        </Grid>
      </Layout>
    </ThemeProvider>
  </React.Fragment>
);

export default Article;
