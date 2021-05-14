import { AppBar, Toolbar, Typography, makeStyles } from '@material-ui/core';
import User from './user';
import Sidebar from './sidebar';

const currentPage = {
    name: "Dashboard"
};

const useStyles = makeStyles({
    title: {
        flexGrow: 1
    }
});

export default function Layout({ children }) {
    const classes = useStyles();

    return (
        <>
            <AppBar position="fixed">
                <Toolbar>
                    <Typography className={classes.title} mx="auto">
                        { currentPage.name }
                    </Typography>
                    <User />
                </Toolbar>
            </AppBar>

            <Sidebar />

            {children}
        </>
    );
}