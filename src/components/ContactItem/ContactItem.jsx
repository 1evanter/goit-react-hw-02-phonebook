import { nanoid } from 'nanoid';

export const ContactItem = ({ items }) => {
    return (
        
        items.map(item => {
            return (
                <li key={nanoid()}>{item.name}: {item.number}</li>
            )
        })
       
    )
}