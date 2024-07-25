module.exports = () => ({
  'navigation': { enabled: true },
  'upload': {
    'config': {
      'sizeLimit': 250 * 1024 * 1024, // 256mb in bytes
      'breakpoints': {
        'xlarge': 1920,
        'large': 1000,
        'medium': 750,
        'small': 500,
        'xsmall': 64
      },
    },
  },
  'seo': { enabled: true }
});
