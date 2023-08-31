import { nanoid } from 'nanoid';

export const ContactItem = ({ items, onDelete }) => {
    return (
        
        items.map(({name, number, id}) => {
            return (
                <li key={nanoid()}>{name}: {number}
                    <button onClick={() => onDelete(id)} type="button">Delete</button>
                </li>
            )
        })
       
    )
}