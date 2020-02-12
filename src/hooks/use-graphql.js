import { useStaticQuery, graphql } from 'gatsby';

const useGraphql = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          address
          ABN
          phone
          email
        }
      }
      heroImage: file(relativePath: { eq: "hero.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bookingImage: file(relativePath: { eq: "booking-image.png" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);
  return data;
};

export default useGraphql;
