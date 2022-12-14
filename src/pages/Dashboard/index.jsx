import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import * as React from 'react';
import { Chart, Deposits, Orders } from '..';
import { PageTitle } from '../../Components';

export default function DashboardContent() {
  return (
    <>
      <PageTitle title='Dashboard' />
      {/* Chart */}
      <Grid item xs={12} md={8} lg={9}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
            marginBottom: '10px',
            marginRight: '10px',
          }}
        >
          <Chart />
        </Paper>
      </Grid>
      {/* Recent Deposits */}
      <Grid item xs={12} md={4} lg={3}>
        <Paper
          sx={{
            p: 2,
            display: 'flex',
            flexDirection: 'column',
            height: 240,
          }}
        >
          <Deposits />
        </Paper>
      </Grid>
      {/* Recent Orders */}
      <Grid item xs={12}>
        <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
          <Orders />
        </Paper>
      </Grid>
    </>
  );
}
