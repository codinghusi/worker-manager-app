import Box from '@material-ui/core/Box';

export default function Inline({ children }) {
    return (
        <Box component="div" display="inline">
            {children}
        </Box>
    );
}