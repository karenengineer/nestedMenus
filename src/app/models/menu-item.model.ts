export interface MenuItem {
  displayName: string;
  iconName?: string;
  children?: MenuItem[];
  expanded?: boolean;
}
