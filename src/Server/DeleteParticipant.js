import {SERVER_URL} from "./getResults.js";
export async function DeleteParticipant(id) {
    let response = await fetch(SERVER_URL + '/api/results/' + id, {
        method: "DELETE",
    })

    let data = await response.json()

    return data
}