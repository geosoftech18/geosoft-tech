import fetchGraphQL from '.';

const TESTIMONIALS = `
items {
  testimonial
  logo{
    image{
      title
      url
    }
  }
  name
  role
  image{
     image{
      title
      url
    }
  }
}
`;

// export async function getTestimonials(count: number) {
//   const result: testimonail.data = await fetchGraphQL(
//     `query testimonialsCollectionQuery {
//       testimonialsCollection(limit:${count}) {
//         ${TESTIMONIALS}
//       }
//     }`,
//     { next: { revalidate: 50 } }
//   );
//   return result.data.testimonialsCollection.items;
// }
