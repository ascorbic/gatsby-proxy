exports.createPages = async ({ actions: { createRedirect } }) => {


  createRedirect({
    fromPath: '/docs/*',
    toPath: 'https://netlify-plugin-nextjs-demo.netlify.app/shows/:splat',
    statusCode: 200,
  });

}