import { Box, makeStyles } from '@material-ui/core';

export default function IconWithText({ children }) {
    return (
        <Box display="flex"
            flexDirection="row"
            flexWrap="nowrap"
            alignItems="center">
            {children}
        </Box>
    );
}