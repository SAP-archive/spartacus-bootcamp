import React, { useEffect, useState } from 'react';

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

  return <span>{url}</span>;
}
