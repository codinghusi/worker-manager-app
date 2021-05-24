import { Loader } from 'semantic-ui-react';
import { findByType } from './../helper/subcomponents';
import { useState, useEffect } from 'react';

const Description = () => null;
const Success = () => null;
const Error = () => null;

export default function Loading({ request, field, children }) {
    const description = findByType(children, Description)?.props.children;
    const success = findByType(children, Success)?.props.children;
    const error = findByType(children, Error)?.props.children;

    const [ data, setData ] = useState(request.data);

    useEffect(() => {
        if (request.data) {
            if (field) {
                setData(request.data[field]);
                return;
            }
            setData(request.data);
            return;
        }
        setData(null);
    }, [request.data]);

    return (
        <>
            {(request.loading || !request.data) && (
                <Loader> {description} </Loader>
            )}

            {!request.loading && !request.error && data && (
                success(data)
            )}

            {!request.loading && request.error &&  (
                error(request.error)
            )}
        </>
    )
}

Loading.Description = Description;
Loading.Success = Success;
Loading.Error = Error;