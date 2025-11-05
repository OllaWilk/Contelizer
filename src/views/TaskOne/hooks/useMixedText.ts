import { useMemo } from 'react';
import { mixText } from '../utils/mixText';
import { UI_TEXTS } from '../content';

export const useMixedText = (text: string | null) => {
  const mixedText = useMemo(() => {
    if (!text) return UI_TEXTS.previewInfo;
    return mixText(text);
  }, [text]);

  return mixedText;
};
