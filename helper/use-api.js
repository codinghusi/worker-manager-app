import { useRequest } from 'ahooks';

const uri = "https://empty-moon.grpc.eu-west-1.aws.cloud.dgraph.io/graphql";

function fetchApi(query) {
    return async (variables = {}) => {
        const response = await fetch(uri, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
            body: JSON.stringify({
                query,
                variables,
            })
        });
    
        const json = await response.json();
        return json.data;
    }
}

function useMyRequest(...args) {
    return useRequest(...args);
}



export function useApi(query) {
    return useMyRequest(fetchApi(query));
}

export function useWorker() {
    return useMyRequest(async (id) => {
        const run = fetchApi(`query GetWorker(id: ID) {
            getWorker(id: $id) {
                id, name, segment, tlSection, workArea
            }
        }`);

        const data = await run({ id: `0x${id}` });

        return data.getWorker;
    })
}