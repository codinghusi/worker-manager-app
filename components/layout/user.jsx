import { Button, Dropdown } from 'semantic-ui-react';

export function getStaticProps() {
    return {
        props: {
            loggedIn: true
        }
    };
}

export default function User() {
    const loggedIn = false;

    return (
        <>
            {!loggedIn && (
                <Button> Anmelden </Button>
            ) || (
                <Dropdown
                    text="Account"
                    icon="user"
                    floating
                    labeled
                    button
                    className="icon"
                >
                    <Dropdown.Menu>
                        <Dropdown.Item text="Profil" />
                        <Dropdown.Item text="Rechnungen" />
                        <Dropdown.Item text="Abmelden" />
                    </Dropdown.Menu>
                </Dropdown>
            )}
        </>
    );
}