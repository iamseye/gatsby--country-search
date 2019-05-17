const fetch = require('node-fetch')
const queryString = require('query-string')

exports.sourceNodes = (
  { actions, createNodeId, createContentDigest },
  configOptions
) => {
  const { createNode } = actions

  // Gatsby adds a configOption that's not needed for this plugin, delete it
  delete configOptions.plugins
  // Helper function that processes a photo to match Gatsby's node structure
  const processCountry = (country) => {
    const nodeId = createNodeId(`countires-${country.alpha2Code}`)
    const nodeContent = JSON.stringify(country)
    const nodeData = Object.assign({}, country, {
      id: nodeId,
      parent: null,
      children: [],
      internal: {
        type: `Countries`,
        content: nodeContent,
        contentDigest: createContentDigest(country),
      },
    })
    return nodeData
  }
  // Convert the options object into a query string
  const apiOptions = queryString.stringify(configOptions)
  // Join apiOptions with the Pixabay API URL
  const apiUrl = 'https://restcountries.eu/rest/v2/all';
  // Gatsby expects sourceNodes to return a promise
  return (
    // Fetch a response from the apiUrl
    fetch(apiUrl)
      // Parse the response as JSON
      .then(response => response.json())
      // Process the JSON data into a node
      .then((data) => {
        // For each query result (or 'hit')
        data.forEach((country) => {
          // Process the photo data to match the structure of a Gatsby node
          const nodeData = processCountry(country);
          // Use Gatsby's createNode helper to create a node from the node data
          createNode(nodeData);
        });
      })
  );

  // plugin code goes here...
  console.log('Testing my plugin', configOptions)
};
