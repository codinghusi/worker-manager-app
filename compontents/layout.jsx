import Appbar from './layout/appbar';
import Head from 'next/head';
import { Grid } from 'react-bootstrap';
import Center from './../helper/center';

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

            <Center>
                {children}
            </Center>

        </>
    );
}