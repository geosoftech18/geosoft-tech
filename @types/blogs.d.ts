namespace Blog {
  export interface Image {
    url: string;
    title: string;
  }

  export interface Writer {
    name: string;
    role: string;
    image: {
      url: string;
      title: string;
    };
  }

  export interface BlogItem {
    title: string;
    slug: string;
    publishedDate: string;
    thumbnailImage: Image;
    writer: Writer;
    categoryTitle: string;
    slug: string;
  }

  export interface Body {
    json: any; // Replace with the appropriate type for the 'json' property
  }

  export interface SingleBlogItem {
    title: string;
    writer: Writer;
    coverImage: Image;
    categoryTitle: string;
    body: Body;
    slug: string;
    publishedDate: string;
  }

  export interface BlogPageCollection {
    items: BlogItem[];
  }

  export interface SingleBlogPageCollection {
    items: SingleBlogItem[];
  }

  export interface Data {
    data: {
      blogPageCollection: BlogPageCollection;
    };
  }
  export interface SingleData {
    data: {
      blogPageCollection: SingleBlogPageCollection;
    };
  }
}
