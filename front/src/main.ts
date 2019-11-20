import './app/app.component';

declare global {
  const PRODUCTION: boolean;
}

if (!PRODUCTION) {
  console.log('this is not production...');
}

console.log('started');
