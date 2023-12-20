export const SERVER_URL = 'http://localhost:3000'

export async function serverGetResults() {
    let response = await (fetch(SERVER_URL + '/api/results', {
        method: "GET",
        headers: { 'Content-Type': 'application/json' },
    }))
    let dataObj = await response.json()

    return dataObj
}

export async function serverAddParticipant(participantObj) {
    let response = await fetch(SERVER_URL + '/api/results', {
        method: "POST",
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(participantObj),
    }).then((response) => {
        return response.json()
    })
    // return data
}