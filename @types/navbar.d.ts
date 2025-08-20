declare namespace navbar {
  export interface index {
    logo: {
      url: string;
      alt: string;
    };
    navlist?: navlist;
  }

  export interface navlist {
    links?: {
      name: string;
      url: string;
      subLinks?: Record<string, links[]>;
    }[];
  }

  export interface links {
    name: string;
    url: string;
  }
}
