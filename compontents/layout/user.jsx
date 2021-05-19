import Dropdown from 'react-bootstrap/Dropdown';
import Button from 'react-bootstrap/Button';
import { BiUserCircle } from 'react-icons/bi';
import IconWithText from '../../helper/icon-with-text';

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
                <Button>
                    <IconWithText>
                        <BiUserCircle />
                        Anmelden
                    </IconWithText>
                </Button>
            ) || (
                <Dropdown>
                    <Dropdown.Toggle variant="primary">
                        <IconWithText>
                            <BiUserCircle />
                            Dein Name
                        </IconWithText>
                    </Dropdown.Toggle>

                    <Dropdown.Menu>
                        <Dropdown.Item>Profil</Dropdown.Item>
                        <Dropdown.Item>Account</Dropdown.Item>
                        <Dropdown.Item>Logout</Dropdown.Item>
                    </Dropdown.Menu>
                </Dropdown>
            )}
        </>
    );
}