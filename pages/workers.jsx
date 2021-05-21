import Head from 'next/head';
import Button from 'react-bootstrap/Button';
import { BiPlus } from 'react-icons/bi';
import AsyncTypeaheadLang from '../helper/async-typeahead-lang';
import { useRequest } from 'ahooks'; 
import Divider from '../helper/divider';
import IconWithText from '../helper/icon-with-text';
import { useModal } from '../helper/hooks';
import ConfirmModal, { useConfirm } from './../components/modals/confirm';
import EditWorkerModal from '../components/worker/edit-worker-modal';
import { useCallback, useEffect } from 'react';

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function viewWorker(event) {
    console.log(event);
}

async function queryWorkers(query) {
    await sleep(500);
    return [ "Gerrit Weiermann", "Markus Weiermann", "Ewald Weiermann", "Nils Stegemann" ];
}

export default function WorkersPage() {
    const { loading, run, data } = useRequest(queryWorkers);
    const [ workerModalOpened, openWorkerModal, closeWorkerModal ] = useModal();
    const confirm = useConfirm();

    useEffect(() => {
        console.log("new status", confirm.status);
        if (confirm.status === 'confirmed') {
            closeWorkerModal();
        }
    }, [confirm.status]);

    const onSave = useCallback((data) => {
        closeWorkerModal();
        console.log("saving", data);
    });

    const onCancel = useCallback(async () => {
        confirm.open();
    });

    return (
        <>
            <Head>
                <title>Mitarbeiter</title>
            </Head>
        
            <h1>Mitarbeiter</h1>

            <AsyncTypeaheadLang
                id="worker-search"
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

            <EditWorkerModal onSave={onSave} onCancel={onCancel} show={workerModalOpened} />

            <ConfirmModal handler={confirm} title="Änderungen verwerfen?">
                Möchten Sie wirklich die letzten Änderungen verwerfen?
            </ConfirmModal>
        </>
    )
}