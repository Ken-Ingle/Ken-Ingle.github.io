export type CareerItem = {
  company: string;
  product?: string;
  dates: string;
  url: string;
  urlLocation: "company" | "product";
  location: string;
  title: string;
  blurb: string;
  highlights: string[];
};
