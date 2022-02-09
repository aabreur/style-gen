const { get } = require('got');

const baseUrl = 'http://www.colourlovers.com/api';

exports.getPattern = async (patternID) => {
    const url = `${baseUrl}/pattern/${patternID}`;
    const { body } = await get(
        url,  
        {
            searchParams: {
                format: 'json'
            }
        })
    const data = JSON.parse(body);
    return data[0];
}

    