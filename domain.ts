// This file contains the domain of the application.

const domain =
  process.env.NODE_ENV === 'development'
    ? 'http://localhost:3000'
    : `https://www.mirfayz.uz`;

export default domain;
