import { createApp } from "vue";
import * as Sentry from "@sentry/vue";
import App  from "./App.vue";
import "./style.css";

const app = createApp(App);

Sentry.init({
  app,
  dsn: "https://17ea3c2a07bda6b3a96c2e9440331b09@o4506160779624448.ingest.sentry.io/4506161471881216",
  integrations: [
    new Sentry.Replay(),
  ],
  // Session Replay
  replaysSessionSampleRate: 0.1, // This sets the sample rate at 10%. You may want to change it to 100% while in development and then sample at a lower rate in production.
  replaysOnErrorSampleRate: 1.0, // If you're not already sampling the entire session, change the sample rate to 100% when sampling sessions where errors occur.
});
app.mount("#app");
