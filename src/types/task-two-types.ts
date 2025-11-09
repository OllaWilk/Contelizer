export type PeselCode =
  | 'empty'
  | 'too_short'
  | 'too_long'
  | 'non_digit'
  | 'invalid_date'
  | 'invalid_checksum'
  | 'ok';

export type PeselResult = {
  ok: boolean;
  code: PeselCode;
  message: string;
  hint?: string;
};
