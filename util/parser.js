function featureParser(json) {
    const TA = json.properties.TA_NAME;
    const DST = json.properties.DISTRICT;
    const coordinates = [];

    // return { TaName: TA, District: DST, coordinates: json.geometry.coordinates }
    json.geometry.coordinates.forEach(element => {
        element.forEach(coord => {
            coord.forEach(el => {
               console.log(`[${el}]\n`);
               coordinates.push(`[${el}]`);
            });
        });
    });
    return `${TA}, ${DST}, [[${coordinates}]]`
}

module.exports = {featureParser};