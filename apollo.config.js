module.exports = {
    client: {
      service: {
        name: 'local',
        url: 'https://empty-moon.eu-west-1.aws.cloud.dgraph.io/graphql',
      },
      includes: ["src/**/operations.graphql"],
      excludes: ["src/**/*.{ts}"]
    }
  };