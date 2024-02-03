import React from 'react'
import { Sub } from '../types'

export interface FormState {
    inputValues: Sub
}

export interface FormProps {
    onNewSub: React.Dispatch<React.SetStateAction<Sub[]>>
}

export const Form = ({ onNewSub }: FormProps) => {
    const [inputValues, setInputValues] = React.useState<
        FormState['inputValues']
    >({
        nick: '',
        subMonths: 0,
        avatar: '',
        description: '',
    })

    const handleSubmit = (ev: React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault()
        onNewSub((subs) => [...subs, inputValues])
    }

    const handleChange = (
        ev: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        setInputValues({ ...inputValues, [ev.target.name]: ev.target.value })
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    onChange={handleChange}
                    value={inputValues.nick}
                    type="text"
                    name="nick"
                    placeholder="nick"
                />
                <input
                    onChange={handleChange}
                    value={inputValues.subMonths}
                    type="number"
                    name="subMonths"
                    placeholder="subMonths"
                />
                <input
                    onChange={handleChange}
                    value={inputValues.avatar}
                    type="text"
                    name="avatar"
                    placeholder="avatar"
                />
                <textarea
                    onChange={handleChange}
                    value={inputValues.description}
                    name="description"
                    placeholder="description"
                />
                <button>Enviar formulario</button>
            </form>
        </div>
    )
}
