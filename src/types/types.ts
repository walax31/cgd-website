export type Audience = {
  title: string;
  description: string;
  className: string;
};

export type Service = {
  title: string;
  subtitle: string;
  icon: string;
};

export type FeatureBanner = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  titleClassName: string;
  subtitleClassName: string;
};

export type OtherService = {
  title: string;
  image: string;
  href: string;
  overlayText?: {
    label: string;
    className: string;
  }[];
};

export type NewsCategoryIcon = "documents" | "recruitment" | "training";

export type NewsCategory = {
  title: string;
  subtitle: string;
  icon: NewsCategoryIcon;
  active: boolean;
};

export type NewsItem = {
  title: string;
  excerpt: string;
  image: string;
};

export type ResourceListItem = {
  day: string;
  month: string;
  status: "New" | "Update" | "Cancel";
  title: string;
};

export type ImportantBanner = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
  gradient: string;
  textClass: string;
};

export type InterestItem = {
  title: string;
  subtitle: string;
  image: string;
  href: string;
};
