import User from './user'
import { Menu } from 'semantic-ui-react';

export default function Appbar() {
    return (
        <Menu secondary>
            <Menu.Item> Dashboard </Menu.Item>
            <Menu.Item href="/workers"> Mitarbeiter </Menu.Item>
            <Menu.Item> Arbeitsprozesse </Menu.Item>

            <Menu.Menu position="right">
                <Menu.Item>
                    <User />
                </Menu.Item>
            </Menu.Menu>
            
        </Menu>
    );
}