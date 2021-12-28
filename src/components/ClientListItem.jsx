export default function ClientListItem({ client, onEditClick, onDeleteClick }) {
    return (
        <li className="bg-slate-900 rounded list-none p-5">
        <div className="pb-2 flex justify-between border-b-2 border-gray-700">
            <h4 className="font-bold text-xl">{ client.name }</h4>
            <div className="flex gap-3">
                <button className="p-2 bg-yellow-500 hover:bg-yellow-600 rounded outline-none" onClick={ () => onEditClick(client) }>Editar</button>
                <button className="p-2 bg-red-600 hover:bg-red-700 rounded outline-none" onClick={ () => onDeleteClick(client) }>Eliminar</button>
            </div>
        </div>
            <div className="mt-5">
                <p className="font-bold mb-2">Direcciones:</p>
                { client.addresses.map((address, i) => <address key={ i }>{ address }</address>) }
            </div>
        </li>
    )
}
