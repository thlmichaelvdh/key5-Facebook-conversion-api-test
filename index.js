const { Keystone } = require('@keystonejs/keystone');
const { Text } = require('@keystonejs/fields');
const { GraphQLApp } = require('@keystonejs/app-graphql');
const { AdminUIApp } = require('@keystonejs/app-admin-ui');
const { NuxtApp } = require('@keystonejs/app-nuxt');


const { MongooseAdapter: Adapter } = require('@keystonejs/adapter-mongoose');
const PROJECT_NAME = 'Facebook API Conversion test';
const adapterConfig = { mongoUri: 'mongodb://hbef3jw4b:q4k2pwnnx@iad2-c13-1.mongo.objectrocket.com:53598,iad2-c13-2.mongo.objectrocket.com:53598,iad2-c13-0.mongo.objectrocket.com:53598/jey5-fb-conversion-api-test?replicaSet=d3e7a810e36c4ba2900565fd77ffd2ad' };


const keystone = new Keystone({
  adapter: new Adapter(adapterConfig),
});

keystone.createList('Todo', {
  schemaDoc: 'A list of things which need to be done',
  fields: {
    name: { type: Text, schemaDoc: 'This is the thing you need to do' },
  },
});

module.exports = {
  keystone,
  apps: [
    new GraphQLApp(),
    new AdminUIApp({ name: PROJECT_NAME }),
    new NuxtApp({
      srcDir: 'src',
      buildDir: 'dist',
      plugins: [
        '@/plugins/antd-ui'
      ],
      components: ['~/components'],
      modules: ['~/modules']
    }),
  ],
};
