const { StyleSheetBuilder } = require('../services/builder');
const { getPattern } = require('../components/colourLoversClient');

const builder = new StyleSheetBuilder();

exports.buildStyleSheet = async (req, res, next) => {
    let cssURL
    try {
        const pattern = await getPattern(req.body.patternID);
        cssURL = await builder.compileStyleSheet(req.body.theme, pattern);
    } catch (err) {
        console.log(err);
        next(err);
    }

    res.json({ 
        cssPath: `http://localhost:3000/${cssURL}`,
        demo: `http://localhost:3000/demo/${req.body.theme}/${req.body.patternID}`
    });
}