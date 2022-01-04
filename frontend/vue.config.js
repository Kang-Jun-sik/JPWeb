module.exports = {
    outputDir: "../src/main/resources/static",
    indexPath: "../static/index.html",
    devServer: {
        proxy: "http://localhost:8080"
    },
    filenameHashing: false,
    chainWebpack: config => {
        const svgRule = config.module.rule("svg");
        svgRule.uses.clear();
        svgRule.use("vue-svg-loader").loader("vue-svg-loader");
        config.optimization.minimize(false);
    },
    transpileDependencies: ['vuetify'],

    pluginOptions: {
        i18n: {
            locale: 'en',
            fallbackLocale: 'en',
            localeDir: 'locales',
            enableInSFC: false,
        },
    },
}
