exports.generate = (err, message, status, data) => {

    let response = {
        error: err,
        message: message,
        status: status,
        data: data
    };

    return response;
}