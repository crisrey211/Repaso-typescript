import React, { useState } from 'react'
import './App.css'

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
]

export interface Sub {
    nick: string
    subMonth: number
    avatar: string
    description: string
}

function App() {
    const [subs, setSubs] = useState<Array<Sub>>([])

    React.useEffect(() => {
        setSubs(INITIAL_STATE)
    }, [])

    return (
        <div className="App">
            <h1>CR subs</h1>
            <ul>
                {subs.map((item) => (
                    <li key={item.nick}>
                        <img
                            src={item.avatar}
                            alt={`Avatar for ${item.nick}`}
                        />
                        <h4>
                            {item.nick} <small>{item.subMonth}</small>
                        </h4>
                        <p>{item.description}</p>
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default App
