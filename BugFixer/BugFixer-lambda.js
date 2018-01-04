const ddb = new AWS.DynamoDB();
let AWS = require('aws-sdk');

exports.handler = function (event, context, callback) {
    ddb.get({
        TableName: 'Invoice',
        Key: { invoice_number: 'HOK', clienId_date: 'KARI' }
    }, function (err, data) {
        if (err) {
            //handle error
        } else {
            //your logic goes here
        }
    });

}