import {FontWeightProperty as FontWeight} from 'csstype';
import {fontPrimitives, FontPrimitives} from '../newskit-light/fonts';
import {getFontSizing} from '../../utils/font-sizing';
import {getFontProps} from '../../utils/get-font-props';

const getFontWithFallback = (font: string, fallback: string) =>
  font === fallback ? font : `${font}, ${fallback}`;

const getBaseTypePresets = (p: FontPrimitives) => {
  const fontFamily1 = getFontWithFallback(
    p.fontFamily1.fontFamily,
    fontPrimitives.fontFamily1.fontFamily,
  );
  const fontFamily2 = getFontWithFallback(
    p.fontFamily2.fontFamily,
    fontPrimitives.fontFamily2.fontFamily,
  );
  const fontFamily3 = getFontWithFallback(
    p.fontFamily4.fontFamily,
    fontPrimitives.fontFamily4.fontFamily,
  );

  const label010 = {
    fontFamily: fontFamily2,
    ...getFontSizing(p.fontSize010, p.fontLineHeight040),
    fontWeight: p.fontWeight030,
    letterSpacing: p.fontLetterSpacing020,
  };
  const label020 = {
    fontFamily: fontFamily2,
    ...getFontSizing(p.fontSize020, p.fontLineHeight040),
    fontWeight: p.fontWeight030,
    letterSpacing: p.fontLetterSpacing020,
  };
  const label030 = {
    fontFamily: fontFamily2,
    ...getFontSizing(p.fontSize030, p.fontLineHeight040),
    fontWeight: p.fontWeight030,
    letterSpacing: p.fontLetterSpacing020,
  };
  const label040 = {
    fontFamily: fontFamily2,
    ...getFontSizing(p.fontSize040, p.fontLineHeight040),
    fontWeight: p.fontWeight030,
    letterSpacing: p.fontLetterSpacing020,
  };

  return {
    // Display

    display010: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize130, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },
    display020: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize140, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },
    display030: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize150, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },
    display040: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize160, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing030,
    },

    // Heading

    heading010: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize040, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing010,
    },
    heading020: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize050, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing010,
    },
    heading030: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize070, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing010,
    },
    heading040: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize080, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing010,
    },
    heading050: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize090, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing010,
    },
    heading060: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize100, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing010,
    },
    heading070: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize110, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing010,
    },
    heading080: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize120, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing010,
    },
    heading090: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize130, p.fontLineHeight020),
      fontWeight: p.fontWeight040,
      letterSpacing: p.fontLetterSpacing010,
    },

    // Subheading

    subhead010: {
      fontFamily: fontFamily2,
      ...getFontSizing(p.fontSize030, p.fontLineHeight020),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },
    subhead020: {
      fontFamily: fontFamily2,
      ...getFontSizing(p.fontSize050, p.fontLineHeight020),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },
    subhead030: {
      fontFamily: fontFamily2,
      ...getFontSizing(p.fontSize070, p.fontLineHeight020),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },
    subhead040: {
      fontFamily: fontFamily2,
      ...getFontSizing(p.fontSize080, p.fontLineHeight020),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },
    subhead050: {
      fontFamily: fontFamily2,
      ...getFontSizing(p.fontSize090, p.fontLineHeight020),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },

    // Body

    body010: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize020, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing020,
    },
    body020: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize030, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing020,
    },
    body030: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize040, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing020,
    },

    // Quote

    quote010: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize070, p.fontLineHeight020),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
      fontStyles: 'italic',
    },
    quote020: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize090, p.fontLineHeight020),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
      fontStyles: 'italic',
    },

    // Label

    label010,
    label020,
    label030,
    label040,

    // Caption

    caption010: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize020, p.fontLineHeight040),
      fontWeight: p.fontWeight030,
      letterSpacing: p.fontLetterSpacing030,
    },

    // Meta

    meta010: {
      fontFamily: fontFamily2,
      ...getFontSizing(p.fontSize010, p.fontLineHeight040),
      fontWeight: p.fontWeight030,
      letterSpacing: p.fontLetterSpacing050,
    },
    meta020: {
      fontFamily: fontFamily2,
      ...getFontSizing(p.fontSize020, p.fontLineHeight040),
      fontWeight: p.fontWeight030,
      letterSpacing: p.fontLetterSpacing030,
    },

    // Code

    code010: {
      fontFamily: fontFamily3,
      ...getFontSizing(p.fontSize020, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },
    code020: {
      fontFamily: fontFamily3,
      ...getFontSizing(p.fontSize030, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },

    // Button

    button010: {
      ...label010,
      letterSpacing: p.fontLetterSpacing030,
    },
    button020: {
      ...label020,
      letterSpacing: p.fontLetterSpacing030,
    },
    button030: {
      ...label030,
      letterSpacing: p.fontLetterSpacing030,
    },

    // Flag

    flag010: {
      ...label010,
      ...getFontProps(
        label010.fontSize,
        label010.lineHeight,
        label010.fontFamily,
      ),
    },
    flag020: {
      ...label020,
      ...getFontProps(
        label020.fontSize,
        label020.lineHeight,
        label020.fontFamily,
      ),
    },

    // Tag

    tag010: {
      ...label010,
      ...getFontProps(
        label010.fontSize,
        label010.lineHeight,
        label010.fontFamily,
      ),
    },
    tag020: {
      ...label020,
      ...getFontProps(
        label020.fontSize,
        label020.lineHeight,
        label020.fontFamily,
      ),
    },
    tag030: {
      ...label030,
      ...getFontProps(
        label030.fontSize,
        label030.lineHeight,
        label030.fontFamily,
      ),
    },

    font500: {
      fontFamily: fontFamily1,
      ...getFontSizing(p.fontSize050, p.fontLineHeight040),
      fontWeight: p.fontWeight020,
      letterSpacing: p.fontLetterSpacing030,
    },
  };
};

export const createTypePresets = (p: FontPrimitives) => {
  const baseTypePresets = getBaseTypePresets(p);

  return {
    ...baseTypePresets,

    standfirst100: baseTypePresets.subhead030,
    standfirst200: baseTypePresets.subhead030,

    headline100: baseTypePresets.heading050,
    headline200: baseTypePresets.heading050,

    articleStandfirst: {
      ...baseTypePresets.subhead010,
      ...getFontProps(
        baseTypePresets.subhead010.fontSize,
        baseTypePresets.subhead010.lineHeight,
        baseTypePresets.subhead010.fontFamily,
      ),
    },

    dropCap: {
      fontSize: '5.34em',
      lineHeight: 0.85,
    },
  };
};

export type FontKeys = keyof Font;
export interface Font {
  fontFamily: string;
  fontWeight: FontWeight;
  fontSize: string;
  lineHeight: number;
  letterSpacing: string | number;
}

export type TypePresetKeys = keyof TypePresets;
export type TypePresets = ReturnType<typeof createTypePresets>;
