import {SERVER_URL} from "./getResults.js";

export async function PatchParticipant(id, ParticipantObj) {
    let response = await fetch(SERVER_URL + `/api/results/${id}`, {
        method: "PATCH",
        body: JSON.stringify(ParticipantObj)
    })
    return response.json()
}