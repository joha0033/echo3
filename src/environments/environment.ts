// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.

export const environment = {
  production: false,
  firebase:{
    apiKey: "AIzaSyBd71T5XjARpVYI7t1862T1Y1TlhUnnO4E",
    authDomain: "ng5-fb-bs4.firebaseapp.com",
    databaseURL: "https://ng5-fb-bs4.firebaseio.com",
    projectId: "ng5-fb-bs4",
    storageBucket: "ng5-fb-bs4.appspot.com",
    messagingSenderId: "700588841007"
  }
};
