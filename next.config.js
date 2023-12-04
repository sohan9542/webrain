// next.config.js
module.exports = {
    // Other Next.js configuration options
  
    webpack: (config, { isServer }) => {
      // Ignore font and asset errors in CSS files
      if (!isServer) {
        config.module.rules.forEach((rule) => {
          if (rule.oneOf) {
            rule.oneOf.forEach((loaderRule) => {
              if (
                loaderRule.sideEffects === false &&
                loaderRule.issuer?.test(/\.(css|scss|sass)$/i)
              ) {
                loaderRule.ignore = true;
              }
            });
          }
        });
      }
  
      return config;
    },
    images: {
      domains: ["cdn.sanity.io"], // Add your image domains here
    },
  };
  