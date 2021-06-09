import { useStaticQuery, graphql } from "gatsby";

export const useSiteMetadata = () => {
  const {
    site: { siteMetadata }
  } = useStaticQuery(graphql`
    query InformationQuery {
      site {
        siteMetadata {
          title
          author
          data {
            weddingDate
            commentBoxId
          }
        }
      }
    }
  `);

  return {
    ...siteMetadata
  };
};
