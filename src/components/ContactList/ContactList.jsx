import {
  ListItemText,
  DeleteButton,
  ListItem,
  List,
} from './ContactList.styled';
const ContactList = ({ items, onDelete }) => {
  return (
    <List>
      {items.map(({ id, name, number }) => {
        return (
          <ListItem key={id}>
            <ListItemText>
              {name} - {number}
            </ListItemText>
            <DeleteButton onClick={() => onDelete(id)}>Delete</DeleteButton>
          </ListItem>
        );
      })}
    </List>
  );
};

export default ContactList;
