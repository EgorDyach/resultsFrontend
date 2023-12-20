const SERVER_URL = "http://localhost:3000"

export async function serverLogin(data) {
    let response = await fetch(SERVER_URL + '/api/results/login', {
            method: "POST",
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data),
        })
    let dataResp = await response.json()
    console.log(dataResp)
        return await dataResp
}