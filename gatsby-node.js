const path = require(`path`);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allDatoCmsProduct {
        edges {
          node {
            id
            name
            price
            description
            slug
            fileGuid
            beforeAndAfters {
              before {
                url
              }
              after {
                url
              }
            }
            beforeAndAfter {
              url
            }
            beforeAndAfter2 {
              url
            }
            beforeAndAfter3 {
              url
            }
            beforeAndAfter4 {
              url
            }
            beforeAndAfter5 {
              url
            }
            image {
              url
            }
          }
        }
      }
    }
  `).then((result) => {
    result.data.allDatoCmsProduct.edges.forEach(({ node }) => {
      createPage({
        path: `/presets/${node.slug}/`,
        component: path.resolve(`./src/templates/Preset/index.js`),
        context: {
          // Data passed to context is available
          // in page queries as GraphQL variables.
          preset: node,
        },
      });
    });
  });
};
