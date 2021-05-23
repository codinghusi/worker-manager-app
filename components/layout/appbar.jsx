import User from './user'
import { Menu } from 'semantic-ui-react';
import Link from 'next/link';

export default function Appbar() {
    return (
        <Menu secondary>
            <Link href="/" passRef>
                <Menu.Item> Dashboard </Menu.Item>
            </Link>

            <Link href="/workers" passRef>
                <Menu.Item href="/workers"> Mitarbeiter </Menu.Item>
            </Link>

            <Link href="/processes" passRef>
                <Menu.Item> Arbeitsprozesse </Menu.Item>
            </Link>

            <Menu.Menu position="right">
                <Menu.Item>
                    <User />
                </Menu.Item>
            </Menu.Menu>
            
        </Menu>
    );
}