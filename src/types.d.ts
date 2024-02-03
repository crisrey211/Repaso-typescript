export interface Sub {
    nick: string
    subMonths: number
    avatar: string
    description?: string
}

export interface AppState {
    subs: Array<Sub>
    newSubsNumber: number
}

interface Props {
    subs: Array<Sub>
}
