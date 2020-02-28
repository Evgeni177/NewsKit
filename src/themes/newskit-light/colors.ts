export const colorPalettes = {
  white: '#FFFFFF',
  inkLinkVisited: '#903D91',
  inkLink: '#2F75D7',
  transparent: 'transparent',

  blue010: '#e6f4ff',
  blue020: '#d5ebff',
  blue030: '#ABD5FC',
  blue040: '#6EB2F2',
  blue050: '#358CDE',
  blue060: '#0A68C1',
  blue070: '#02509B',
  blue080: '#01396E',
  blue090: '#002141',
  blue100: '#000A14',

  red010: '#FFE6E5',
  red020: '#FFB8B8',
  red030: '#FF8A8A',
  red040: '#FF5C5C',
  red050: '#FF362E',
  red060: '#EF1703',
  red070: '#D20600',
  red080: '#A60100',
  red090: '#790101',
  red100: '#4D0000',

  green010: '#e6faeb',
  green020: '#b8efc8',
  green030: '#8ee1a6',
  green040: '#67cf86',
  green050: '#42ba67',
  green060: '#23a248',
  green070: '#148f39',
  green080: '#0a782a',
  green090: '#005d1c',
  green100: '#003e11',

  amber010: '#FFE3B0',
  amber020: '#FFD284',
  amber030: '#FFC058',
  amber040: '#FFAD2C',
  amber050: '#FF9900',
  amber060: '#FF8F00',
  amber070: '#FF8200',
  amber080: '#FF7200',
  amber090: '#FF6000',
  amber100: '#FF4B00',

  neutral010: '#fafafa',
  neutral020: '#f0f0f0',
  neutral030: '#e4e4e4',
  neutral040: '#cccccc',
  neutral050: '#c0c0c0',
  neutral060: '#9c9c9c',
  neutral070: '#777777',
  neutral080: '#535353',
  neutral090: '#2e2e2e',
  neutral100: '#0a0a0a',

  purple010: '#b2c3d5',
  purple020: '#93a1c3',
  purple030: '#757cb1',
  purple040: '#5d589f',
  purple050: '#503b8c',
  purple060: '#471e79',
  purple070: '#50196b',
  purple080: '#54145d',
  purple090: '#4f1049',
  purple100: '#400c30',

  socialTwitter: '#1da1f2',
  socialFacebook: '#1877f2',
  socialInstagram: '#c32aa3',
  socialYoutube: '#ff0000',
  socialWhatsapp: '#25d366',
  socialReddit: '#ff4500',
};

export const colorPrimitives = {
  ...colorPalettes,

  inkHeadingLink: colorPalettes.neutral090,
  inkHeadingLinkHover: colorPalettes.inkLink,
  inkHeadingLinkActive: colorPalettes.inkLink,
  inkHeadingLinkVisited: colorPalettes.neutral090,
  inkLinkHover: colorPalettes.inkLink,
  inkLinkActive: colorPalettes.inkLink,
  inkBase: colorPalettes.neutral090,
  inkContrast: colorPalettes.neutral100,
  inkSubtle: colorPalettes.neutral080,
  inkNonEssential: colorPalettes.neutral060,
  inkInverse: colorPalettes.white,
  inkBrand010: colorPalettes.blue060,
  inkPositive: colorPalettes.green080,
  inkNegative: colorPalettes.red070,
  inkNotice: colorPalettes.amber060,
  inkInformative: colorPalettes.purple060,

  disabled: colorPalettes.neutral020,

  interfaceBackground: colorPalettes.white,
  interface010: colorPalettes.white,
  interface020: colorPalettes.neutral010,
  interface030: colorPalettes.neutral020,
  interface040: colorPalettes.neutral030,
  interface050: colorPalettes.neutral040,
  interface060: colorPalettes.neutral100,

  interactive030: colorPalettes.blue060,
  interactive040: colorPalettes.blue070,
  interactive050: colorPalettes.blue080,
  interactive010: colorPalettes.blue010,
  interactive020: colorPalettes.blue040,
  interactive110: colorPalettes.neutral010,
  interactive120: colorPalettes.neutral020,
  interactive130: colorPalettes.neutral080,
  interactive140: colorPalettes.neutral090,
  interactive150: colorPalettes.neutral100,

  interfaceBrand010: colorPalettes.blue060,
  interfaceBrand020: colorPalettes.blue020,

  semanticNegative010: colorPalettes.red020,
  semanticNegative020: colorPalettes.red040,
  semanticNegative030: colorPalettes.red060,
  semanticNegative040: colorPalettes.red070,
  semanticNegative050: colorPalettes.red080,
  semanticInformative010: colorPalettes.purple060,
  semanticPositive010: colorPalettes.green020,
  semanticPositive020: colorPalettes.green040,
  semanticPositive030: colorPalettes.green060,
  semanticPositive040: colorPalettes.green070,
  semanticPositive050: colorPalettes.green080,
  semanticNotice010: colorPalettes.amber060,

  skeleton010: colorPalettes.neutral010,
  skeleton020: colorPalettes.neutral030,
};

export type ColorPrimitives = typeof colorPrimitives;
