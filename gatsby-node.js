/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it
const path = require('path');
const slash = require('slash');

exports.createPages = ({ actions, graphql }) => {
  const { createPage } = actions;
  const docTemplate = path.resolve('src/templates/detail.js');

  // Individual doc pages
  return graphql(`
    {
      allCountries {
        edges {
          node {
            id
            name
            nativeName
            alpha2Code
            alpha3Code
            region
            subregion
            borders
            population
            capital
            borders
            topLevelDomain
            flag
            currencies {
              name
            }
            languages{
              name
            }
          }
        }
      }
    }
    `).then((result) => {
    if (result.errors) {
      Promise.reject(result.errors);
    }

    result.data.allCountries.edges.forEach(({ node }) => {
      createPage({
        path: `/country/${node.alpha2Code}/`,
        component: slash(docTemplate),
        context: {
          id: node.id,
          data: node,
        },
      });
    });
  });
};
