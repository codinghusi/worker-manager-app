import { Face } from '@material-ui/icons';
import IconWithText from '../helper/icon-with-text';
import { Button, Menu, MenuItem } from '@material-ui/core';
import { useState } from 'react';

export function getStaticProps() {
    return {
        props: {
            loggedIn: true
        }
    };
}

export default function User() {
    const loggedIn = true;
    const [anchorEl, setAnchorEl] = useState(false);

    function openMenu(event) {
        setAnchorEl(event.currentTarget);
    }

    function closeMenu() {
        setAnchorEl(null);
    }

    return (
        <>
            {!loggedIn && (
                <IconWithText>
                    <Face />
                    Anmelden
                </IconWithText>
            )}

            {loggedIn && (
                <>
                    <Button onClick={openMenu}>
                        <IconWithText>
                            <Face />
                            Dein Name
                        </IconWithText>
                    </Button>

                    <Menu open={!!anchorEl}
                        anchorEl={anchorEl}
                        onClose={closeMenu}>
                        <MenuItem onClick={closeMenu}>Profil</MenuItem>
                        <MenuItem onClick={closeMenu}>Account</MenuItem>
                        <MenuItem onClick={closeMenu}>Logout</MenuItem>
                    </Menu>
                </>
            )}
        </>
    );
}