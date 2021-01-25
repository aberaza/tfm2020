const AWS = require('aws-sdk');
const S3_BUCKET_NAME = "postacceldatabucket";
const S3_BUCKET_ARN = "arn:aws:s3:::postacceldatabucket";

const s3 = new AWS.S3();

exports.handler = async (event) => {
    let saveResponse = await saveToS3(event);
    const response = {
        statusCode: 200,
        body: JSON.stringify(saveResponse),
    };
    return response;
};

async function saveToS3(payload ={sid:"unknown"} ) {
    var params = {
        Bucket: S3_BUCKET_NAME,
        Key: "accelCapture/" + payload.sid + Date.now() + ".json",
        Body: JSON.stringify(payload),
        ContentType: 'application/json'
    };
    
    try {
        let s3Response = await s3.putObject(params).promise();
        return { success: true, path: s3Response.Location };
    }catch(err) {
        return {success: false, path:'', error : err};
    }
}
