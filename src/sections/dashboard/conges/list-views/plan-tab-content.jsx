import React from 'react';

import {
  Box,
  Tab,
  Tabs,
  Paper,
  useTheme,
  Typography,
} from '@mui/material';

import { useTabs } from 'src/hooks/use-tabs';

import PlanWeek from '../plan-week';
import PlanMonth from '../plan-month';

const employees = [
  {
    id: 1,
    name: 'Ddccv Ffffddd',
    avatarColor: '#FDC21C',
    workedDays: 17,
    startDate: '2025-06-03',
    endDate: '2025-06-07',
    societe: 'Societe A',
  },
  {
    id: 2,
    name: 'Azaz Aaa',
    avatarColor: '#00BFFF',
    workedDays: 21,
    societe: 'Societe A',
  },
  {
    id: 3,
    name: 'Ffdd Cf',
    avatarColor: '#FDC21C',
    workedDays: 21,
    startDate: '2025-06-05',
    endDate: '2025-06-07',
    societe: 'Societe B',
  },
];


const TABS = [
  { value: 'month', label: 'Mois' },
  { value: 'week', label: 'Semaine' },
];

export default function PlanTabContent() {
  const tabs = useTabs('month');
  const theme = useTheme();
  const monthName = 'Juin';
  const year = 2025;

  return (
    <Paper >
      <Box display="flex" justifyContent="space-between" alignItems="center" mb={3}>
        <Typography variant="h5">
          Planning — {monthName} {year}
        </Typography>
        <Tabs
          value={tabs.value}
          onChange={tabs.onChange}
          sx={{
            px: 2.5,
            borderBottom: `1px solid ${theme.palette.divider}`,
          }}
        >
          {TABS.map((tab) => (
            <Tab key={tab.value} value={tab.value} label={tab.label} />
          ))}
        </Tabs>
      </Box>

      {tabs.value === 'month' ? (
        <PlanMonth employees={employees} />
      ) : (
        <PlanWeek employees={employees} />
      )}
    </Paper>
  );
}
