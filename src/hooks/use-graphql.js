import { useStaticQuery, graphql } from 'gatsby';

export const useGraphQL = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          addressFirstLine
          addressSecondLine
          addressThirdLine
          addressFourthLine
          ABN
          phone
          email
          hours
          facebook
          googleMapsEmbedUrl
          booking
        }
      }
      heroImage: file(relativePath: { eq: "hero.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      bookingImage: file(relativePath: { eq: "booking.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      pricingImage: file(relativePath: { eq: "pricing.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      whatIsColabInnerImage: file(
        relativePath: { eq: "what-is-colab-inner.jpg" }
      ) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      whatIsColabImage: file(relativePath: { eq: "what-is-colab.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
      contactUsImage: file(relativePath: { eq: "contact.jpg" }) {
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
