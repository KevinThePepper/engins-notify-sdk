/**
 * Returns an error response using the [default response format]{@link responseJson}.
 * @param error The error message.
 * @param additionalParams Any additional information to add to the response.
 */
export function failedResponseJson(error: string, additionalParams = {}) {
    return responseJson({ok: false, error: error, additionalParams: additionalParams});
}

/**
 * Returns a successful response using the [default response format]{@link responseJson}.
 * @param message The message.
 * @param additionalParams Any additional information to add to the response.
 */
export function successReponseJson(message: string, additionalParams = {}) {
    return responseJson({ok: true, message: message, additionalParams: additionalParams});
}

/**
 * Default response format for this project.
 * @param ok Boolean flag determining whether the request came back good or not.
 * @param message The message.
 * @param error The error message. If an error message is defined, it overrides the `message` parameter.
 * @param additionalParams Any additional information to add to the response.
 */
export function responseJson({ok = true, message = '', error = '', additionalParams = {}} = {}) {
    let response = {
        ok: ok
    };

    // add error message if applicable
    if (error !== '') {
        response = Object.assign(response, {message: error});
    } else if (message !== '') {
        response = Object.assign(response, {message: message});
    }

    // add additional parameters
    response = Object.assign(response, additionalParams);

    return response;
} 