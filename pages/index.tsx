import * as React from 'react';
import type {NextPage} from 'next';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Table from "../src/components/Table";

const Home: NextPage = () => {
  return (
      <Container maxWidth='lg'>
        <Box
            sx={{
              my: 5,
              display: 'flex',
              flexDirection: 'column',
              justifyContent: 'center',
              alignItems: 'center',
            }}
        >
            <Typography variant={'h3'}>
                Ent Data Table 🌲
            </Typography>
            <Table />
        </Box>
      </Container>
  );
};

export default Home;
