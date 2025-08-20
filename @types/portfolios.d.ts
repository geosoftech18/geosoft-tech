declare namespace portfolio {
  export interface testimonail {
    testimonial: string;
    logo: basic.image;
    name: string;
    role: string;
    image: basic.image;
  }

  export interface collection {
    testimonialsCollection: {
      items: testimonail[];
    };
  }

  export interface data {
    data: collection;
  }
}
