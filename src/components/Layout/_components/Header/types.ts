export type MenuType = {
  title: string;
  href: string;
}[];

export type MenuProps = {
  [key: string]: MenuType;
};
