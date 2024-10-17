const { verifyCertificate } = require('./utils');

exports.gcpCertificateValidationApi = async (req, res) => {
    try {
        console.log('Received request body:', req.body);
        const { qrCodeData } = req.body;
        console.log('Extracted qrCodeData:', qrCodeData);

        if (!qrCodeData) {
            console.log('QR code data is missing');
            return res.status(400).json({ error: 'QR code data is required' });
        }

        const trimmedQrCodeData = qrCodeData.trim();
        console.log('Trimmed qrCodeData:', trimmedQrCodeData);

        const isValid = await verifyCertificate(trimmedQrCodeData);
        console.log('Verification result:', isValid);

        if (isValid) {
            return res.status(200).json({ message: 'Certificate is valid' });
        } else {
            return res.status(400).json({ error: 'Invalid certificate' });
        }
    } catch (error) {
        console.error('Error validating certificate:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
    PORT = 8080;
    console.log(`Server started ${PORT}`)
};
