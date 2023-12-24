const mongoose = require('mongoose');
const Element = require('../model/element').Element;

async function saveSingleElement(elementData) {
    const element = new Element({
        symbol: elementData.symbol,
        name: elementData.name,
        atomicNumber: elementData.atomicNumber,
        atomicWeight: elementData.atomicWeight,
        electronicConfiguration: elementData.electronicConfiguration,
        period: elementData.period,
        group: elementData.group
    });
    return await element.save();
}

function getElementsHandler(req, res) {
    Element.find({}, (err, docs) => {
        if (err) {
            console.log(err);
        }
        const body = {
            elements: docs
        }
        res.send(body);
    });
}

function saveElementHandler(req, res) {
    const responseMessage = { status: 'success' };
    try {
        for (let element of req.body.elements) {
            saveSingleElement(element);
        }
    } catch(err) {
        console.log(err);
        responseMessage.status = 'failed';
    }
    res.send(JSON.stringify(responseMessage));
}

module.exports.getController = (app) => {
    app.route('/elements')
       .get(getElementsHandler)
       .post(saveElementHandler);
}