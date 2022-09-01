import Grid from '@mui/material/Grid';
import * as React from 'react';
import {Button} from "@mui/material";
import Sort from "./Sort";

type HeaderProps = {};

// .sb-grid-header {
// @apply flex justify-between h-10 px-2 bg-scale-100 dark:bg-scale-300;
// }
//
// .sb-grid-header__inner {
// @apply flex items-center space-x-2;
// }
//

const Header: React.FC<HeaderProps> = () => {
    return (
        <Grid container style={{
            width: '100vw',
            height: '100%'
        }}
        >
            <Grid justifyContent="flexStart" px={2} py={1}>
                <RefreshButton/>
                <Sort />
            </Grid>
        </Grid>
    )
}

export default Header

const RefreshButton: React.FC = () => {
    return (
        <Button>Refresh</Button>
    )
}
