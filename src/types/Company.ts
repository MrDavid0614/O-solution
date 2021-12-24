import Client from './Client';

interface Company {
    id: number;
    name: string;
    clients: Client[];
}

export default Company;