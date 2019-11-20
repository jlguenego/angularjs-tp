import { hello } from './hello';

declare global {
  const PRODUCTION: boolean;
}

if (!PRODUCTION) {
  console.log('this is not production...');
}

hello("World");
