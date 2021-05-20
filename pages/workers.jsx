import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { BiPlus } from 'react-icons/bi';
import AsyncTypeaheadLang from '../helper/async-typeahead-lang';
import { useRequest, useToggle } from 'ahooks'; 
import Divider from '../helper/divider';
import IconWithText from '../helper/icon-with-text';
import EditWorker from '../compontents/worker/edit-worker';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function viewWorker(event) {
    console.log(event);
}

async function queryWorkers(query) {
    console.log("asdf");
    await sleep(500);
    return [ "Gerrit Weiermann", "Markus Weiermann", "Ewald Weiermann", "Nils Stegemann" ];
}

export default function WorkersPage() {
    const { loading, run, data } = useRequest(queryWorkers);
    const [ workerModalOpened, { setRight: openWorkerModal, setLeft: closeWorkerModal }] = useToggle(false, true);

    return (
        <>
            <Head>
                <title>Mitarbeiter</title>
            </Head>
        
            <h1>Mitarbeiter</h1>

            {/* <Form onSubmit={searchWorkers} inline>
                <FormControl type="text" placeholer="Suchen..." controlId="search" className="mr-sm-2" />
                <Button variant="primary" href="/search/workers?q"> Suchen </Button>
            </Form> */}

            <AsyncTypeaheadLang
                translate={{typeToSearch: "Warte auf Eingabe", searching: "Suchen...", noMatchesFound: "Keine Mitarbeiter gefunden."}}
                onChange={viewWorker}
                onSearch={run}
                isLoading={loading}
                options={data}
                minLength={1} />

            <Divider> oder </Divider>

            <Button variant="secondary" onClick={openWorkerModal}>
                <IconWithText>
                    Mitarbeiter hinzufügen
                    <BiPlus />
                </IconWithText>
            </Button>

            <Modal show={workerModalOpened} onHide={closeWorkerModal}>
                <Modal.Header closeButton>
                    <Modal.Title>Mitarbeiter hinzufügen</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditWorker />
                </Modal.Body>
            </Modal>
        </>
    )
}