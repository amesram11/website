module.exports = {
    async redirects() {
      return [
        {
            source: '/donate',
            destination: 'https://secure.actblue.com/donate/newconsensus',
            permanent: false,
        },
      ]
    },
  }