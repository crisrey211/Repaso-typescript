import { useState } from 'react'
import './App.css'

function App() {
    const [subs, setSubs] = useState([
        {
            nick: 'dapelu',
            subMonth: 3,
            avatar: 'https://i.pravatar.cc/150?u=dapelu',
            description: 'Dapelu hace de moredador a veces',
        },
        {
            nick: 'Christian',
            subMonth: 987,
            avatar: 'https://i.pravatar.cc/150?u=dapelu',
        },
    ])

    return <div className="App"></div>
}

export default App
