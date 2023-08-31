import { ContactItem } from "components/ContactItem/ContactItem"

export const ContactList = ({items}) => {
    return (
        <ul >
            <ContactItem items={items} />
    </ul>
    )

}