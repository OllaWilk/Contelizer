export type NavItem = {
  key: string;
  label: string;
  to: string;
  end?: boolean;
};

export type RoutePath = `/${string}`;
export type RoutesMap = Record<string, RoutePath>;

export type ImageUrl = `https://${string}` | `/${string}`;

export interface ImportMetaEnv {
  readonly VITE_API_URL: string;
}

export interface ImportMeta {
  readonly env: ImportMetaEnv;
}
