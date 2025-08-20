declare namespace seo {
  declare type TwitterImage = string | TwitterImageDescriptor | URL;
  declare interface TwitterImageDescriptor {
    url: string | URL;
    alt?: string;
    secureUrl?: string | URL;
    type?: string;
    width?: string | number;
    height?: string | number;
  }

  export declare interface TwitterAppDescriptor {
    id: {
      iphone?: string | number;
      ipad?: string | number;
      googleplay?: string;
    };
    url?: {
      iphone?: string | URL;
      ipad?: string | URL;
      googleplay?: string | URL;
    };
    name?: string;
  }

  export interface meta_data_props {
    title: string;
    description: string;
    url: string;
    siteName: string;
    locale: 'en-US';
    type: 'website';
    template: string;
  }

  export interface meta_twitter_props {
    site?: string;
    siteId?: string;
    creator?: string;
    creatorId?: string;
    description?: string;
    title?: string;
    images?: TwitterImage | Array<TwitterImage>;
    app: TwitterAppDescriptor;
  }
}
