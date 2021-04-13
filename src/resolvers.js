const path = require('path');
const { loadFilesSync, mergeResolvers } = require('graphql-tools');

const resolversArray = loadFilesSync(path.join(__dirname, 'modules', '**', 'resolvers.js'));
const resolvers = mergeResolvers(resolversArray);

module.exports = {
    resolvers,
}
