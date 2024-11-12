// eslint-disable-next-line @typescript-eslint/no-require-imports
const withTM = require('next-transpile-modules')(['react-spring']);

module.exports = withTM({
    compiler: {
        styledComponents: true,
    },
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'raw.githubusercontent.com',
            },
        ],
    },
    async redirects() {
        return [
            {
                source: '/',
                destination: '/swap',
                permanent: true,
            },
        ];
    },
});
