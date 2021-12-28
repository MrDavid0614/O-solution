import ClientListItem from "./ClientListItem"

export default function ClientsList({ clients, onEditClick, onDeleteClick }) {

    return (
        <section>
            {
                clients.length
                ? <>
                    <h3 className="text-2xl mb-5 text-center">Clientes:</h3>
                    <ul className="flex flex-col gap-10">
                        {
                            clients.map(client => <ClientListItem client={ client } key={ client.id } onEditClick={ onEditClick } onDeleteClick={ onDeleteClick } />)
                        }
                    </ul>
                </>
                :
                <p className="text-2xl">Esta empresa no tiene clientes todavía.</p>
            }
        </section>
    )
}
