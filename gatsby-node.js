exports.createPages = async ({ actions: { createRedirect } }) => {
  createRedirect({
    fromPath: '/reverse-proxy-basepath',
    toPath: 'https://nf-test-next-proxy-target.netlify.app/reverse-proxy-basepath/',
    statusCode: 200,
  });

  createRedirect({
    fromPath: '/reverse-proxy-basepath/*',
    toPath: 'https://nf-test-next-proxy-target.netlify.app/reverse-proxy-basepath/:splat',
    statusCode: 200,
  });
};