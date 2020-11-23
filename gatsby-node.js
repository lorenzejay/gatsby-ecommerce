// /**
//  * Implement Gatsby's Node APIs in this file.
//  *
//  * See: https://www.gatsbyjs.org/docs/node-apis/
//  */

// // You can delete this file if you're not using it
// const path = require(`path`);
// exports.createPages = async ({ actions, graphql }) => {
//   const { createPage } = actions;
//   // Query for all products in Shopify
//   const result = await graphql(`
//     query {
//       allDatoCmsProduct {
//         edges {
//           node {
//             id
//             name
//             price
//             originalId
//             description
//             imageGallery {
//              url
//             }
//             image {
//               url
//               sizes(maxWidth: 300, imgixParams: { fm: "jpg" }) {
//                 ...GatsbyDatoCmsSizes
//               }
//             }
//           }
//         }
//       }
//   `);
//   console.log(result);
//   // Iterate over all products and create a new page using a template
//   result.allDatoCmsProduct.edges.forEach(({ node }) => {
//     console.log(node);
//     createPage({
//       path: `/presets/${node.slug}`,
//       component: path.resolve(`./src/templates/preset.js`),
//       context: {
//         product: node,
//       },
//     });
//   });
// };
