const path = require('path');
const { loadFilesSync, mergeTypeDefs } = require('graphql-tools');

const typeDefsArray = loadFilesSync(path.join(__dirname, 'modules', '**', 'schema.gql'));
const typeDefs = mergeTypeDefs(typeDefsArray);

module.exports = {
    typeDefs,
}
