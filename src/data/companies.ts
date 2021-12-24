import Company from "../types/Company";

const companies: Company[] = [
    {
        id: 1,
        name: 'X Company',
        clients: [
            {
                id: 1,
                name: 'Banco Popular',
                addresses: ['AVE. ESPAÑA ESQ. 26 DE ENERO ENS. ISABELITA', 'AV. IMBERT , FTR. OCHOA NO. 53, PUEBLO NUEVO']
            }
        ]
    },
    {
        id: 2,
        name: 'Y Company',
        clients: []
    }
];

export default companies;