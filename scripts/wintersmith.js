const replace = require('replace-in-file');
const wintersmith = require('wintersmith');

const env = wintersmith('./config.json');

if (process.env.DEPLOY_URL) {
  env.locals.url = process.env.DEPLOY_URL;
}

env.build((error) => {
  if (error) throw error;
  console.log('Generated site HTML');

  // place absolute paths
  if (process.env.DEPLOY_URL) {
    const options = {
      files: './public/**/*.{html,xml}',
      from: /(?:src|href)=(?:"|&quot;)(\/)/g,
      to: (match) => match.replace('\/', `${process.env.DEPLOY_URL}/`),
    };

    replace.sync(options);

    console.log('Replaced URL paths');
  }
});
