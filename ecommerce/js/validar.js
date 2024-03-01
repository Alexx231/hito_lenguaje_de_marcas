function validateJSON(jsonString) {
    try {
        JSON.parse(jsonString);
        return true;
    } catch (error) {
        return false;
    }
}

function readFile(filePath) {
    return fetch(filePath)
        .then(response => response.text())
        .catch(error => console.error(`Error al leer el archivo: ${error}`));
}

function validateJSONFile(filePath) {
    return readFile(filePath)
        .then(fileContent => {
            if (fileContent) {
                return validateJSON(fileContent);
            } else {
                return false;
            }
        });
}

validateJSONFile('data/clientes.json')
    .then(isValidJSON => console.log(`Es valido el archivo JSON?: ${isValidJSON}`));