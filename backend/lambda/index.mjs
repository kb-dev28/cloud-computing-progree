export const handler = async (event) => {
    // Recorremos todos los registros de eventos que envía S3
    for (const record of event.Records) {
        const bucketName = record.s3.bucket.name;
        const objectKey = decodeURIComponent(record.s3.object.key.replace(/\+/g, " "));
        const eventName = record.eventName;
        const fileSize = record.s3.object.size;

        // Esto genera los logs en tiempo real solicitados por la internship
        console.log(`[PROGREE LOG ENGINE] Evento detectado: ${eventName}`);
        console.log(`[PROGREE LOG ENGINE] Archivo procesado: ${objectKey}`);
        // Decodifica información básica de depuración de texto / logs
        console.log(`[PROGREE LOG ENGINE] Bucket origen: ${bucketName} | Tamaño: ${fileSize} bytes`);
    }

    const response = {
        statusCode: 200,
        body: JSON.stringify('¡Evento de S3 procesado y registrado con éxito en Progree Engine!'),
    };
    return response;
};