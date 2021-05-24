import Appbar from './layout/appbar';
import Head from 'next/head';
import { Grid, Container } from 'semantic-ui-react';

const currentPage = {
    name: "Dashboard"
};

export default function Layout({ children }) {
    return (
        <>
            <Head>
                <title>{ currentPage.name } - Employee Management</title>
            </Head>
            
            <Appbar />

            <Grid centered>
                <div>
                    {children}
                </div>
            </Grid>

        </>
    );
}