import { useRef, useState } from "react"
import { Dialog, Transition } from "@headlessui/react"

import guid from "../utils/guid"

export default function AddModal({ isVisible, setIsVisible, onAddClient }) {
    const addButtonRef = useRef(null)
    const [ name, setName ] = useState('')
    const [ addresses, setAddresses ] = useState([])
    const [ error, setError ] = useState('')

    const handleOnAddressesChange = event => {
        const { value } = event.target
        const newAdresses = value.split(';')
        setAddresses(newAdresses)
    };

    const handleOnAdd = event => {
        event.preventDefault()
        
        if (name && addresses[0] ) {
            const client = { id: guid(), name, addresses }
            onAddClient(client)
            handleOnClose()
            return;
        }
        
        setError('Debes completar ambos campos para poder añadir el cliente.')
    }

    const handleOnClose = () => {
        setIsVisible(false)
        setError('')
    }

    return (
        <Transition
            show={ isVisible }
            enter="transition duration-100 ease-out"
            enterFrom="transform scale-95 opacity-0"
            enterTo="transform scale-100 opacity-100"
            leave="transition duration-75 ease-out"
            leaveFrom="transform scale-100 opacity-100"
            leaveTo="transform scale-95 opacity-0"
        >
            <Dialog
                onClose={ () => setIsVisible(false) }
                initialFocus={ addButtonRef }
                className="fixed z-10 inset-0 overflow-y-auto top-1/4 text-white"
            >
                <Dialog.Overlay className="fixed inset-0 bg-black opacity-50" />

                <div className="relative bg-slate-900 rounded p-5 max-w-sm mx-auto">
                    <Dialog.Title className="pb-2 text-4xl border-b-2 border-gray-800">
                        Añadir cliente
                    </Dialog.Title>
                    <form className="mt-5 flex flex-col gap-2">
                        <label htmlFor="clientName">Nombre del cliente</label>
                        <input
                            type="text"
                            className="p-2 rounded outline-none text-black mb-3"
                            placeholder="Nombre del cliente"
                            id="clientName"
                            onChange={ event => setName(event.target.value) }
                            required
                        />
                        <label htmlFor="clientAddress">Dirección del cliente
                            <br />
                        <small>(En caso de tener varias, separarlas por ; )</small>
                        </label>
                        <input 
                            type="text"
                            className="p-2 rounded outline-none text-black mb-3"
                            placeholder="Dirección del cliente"
                            id="clientAddress"
                            onChange={ handleOnAddressesChange }
                            required
                        />
                        { error && <p className="text-red-500 p-2" >Error: { error }</p> }
                        <button
                            type="submit"
                            ref={ addButtonRef }
                            className="bg-green-600 p-2 rounded"
                            onClick={ handleOnAdd }
                        >
                            Añadir
                        </button>
                        <button className="bg-gray-500 p-2 rounded" onClick={ () => handleOnClose() }>Cerrar</button>
                    </form>
                </div>
        </Dialog>
    </Transition>
    )
}
