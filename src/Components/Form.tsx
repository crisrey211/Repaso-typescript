import React from 'react'

export interface FormState {
    nick: string
    subMonths: number
    avatar: string
    description: string
}

export const Form = () => {
    const [inputValues, setInputValues] = React.useState({
        nick: '',
        subMonth: 0,
        avatar: '',
        description: '',
    })

    const handleSubmit = () => {}

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
                    value={inputValues.subMonth}
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
            </form>
        </div>
    )
}
