import Head from 'next/head';
import { useRequest } from 'ahooks'; 
import { Header, Dropdown, Divider, Button, Icon } from 'semantic-ui-react'
import { useState } from 'react';
import { useMapRequest } from '../helper/fetching';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

async function queryWorkers(query) {
    await sleep(500);
    return [ "Gerrit Weiermann", "Markus Weiermann", "Ewald Weiermann", "Nils Stegemann" ];
}

export default function WorkersPage() {
    const { loading, run, data } = useMapRequest(useRequest(queryWorkers), item => ({ key: item, text: item, value: item }));

    const [ value, setValue ] = useState([]);
    const [ searchQuery, setSearchQuery ] = useState([]);

    const handleChange = (e, { value }) => {
        // setValue(value);
    }

    const handleSearchChange = (e, { searchQuery }) => {
        setSearchQuery(searchQuery);
        run(searchQuery);
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
                search={true}
                options={data}
                value={value}
                placeholder="Mitarbeiter suchen"
                onChange={handleChange}
                onSearchChange={handleSearchChange}
                loading={loading}
                noResultsMessage="Keine Mitarbeiter gefunden" />

            <Divider horizontal> oder </Divider>

            <Button href="/worker/new" secondary>
                <Icon name="plus square" />
                Mitarbeiter hinzufügen
            </Button>
        </>
    )
}