export type CareerItem = {
  company: string;
  product?: string;
  dates: string;
  url: string;
  urlLocation: "company" | "product";
  title: string;
  blurb: string;
  highlights: string[];
};
