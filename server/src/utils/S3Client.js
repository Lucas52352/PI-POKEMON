require('dotenv').config()
const {AWS_ACCESS_KEY_ID, AWS_SECRET_ACCESS_KEY, AWS_BUCKET_NAME} = process.env

class S3Client {
    client

    constructor() {
        this.client = new AWS.S3({
            accessKeyId: AWS_ACCESS_KEY_ID,
            secretAccessKey: AWS_SECRET_ACCESS_KEY
          })
    }

    uploadFile = (filename, fileContent) => {
        const params = {
            Bucket: AWS_BUCKET_NAME,
            Key: `${filename}.jpg`,
            Body: fileContent
        }

        this.client.upload(params, (err, data) => {
            if (err) {
                console.log('Error while uploading file to S3');
              reject(err)
            }
            resolve(data.Location)
          })
    }
}

module.exports = {
    S3Client
}