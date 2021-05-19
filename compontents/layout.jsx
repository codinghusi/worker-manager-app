import Appbar from './layout/appbar';
import Head from 'next/head';

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

            {children}
        </>
    );
}