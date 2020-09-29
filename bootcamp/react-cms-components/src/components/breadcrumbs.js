import React, { useEffect, useState } from 'react';

const divStyle = {
  color: 'var(--cx-color-primary)',
};

export function Breadcrumbs({ routing }) {
  const [url, setUrl] = useState('');

  useEffect(() => {
    const subscription = routing
      .getRouterState()
      .subscribe(state => setUrl(state.state.url));
    return function cleanup() {
      subscription.unsubscribe();
    };
  }, []);

  return <span style={divStyle}>{url}</span>;
}
