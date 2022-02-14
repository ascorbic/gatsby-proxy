exports.createPages = async ({ actions: { createRedirect } }) => {
  createRedirect({
    fromPath: '/docs',
    toPath: 'https://deploy-preview-1213--netlify-plugin-nextjs-basepath-demo.netlify.app/docs/',
    statusCode: 200,
  });

  createRedirect({
    fromPath: '/docs/*',
    toPath: 'https://deploy-preview-1213--netlify-plugin-nextjs-basepath-demo.netlify.app/docs/:splat',
    statusCode: 200,
  });
};