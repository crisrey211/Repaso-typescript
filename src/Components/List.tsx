interface Props {
    subs: Array<{
        nick: string
        subMonth: number
        avatar: string
        description?: string
    }>
}

export const List = ({ subs }: Props) => {
    return (
        <ul>
            {subs.map((item) => (
                <li key={item.nick}>
                    <img src={item.avatar} alt={`Avatar for ${item.nick}`} />
                    <h4>
                        {item.nick} <small>{item.subMonth}</small>
                    </h4>
                    <p>{item.description}</p>
                </li>
            ))}
        </ul>
    )
}
