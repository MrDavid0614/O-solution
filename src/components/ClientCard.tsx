import Client from "../types/Client"

interface PropTypes {
    client: Client;
}

const ClientCard = ({ client }: PropTypes) => {
    return (
        <li>
            <strong>{ client.name }</strong>
            { client.addresses.map((address, i) => <address key={ i }>{ address }</address>) }
        </li>
    )
}

export default ClientCard
