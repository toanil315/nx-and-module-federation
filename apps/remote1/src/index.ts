import('./bootstrap').then(({ mount }) => {
  const localRoot = document.getElementById('remote1-app');

  mount({
    mountPoint: localRoot!,
    routingStrategy: 'browser',
  });
});
