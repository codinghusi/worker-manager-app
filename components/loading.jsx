import { Loader } from 'semantic-ui-react';
import { findByType, findAllByType } from './../helper/subcomponents';
import { useWrap, useWraps } from '../helper/hooks';

const Description = () => null;
const Success = () => null;
const Error = () => null;

function toFunction(data) {
    if (!data) {
        return;
    }
    if (typeof(data) !== 'function') {
        return () => data;
    }
    return data;
}

export default function Loading({ request, field, children }) {
    const description = findByType(children, Description)?.props.children;
    const success = findByType(children, Success)?.props.children;
    const errors = findAllByType(children, Error);
    const errorMap = Object.fromEntries(errors.map(error => ([error.props.type ?? 'default', error.props.children])));

    const data = useWrap(request.data, data => {
        if (data) {
            if (field) {
                return data[field];
            }
            return data;
        }
        return null;
    });

    const error = useWraps([request.error, data], async ([error, data]) => {
        return Promise.resolve().then(() => {
            if (error) {
                return errorMap.default;
            }
            if (!data) {
                return errorMap['not-found'] ?? errorMap.default;
            }
            return null;
        });
    });

    return (
        <>
            {request.loading && (
                <Loader active> {description} </Loader>
            )}

            {!request.loading && !error && data && (
                success(data)
            )}

            {!request.loading && error && (
                typeof(error) === 'function' ? error(request.error) : error
            )}
        </>
    )
}

Loading.Description = Description;
Loading.Success = Success;
Loading.Error = Error;