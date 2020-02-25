// Import Tailwind config file so we can reference values
const tw = require('./tailwind.config');

module.exports = {
  siteMetadata: {
    title: `CoLab`,
    description: `CoLab is a community hub and workspace located at the Sovereign Place Town Centre. Join like-minded people in this unique working environment or hire out CoLab for your business needs.`,
    author: ``,
    addressFirstLine: `Sovereign Place Town Centre`,
    addressSecondLine: `Shop T03, 15 Chancellors Drive`,
    addressThirdLine: `Sovereign Hills, Port Macquarie`,
    addressFourthLine: `New South Wales 2444`,
    ABN: `53 003 154 041`,
    phone: `(02) 6552 7200`,
    email: `colabpmq@sovereignhills.com.au`,
    siteUrl: `https://www.colabpmq.com.au`,
    hours: `Monday - Friday 9am - 5pm`,
    facebook: `https://www.facebook.com/colabpmq`,
    booking: `https://colabpmq.skedda.com/booking`,
    googleMapsEmbedUrl: `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1701.7370229806272!2d152.82884045809686!3d-31.456143486519675!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b76016cb856d635%3A0x86f469c7e12aba5a!2sSovereign%20Place%20Town%20Centre!5e0!3m2!1sen!2sau!4v1582168375543!5m2!1sen!2sau`,
  },
  plugins: [
    `gatsby-plugin-netlify`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-robots-txt`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sitemap`,
    `gatsby-transformer-sharp`,
    // {
    //   // resolve: `gatsby-plugin-canonical-urls`,
    //   // options: {
    //   //   siteUrl: `https://www.colabpmq.com.au`,
    //   // },
    // },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-tailwindcss`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#fff`,
        theme_color: tw.theme.extend.colors.fuschia,
        display: `minimal-ui`,
        icon: `src/images/favicon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        tailwind: true,
        purgeOnly: [`src/css/tailwind.css`],
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
  ],
};
