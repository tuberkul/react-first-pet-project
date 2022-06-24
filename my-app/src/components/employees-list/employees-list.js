import EmployeesListItem from '../emloyees-list-item/employees-list-item';
import './employees-list.css'

const EmployeesList = ({data, onDelete, onToggleprop}) => {

    const elements = data.map(item => {
        const {id, ...itemProps} = item;
        return (
            <EmployeesListItem 
                key = {id} 
                {...itemProps}
                onDelete={() => onDelete(id)}
                onToggleprop={(e) => onToggleprop(id, e.currentTarget.getAttribute('data-toggle'))} 
                /> 
        )
    })

    return (
        <ul className="app-list list-group">
            {elements}
        </ul>
    )
}

export default EmployeesList;