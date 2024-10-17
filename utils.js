async function verifyCertificate(qrCodeData) {
    console.log('Verifying certificate:', qrCodeData);
    const validCertificates = ['CERT12345', 'CERT67890', 'CERTABCDE'];
    const isValid = validCertificates.includes(qrCodeData);
    console.log('Valid certificates:', validCertificates);
    console.log('Is certificate valid?', isValid);
    return isValid;
}


module.exports = { verifyCertificate };
