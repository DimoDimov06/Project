const url = "api/Products";

export function Get() {
    return fetch(url, {
        method: 'GET',
        headers: {
            'content-type': 'application/json'
        }
    }).then(response => response.json())
}