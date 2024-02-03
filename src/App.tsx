import React, { useState } from 'react'
import './App.css'
import { List } from './Components/List'
import { Form } from './Components/Form'
import { AppState, Sub } from './types'

const INITIAL_STATE = [
    {
        nick: 'dapelu',
        subMonths: 3,
        avatar: 'https://i.pravatar.cc/150?u=dapelu',
        description: 'Dapelu hace de moredador a veces',
    },
    {
        nick: 'Christian',
        subMonths: 987,
        avatar: 'https://i.pravatar.cc/150?u=sergio_serrano',
    },
    {
        nick: 'Miguel',
        subMonths: 987,
        avatar: 'https://i.pravatar.cc/150?u=midu',
    },
]

function App() {
    const [subs, setSubs] = useState<AppState['subs']>([])
    const [newSubsNumber, setNewSubsNumber] =
        useState<AppState['newSubsNumber']>(0)

    React.useEffect(() => {
        setSubs(INITIAL_STATE)
    }, [])

    const handleNewSub = (onNewSub: Sub): void => {
        setSubs((prevState) => [...prevState, onNewSub])
    }

    return (
        <div className="App">
            <h1>CR subs</h1>
            <List subs={subs} />
            <Form onNewSub={handleNewSub} />
        </div>
    )
}

export default App
