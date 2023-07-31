import { Nonci } from '../dist/index.js';

const nonci = new Nonci({
  secret: 'e3edd2eb-e976-408f-a820-1e5c067d8a5d',
  hostUri: 'http://localhost:3000'
});

// nonci.createNonce().then((response) => {
//   console.log(response);
// });

nonci.getAllNonces().then((response) => {
  console.log(response);
});
