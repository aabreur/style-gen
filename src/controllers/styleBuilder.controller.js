const { StyleSheetBuilder } = require('../services/builder');
const { getPattern } = require('../components/colourLoversClient');

const builder = new StyleSheetBuilder();

exports.buildStyleSheet = async (req, res) => {
    const pattern = await getPattern(req.body.patternID);
    const cssURL = await builder.compileStyleSheet(req.body.theme, pattern);
    res.json({ css: cssURL });
}