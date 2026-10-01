/**
 * Shared TypeScript types & interfaces
 */

export interface NavItem {
  label: string;
  href: string;
  external?: boolean;
}

export interface FeatureItem {
  id: string;
  title: string;
  description: string;
  iconName?: string;
}
