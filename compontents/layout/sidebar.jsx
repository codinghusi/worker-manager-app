import { Drawer, List, ListItem, ListItemIcon, ListItemText } from '@material-ui/core';
import { Face } from '@material-ui/icons';

const items = [
    { name: 'Dashboard', icon: Face },
    { name: 'Mitarbeiter', icon: Face },
    { name: 'Übersicht', icon: Face },
]

export default function Sidebar() {
    return (
        <Drawer anchor='left' variant='permanent'>
            <List>
                {items.map(item => (
                    <ListItem button key={item.name}>
                        <ListItemIcon>
                            <item.icon />
                        </ListItemIcon>
                        <ListItemText>
                            {item.name}
                        </ListItemText>
                    </ListItem>
                ))}
            </List>
        </Drawer>
    );
}