export default [
  {
    title: 'About',
    id: '/about',
    subNav: [
      {
        title: 'Introduction',
        page: true,
        id: '/about/introduction',
      },
      {
        title: 'Release Notes',
        page: true,
        id: '/about/release-notes',
      },
      {
        title: 'Roadmap',
        page: true,
        id: '/about/roadmap',
      },
      {
        title: 'Contribute',
        page: true,
        id: '/about/contribute',
      },
      {
        title: 'Contact Us',
        page: true,
        id: '/about/contact-us',
      },
    ],
  },
  {
    title: 'Guides',
    id: '/getting-started',
    subNav: [
      {
        title: 'Code',
        id: '/getting-started/code/web',
        subNav: [
          {
            title: 'Web',
            page: true,
            id: '/getting-started/code/web',
          },
          {
            title: 'Instrumentation',
            page: true,
            id: '/getting-started/code/instrumentation',
          },
          {
            title: 'Testing',
            page: true,
            id: '/getting-started/code/testing',
          },
        ],
      },
    ],
  },
  {
    title: 'Foundations',
    id: '/foundations',
    subNav: [
      {
        title: 'Overview',
        page: true,
        id: '/foundations/overview',
      },
      {
        title: 'Borders',
        page: true,
        id: '/foundations/borders',
        description:
          'Borders direct attention, identify components, communicate state, and express a brand.',
        illustration: 'foundations/hero-borders-illustration',
      },
      {
        title: 'Breakpoints',
        page: true,
        id: '/foundations/breakpoints',
        illustration: 'foundations/breakpoints/hero',
        description:
          'Breakpoints set a visual point on a screen to alter the layout of content (responsive design), ensuring consistency across different screen widths.',
      },
      {
        title: 'Colours',
        page: true,
        id: '/foundations/colours',
        illustration: 'foundations/colours/hero',
        description:
          'Colour is key to expressing brand and identity, but it also plays a vital role in conveying specific meaning to a user.',
      },
      {
        title: 'Fonts',
        page: true,
        id: '/foundations/fonts',
        illustration: 'foundations/fonts/hero',
        description:
          'Fonts form an important part of the interface, establishing styles for content such as headlines, sub-headlines or paragraphs, as well as more functional styles for items such as labels, tags and messaging.',
      },
      {
        title: 'Iconography',
        page: true,
        id: '/foundations/iconography',
        illustration: 'foundations/iconography/hero',
        description:
          'Icons provide additional context to information, provide a visual cue, or visually reinforce the interaction.',
      },
      {
        title: 'Motions',
        page: true,
        id: '/foundations/motions',
        illustration: 'foundations/motions/hero',
        description:
          'Motion is used to create movement and narrative within a product. Animated interface elements don’t just attract attention, they enhance user experience and help guide user flow',
      },
      {
        title: 'Design tokens',
        page: true,
        id: '/foundations/design-tokens',
        illustration: 'foundations/design-tokens/hero',
        description: `Design tokens are the design decisions of the design system — specifically, they are named entities that store visual and functional attributes. They are used in place of hardcoded values (such as hex values for colour or pixel values for spacing) to maintain a scalable and consistent system for UI.`,
      },
      {
        title: 'Shadows',
        page: true,
        id: '/foundations/shadows',
        illustration: 'components/hero-shadows-illustration',
        description:
          'Shadows provide visual cues about the distance between layers.',
      },
      {
        title: 'Sizing',
        page: true,
        id: '/foundations/sizing',
        illustration: 'components/hero-sizing-illustration',
        description:
          'Standardised sizing provides increased visual consistency in an interface.',
      },
      // {
      //   title: 'Overlays',
      //   page: true,
      //   id: '/foundations/overlays',
      //   illustration: 'static/theming/foundations/overlays.svg',
      //   description:
      //     'Overlays are used for styling UI elements. They can be decorative, but often have a functional use like communicating state on images or increasing the contrast backgrounds when a component is layered upon each other, e.g. a modal.',
      // },
      // {
      //   title: 'Typography',
      //   page: true,
      //   id: '/foundations/fonts',
      //   illustration: 'static/theming/foundations/typography.svg',
      //   description:
      //     'Fonts define the font family, boldness, size, and the style of the text. These inform typography rules to convey the appropriate sentiment to guide users through their experience.',
      // },
      {
        title: 'Presets',
        id: '/foundations/presets',
        subNav: [
          {
            title: 'Space Presets',
            page: true,
            id: '/foundations/presets/space-presets',
          },
          {
            title: 'Style Presets',
            page: true,
            id: '/foundations/presets/style-presets',
          },
          {
            title: 'Typography Presets',
            page: true,
            id: '/foundations/presets/typography-presets',
          },
        ],
      },

      {
        title: 'Theming',
        id: '/foundations/theming',
        subNav: [
          {
            title: 'Overview',
            page: true,
            id: '/foundations/theming/overview',
          },
          {
            title: 'Creating a theme',
            page: true,
            id: '/foundations/theming/creating-a-theme',
          },
          {
            title: 'Using a theme',
            page: true,
            id: '/foundations/theming/using-a-theme',
          },
          {
            title: 'Component Defaults',
            page: true,
            id: '/foundations/theming/component-defaults',
          },
        ],
      },
    ],
  },
  {
    title: 'Components',
    id: '/components',
    subNav: [
      {
        title: 'Overview',
        page: true,
        id: '/components/overview',
      },
      {
        title: 'Actions & Inputs',
        description:
          'Components that allow users to take action on a feature or enable users to input data.',
        id: '/components/action-and-inputs',
        subNav: [
          {
            title: 'Button',
            page: true,
            id: '/components/button',
            description:
              'Allows users to take actions, and make choices, with a single tap.',
            illustration: 'components/button-illustration',
          },
          {
            title: 'Form',
            page: true,
            id: '/components/form',
            description:
              'Used to collect information from users, and to validate fields in certain rules.',
            illustration: 'components/form-illustration',
          },
          {
            title: 'Share Bar',
            page: true,
            id: '/components/share-bar',
            description:
              'Used anywhere a user would like to easily share something with social media.',
            illustration: 'components/share-bar/share-bar-illustration',
          },
          {
            title: 'Slider',
            page: true,
            id: '/components/slider',
            description:
              'Allows users to choose a single value or range between min and max values by sliding a thumb.',
            illustration: 'components/slider-illustration',
          },
          {
            title: 'Text Input',
            page: true,
            id: '/components/text-input',
            description: 'Lets users enter and edit text.',
            illustration: 'components/text-input-illustration',
          },
        ],
      },
      {
        title: 'Feedback & Status',
        description:
          'Components that provide users with system or user feedback & status.',
        id: '/components/feedback-and-status',
        subNav: [
          {
            title: 'Banner',
            page: true,
            id: '/components/banner',
            description:
              'Demonstrates the progress of a system action e.g. waiting for a page to load.',
            illustration: 'components/banner/banner-illustration',
          },
          {
            title: 'Flag',
            page: true,
            id: '/components/flag',
            description:
              'Indicates the status of content e.g. ’new’ or ’updated’.',
            illustration: 'components/flag-illustration',
          },
          {
            title: 'Progress Indicator',
            page: true,
            id: '/components/progress-indicator',
            description:
              'Demonstrates the progress of a system action e.g. waiting for a page to load.',
            illustration: 'components/progress-indicator-illustration',
          },
          {
            title: 'Toast',
            page: true,
            id: '/components/toast',
            description:
              'A Toast communicates confirmation of an action or a low-priority message that does not need to completely interrupt the user experience.',
            illustration: 'components/toast/toast-illustration',
          },
          {
            title: 'Inline Message',
            page: true,
            id: '/components/inline-message',
            description:
              'An Inline message communicates contextual information. They are positioned inline, in close proximity to the element they are adding context to.',
            illustration:
              'components/inline-message/inline-message-illustration',
          },
        ],
      },
      {
        title: 'Layout',
        description:
          'Components that help to define the fundamental spacial structure of a feature or page.',
        id: '/components/layout',
        subNav: [
          {
            title: 'Aspect Ratio',
            page: true,
            id: '/components/aspect-ratio',
            description: 'The aspect ratio of an image.',
            illustration: 'components/aspect-ratio-illustration',
          },
          {
            title: 'Block',
            page: true,
            id: '/components/block',
            description:
              'A simple container component that can take margin, padding, and style presets.',
            illustration: 'components/block-illustration',
          },
          {
            title: 'Card',
            page: true,
            id: '/components/card',
            description:
              'Contain preview content and actions about a single subject.',
            illustration: 'components/hero-card-illustration',
          },
          {
            title: 'Divider',
            page: true,
            id: '/components/divider',
            description: 'A thin line that separates content.',
            illustration: 'components/divider-illustration',
          },
          {
            title: 'Drawer',
            page: true,
            id: '/components/drawer',
            description:
              'A layout panel that slides out the side of the screen revealing content like navigation or filters.',
            illustration: 'components/drawer/drawer-illustration',
          },
          {
            title: 'Grid',
            page: true,
            id: '/components/grid',
            description:
              'Used together to construct a visual grid for responsive page layout.',
            illustration: 'components/grid-cell-illustration',
          },
          {
            title: 'Modal',
            page: true,
            id: '/components/modal',
            description:
              'A Modal is a layout panel that presents critical information or requests users input without navigating away from the current page.',
            illustration: 'components/modal-illustration',
          },
          {
            title: 'Stack',
            page: true,
            id: '/components/stack',
            description:
              'A low-level foundational component used to layout items in a horizontal or vertical stack.',
            illustration: 'components/stack-illustration',
          },
          {
            title: 'Visibility',
            page: true,
            id: '/components/visibility',
            description:
              'A pair of components which can be used to show and hide content at different breakpoints.',
            illustration: 'components/visibility-illustration',
          },
        ],
      },
      {
        title: 'Media',
        description: 'Components that provide or control rich media.',
        id: '/components/media',
        subNav: [
          {
            title: 'Audio Player',
            page: true,
            id: '/components/audio-player',
            description:
              'Used to embed sound content in web and app interfaces.',
            illustration: 'components/audio-player-illustration',
          },
          {
            title: 'Icons',
            page: true,
            id: '/components/icons',
            description:
              'Small SVG shapes, ranging from basic UI shapes to brand logos.',
            illustration: 'components/icons-illustration',
          },
          {
            title: 'Image',
            page: true,
            id: '/components/image',
            description: 'An element of media.',
            illustration: 'components/image-illustration',
          },
          {
            title: 'Volume Control',
            page: true,
            id: '/components/volume-control',
            description: 'Allows user to mute, increase or lower audio volume.',
            illustration: 'components/volume-control-illustration',
          },
        ],
      },
      {
        title: 'Navigation',
        description:
          'Components that enable users to move between pages or content.',
        id: '/components/navigation',
        subNav: [
          {
            title: 'Link',
            page: true,
            id: '/components/link',
            description: 'Allows user to jump to a new location when clicked.',
            illustration: 'components/url-illustration',
          },
          {
            title: 'Menu',
            page: true,
            id: '/components/menu',
            description:
              'A Menu displays a list of navigational items. They are displayed either at the top of a screen, or at the side where space allows.',
            illustration: 'components/menu/menu-illustration',
          },
          {
            title: 'Scroll',
            page: true,
            id: '/components/scroll',
            description:
              'Enables a user to scroll a number of interface elements.',
            illustration: 'components/scroll-illustration',
          },
          {
            title: 'Tabs',
            page: true,
            id: '/components/tabs',
            description:
              'Allows users to alternate between views within the same context.',
            illustration: 'components/tabs-illustration',
          },
          {
            title: 'Tag',
            page: true,
            id: '/components/tag',
            description:
              'Used as a way of classifying content, typically using keywords. When clicked it will take a user to content of the same category.',
            illustration: 'components/tag-illustration',
          },
          {
            title: 'Title Bar',
            page: true,
            id: '/components/title-bar',
            description:
              'Provides context and actions related to a particular section of content that follows below on the screen.',
            illustration: 'components/title-bar-illustration',
          },
        ],
      },
      {
        title: 'Text',
        description: 'Components that display specific written content.',
        id: '/components/text',
        subNav: [
          {
            title: 'Byline',
            page: true,
            id: '/components/byline',
            description:
              'A small line of text which lists the authors of an article, along with their titles if provided.',
            illustration: 'components/byline-illustration',
          },
          {
            title: 'Caption',
            page: true,
            id: '/components/caption',
            description:
              'A sentence often added to an image or video to describe or explain what the image or video is showing.',
            illustration: 'components/caption-illustration',
          },
          {
            title: 'Date Time',
            page: true,
            id: '/components/date-time',
            description:
              'Element for displaying dates, usually publication dates on news articles.',
            illustration: 'components/date-time-illustration',
          },
          {
            title: 'Headline',
            page: true,
            id: '/components/headline',
            description:
              'A simple component that is comprised of two elements a Kicker, and a Heading.',
            illustration: 'components/heading-illustration',
          },
          {
            title: 'Ordered List',
            page: true,
            id: '/components/ordered-list',
            description: 'Typically is a numbered list of items.',
            illustration: 'components/ordered-list-illustration',
          },
          {
            title: 'Standfirst',
            page: true,
            id: '/components/standfirst',
            description:
              'An introductory paragraph in an article, which summarises the article’s content.',
            illustration: 'components/standfirst-illustration',
          },
          {
            title: 'Text Block',
            page: true,
            id: '/components/text-block',
            description:
              'A paragraph, which can be used to summarize any text content.',
            illustration: 'components/text-block-illustration',
          },
          {
            title: 'Unordered List',
            page: true,
            id: '/components/unordered-list',
            description: 'Typically is a bulleted list of items.',
            illustration: 'components/unordered-list-illustration',
          },
        ],
      },
      {
        title: 'Third Party Integrations',
        description: 'Components that interact with a third-party service.',
        id: '/components/third-party',
        subNav: [
          {
            title: 'Consent',
            page: true,
            id: '/components/consent',
            description:
              'Non-visual component which embeds the consent management script.',
            illustration: 'components/hero-consent-illustration',
          },
          {
            title: 'Consent Settings Link',
            page: true,
            id: '/components/consent-settings-link',
            description:
              'A link which opens the consent manager dialog, requires the Consent component.',
            illustration: 'components/hero-consent-settings-illustration',
          },
          {
            title: 'Experimentation Web',
            page: true,
            id: '/components/experimentation-web',
            description:
              'Non-visual component which embeds the client-side experimentation script.',
            illustration: 'components/experimentation-illustration',
          },
          {
            title: 'Tealium',
            page: true,
            id: '/components/tealium',
            description:
              'Non-visual component which embeds the Tealium tag manager script.',
            illustration: 'components/hero-tealium-illustration',
          },
        ],
      },
      {
        title: 'Utilities',
        id: '/utils',
        subNav: [
          {
            title: 'Emotion',
            page: true,
            id: '/components/utils/emotion',
          },
          {
            title: 'customToNewsKitIcon',
            page: true,
            id: '/components/utils/custom-to-newskit-icon',
          },
          {
            title: 'getCssFromTheme',
            page: true,
            id: '/components/utils/get-css-from-theme',
          },
          {
            title: 'getFromTheme',
            page: true,
            id: '/components/utils/get-from-theme',
          },
          {
            title: 'getComponentDefaults',
            page: true,
            id: '/components/utils/get-defaults',
          },
          {
            title: 'Hooks',
            page: true,
            id: '/components/utils/hooks',
          },
        ],
      },
    ],
  },
  {
    title: 'Patterns',
    id: '/patterns',
    subNav: [
      {
        title: 'Overview',
        page: true,
        id: '/patterns/overview',
      },
    ],
  },
];