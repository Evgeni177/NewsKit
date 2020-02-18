import {TagSize} from '../tag/utils';
import {FlagSize} from '../flag/utils';

export interface BaseFlagProps {
  $size?: FlagSize | TagSize;
  // $typePreset?: string;
  $stylePreset?: string;
}
