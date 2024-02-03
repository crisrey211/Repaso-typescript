import { Props } from '../types'

export const List = ({ subs }: Props) => {
    const renderList = (): JSX.Element[] => {
        return subs.map((item) => (
            <li key={item.nick}>
                <img src={item.avatar} alt={`Avatar for ${item.nick}`} />
                <h4>
                    {item.nick} <small>{item.subMonths}</small>
                </h4>
                <p>{item.description}</p>
            </li>
        ))
    }

    return <ul>{renderList()}</ul>
}
