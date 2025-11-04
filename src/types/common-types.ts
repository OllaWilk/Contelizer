export type NavItem = {
  key: string;
  label: string;
  to: string;
  end?: boolean;
};

export interface ImportMetaEnv  {
  readonly VITE_API_URL: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}