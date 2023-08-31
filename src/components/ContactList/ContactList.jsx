import { ContactItem } from "components/ContactItem/ContactItem"
import { List } from "./ContactList.styled" 
export const ContactList = ({items}) => {
    return (
        <List >
            <ContactItem items={items} />
    </List>
    )

}