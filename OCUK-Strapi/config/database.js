//this needs to be reconfigured to point to openref mysql - YJ
module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: 'sqlite',
        filename: env('DATABASE_FILENAME', ''),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
