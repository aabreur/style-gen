const sass = require('sass');
const { render } =  require('template-file');
const { saveCSS } = require('../storage');
const fs = require('fs');

class StyleSheetBuilder {
    constructor(){
        this.themes = {
            bootstrap: {
                templateFile: `${__dirname}/bootstrap/_overrides.scss.template`,
                variablesFile: `${__dirname}/bootstrap/_overrides.scss`,
                targetFile: `${__dirname}/bootstrap/bootstrap.scss`,
                inputAdapter: (colors) => ({
                    primary:   colors[0] || '0d6efd',
                    secondary: colors[1] || '6c757d',
                    success:   colors[2] || '198754',
                    info:      colors[3] || '0dcaf0',
                    bg:        colors[4] || 'adb5bd'
                })
            }
        }
    }

    async compileStyleSheet (themeName = 'bootstrap', pattern) {
        if (Object.keys(this.themes).includes(themeName)){
            const theme = this.themes[themeName];
            const inputData = theme.inputAdapter(pattern.colors);

            this._compileVariablesFile(inputData, theme.templateFile, theme.variablesFile);
            return this._compileSCSS(themeName, pattern.id, theme.targetFile);
        } else {
            throw(`Unknow theme: ${theme}`);
        }
    }

    // private

    _compileVariablesFile(inputData, templateFile, variablesFile) {
        const varsTemplate = fs.readFileSync(templateFile, 'utf8');
        const vars = render(varsTemplate, inputData);
        fs.writeFileSync(variablesFile, vars);
        return;
    }

    _compileSCSS(themeName, patternID, targetFile) {
        const result = sass.compile(targetFile);
        const filename = `${themeName}${patternID}`;
        return saveCSS(filename, result.css);
    }

}

module.exports = { StyleSheetBuilder };