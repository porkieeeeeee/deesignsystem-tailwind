module.exports = {
    corePlugins: {
        preflight: true,
    },
    purge: [],
    darkMode: false, 
    theme: {
        colors: {
            primary: "#4c6ef5",
            gray000: "#fff",
            gray100: "#495057",
            gray200: "#292e33",
            gray300: "#212529",
        },
        fontWeight: {
            'regular': '400',
            'medium': '500',
            'semibold': '600',
            'bold': '700',
        },
        fontFace: {
            'Pretendard': [
              {
                fontWeight: '400',
                src: [
                  'url("assets/fonts/Pretendard-Regular.woff2") format("woff2")',
                  'url("assets/fonts/Pretendard-Regular.woff") format("woff")'
                ],
                fontDisplay: 'swap'
              },
              {
                fontWeight: '500',
                src: [
                  'url("assets/fonts/Pretendard-Medium.woff2") format("woff2")',
                  'url("assets/fonts/Pretendard-Medium.woff") format("woff")'
                ],
                fontDisplay: 'swap'
              },
              {
                fontWeight: '600',
                src: [
                  'url("assets/fonts/Pretendard-SemiBold.woff2") format("woff2")',
                  'url("assets/fonts/Pretendard-SemiBold.woff") format("woff")'
                ],
                fontDisplay: 'swap'
              },
              {
                fontWeight: '700',
                src: [
                  'url("assets/fonts/Pretendard-Bold.woff2") format("woff2")',
                  'url("assets/fonts/Pretendard-Bold.woff") format("woff")'
                ],
                fontDisplay: 'swap'
              }
            ]
          }
    },
    variants: {
        extend: {},
    },
    plugins: [],
};
