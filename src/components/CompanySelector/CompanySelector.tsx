import Company from '../../types/Company';
import './CompanySelector.css'

interface PropTypes {
    companies: Company[];
    onChange: (company: Company) => void;
}

const CompanySelector = ({ companies, onChange }: PropTypes) => {

    const onCompanyChanges = (companyName: string) => {
        const selectedCompany = companies.find(company => company.name === companyName )!;
        onChange(selectedCompany);
    }

    return (
        <div className='company-selector'>
            <select onChange={ event => onCompanyChanges(event.target.value) }>
                {
                    companies.map(company => <option value={ company.name } key={ company.id } >{ company.name }</option>)
                }
            </select>
        </div>
    )
}

export default CompanySelector;