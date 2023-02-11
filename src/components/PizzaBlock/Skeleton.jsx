import React from 'react';
import ContentLoader from 'react-content-loader';

const Skeleton = () => (
  <ContentLoader
    className="pizza-block"
    speed={2}
    width={280}
    height={500}
    viewBox="0 0 280 500"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
  >
    <circle cx="133" cy="136" r="125" />
    <rect x="0" y="281" rx="8" ry="8" width="280" height="21" />
    <rect x="0" y="316" rx="16" ry="16" width="280" height="88" />
    <rect x="0" y="425" rx="5" ry="5" width="95" height="30" />
    <rect x="124" y="418" rx="23" ry="23" width="152" height="45" />
  </ContentLoader>
);

export default Skeleton;
