import React, { useState } from 'react'
import './App.css'
import { List } from './Components/List'
import { Form } from './Components/Form'

const INITIAL_STATE = [
    {
        nick: 'dapelu',
        subMonth: 3,
        avatar: 'https://i.pravatar.cc/150?u=dapelu',
        description: 'Dapelu hace de moredador a veces',
    },
    {
        nick: 'Christian',
        subMonth: 987,
        avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
    },
    {
        nick: 'Miguel',
        subMonth: 987,
        avatar: 'https://i.pravatar.cc/150?u=midu',
    },
]

export interface Sub {
    nick: string
    subMonth: number
    avatar: string
    description?: string
}

export interface AppState {
    subs: Array<Sub>
    newSubsNumber: number
}

function App() {
    const [subs, setSubs] = useState<AppState['subs']>([])
    const [newSubsNumber, setNewSubsNumber] =
        useState<AppState['newSubsNumber']>(0)

    React.useEffect(() => {
        setSubs(INITIAL_STATE)
    }, [])

    return (
        <div className="App">
            <h1>CR subs</h1>
            <List subs={subs} />
            <Form />
        </div>
    )
}

export default App
