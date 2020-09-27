import { useStaticQuery, graphql } from "gatsby";

export const GalleryData = () => {
  const { galleryImage } = useStaticQuery(graphql`
      {
        allFile(filter: { relativeDirectory: { eq: "gallery" } }) {
          edges {
            node {
              childImageSharp {
                fluid(quality: 90) {
                  src
                  srcWebp
                }
                original {
                  height
                  width
                }
              }
            }
          }
        }
      }
    `
  );
  return galleryImage
};
