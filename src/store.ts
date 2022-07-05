import { writable, Writable } from "svelte/store";

export interface ConnectionError { kind: "connectionError", error: string }
export interface Connecting { kind: "connecting" }
export interface NotConnected { kind: "notConnecting" }
export interface Chatting { kind: "chatting", messages: string[] }

export type State = NotConnected | Connecting | Chatting | ConnectionError

export interface AppState {
    state: State
}

export const appState: Writable<AppState> = writable({ state: { kind: "notConnecting" } })

export const startChatting = async (appState: Writable<AppState>, enterpriseId: string): Promise<void> => {

    // Vistor <--> Perkins
    // 1. Auth enterprise
    // 2. Find available Perkins
    // 3. Create room
    // 4. Connect to room

    appState.set({ state: { kind: "connecting" } })
    const identity = "some_id"
    // const res = await fetch(`http://localhost:8080/visitor/token/${identity}`);
    const res = await fetch(`http://localhost:8080/visitor/token/${identity}`, { headers: { Authorization: `Bearer ${enterpriseId}` } });
    // const res = await fetch(`http://localhost:8080/visitor/token/some_id`, {
    //     method: "GET", crossDomain: true, credentials: "include", headers: {
    //         "Authorization": `Bearer ${enterpriseId}`
    //     }
    // })
    console.log(res);
    await new Promise(res => setTimeout(res, 1000, "done sleeping"));
    appState.set({ state: { kind: "chatting", messages: ["hi"] } })
}
