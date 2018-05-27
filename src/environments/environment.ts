// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var config = {
  apiKey: "AIzaSyDI3J2NXgzqcYoZlxTNToCwikJkIyyBx5w",
  authDomain: "universe-6d5d8.firebaseapp.com",
  databaseURL: "https://universe-6d5d8.firebaseio.com",
  projectId: "universe-6d5d8",
  storageBucket: "gs://universe-6d5d8.appspot.com",
  messagingSenderId: "790913297512"
};

export const environment = {
  production: true,
  firebase: config
};