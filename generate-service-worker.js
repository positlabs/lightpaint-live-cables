const generateServiceWorkers = require('generate-service-worker');
const fs = require('fs')

const serviceWorkers = generateServiceWorkers({
  cache: {
    offline: true,
    precache: ['/build/js/patch.js'],
    strategy: [{
      type: 'offline-only',
      matches: ['\\.js']
    }],
  }
});
fs.writeFileSync('sw.js', serviceWorkers.main)