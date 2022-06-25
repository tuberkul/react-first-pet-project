
import './employees-list-item.css';


const EmployeesListItem = (props) => {

        const {name, salary, onDelete, onToggleprop, increase, rise} = props;

        let nameOfClasses = 'list-group-item d-flex justify-content-between';

        if (increase) {
            nameOfClasses += ' increase';
        } 

        if (rise) {
            nameOfClasses += ' like';
        } 
            return (
                <li className = {nameOfClasses}>
                    <span className = "list-group-item-label"
                          onClick = {onToggleprop} 
                          data-toggle="rise"
                          >{name}</span>
                    <input type = "text" className = "list-group-item-input" defaultValue = {salary + '$'}/>
                    <div className = "d-flex justify-content-center align-items-center">
                        <button type = "button"
                                className = "btn-cookie btn-sm"
                                onClick = {onToggleprop}
                                data-toggle="increase">
                                <i className="fas fa-cookie"></i>
                        </button>
        
                        <button type = "button"
                                className = "btn-trash btn-sm"
                                onClick={onDelete}>
                                <i className="fas fa-trash"></i>
                        </button>
                        <i className="fas fa-star"></i>
                    </div>        
                </li>
            )
    
}

export default EmployeesListItem;