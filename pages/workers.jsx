import Head from 'next/head';
import Link from 'next/link';
import { Header, Dropdown, Divider, Button, Icon } from 'semantic-ui-react'
import { useState } from 'react';
import { useMapRequest } from '../helper/fetching';
import { useAllWorkersQuery } from './../api/generated/graphql';
import { useRouter } from 'next/router';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function queryWorkers(query) {
    return useMapRequest(useAllWorkersQuery(), "queryWorker", ({id, name}) => ({ key: id, text: name, value: id }));
}

export default function WorkersPage() {
    const router = useRouter();
    let { loading, data } = queryWorkers();

    const [ value, setValue ] = useState(null);
    const [ searchQuery, setSearchQuery ] = useState([]);

    // useEffect(() => {
    //     const request = queryWorkers();
    //     loading = request.loading;
    //     data = request.data;
    // }, [searchQuery])

    const handleChange = (e, { value }) => {
        router.push(`/worker/view/${value}`);
    }

    const handleSearchChange = (e, { searchQuery }) => {
        setSearchQuery(searchQuery);
    }

    return (
        <>
            <Head>
                <title>Mitarbeiter</title>
            </Head>
        
            <Header as="h1">Mitarbeiter</Header>


            <Dropdown
                fluid
                selection
                search
                selectOnBlur={false}
                options={data}
                value={value}
                placeholder="Mitarbeiter suchen"
                onChange={handleChange}
                onSearchChange={handleSearchChange}
                loading={loading}
                noResultsMessage="Keine Mitarbeiter gefunden"
                multiple={false} />

            <Divider horizontal> oder </Divider>


            <Link href="/worker/new" passRef>
                <Button secondary>
                    <Icon name="plus square" />
                    Mitarbeiter hinzufügen
                </Button>
            </Link>
        </>
    )
}