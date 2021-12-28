export default function Navbar({ onClick }) {
    return (
        <nav className="bg-gray-900 text-white px-10 py-4 flex justify-between gap-10">
            <p className="font-bold text-4xl">Empresa X</p>
            <button className="py-2 px-5 rounded bg-green-600" onClick={ () => onClick() } >Agregar cliente</button>
        </nav>
    )
}
