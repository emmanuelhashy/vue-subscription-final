import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import VueApollo from "vue-apollo";
import ApolloClient from "apollo-client";
import { WebSocketLink } from "apollo-link-ws";
import { InMemoryCache } from "apollo-cache-inmemory";

Vue.use(VueApollo);

// Create a WebSocket link:
const link = new WebSocketLink({
  uri: "wss://graphql-api.hasura.app/v1/graphql",
  options: {
    reconnect: true,
    timeout: 30000,
  }
});
const client = new ApolloClient({
  link: link,
  cache: new InMemoryCache({
    addTypename: true
  })
});

Vue.config.productionTip = false;
const apolloProvider = new VueApollo({
  defaultClient: client
});

new Vue({
  router,
  apolloProvider,
  render: h => h(App)
}).$mount("#app");
