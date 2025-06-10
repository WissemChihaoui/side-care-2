import React from 'react';
import { useTheme } from '@emotion/react';

import {
  Table,
  Stack,
  Avatar,
  Tooltip,
  TableRow,
  TableBody,
  TableCell,
  TableHead,
  Typography,
  TableContainer,
} from '@mui/material';

import { fDate } from 'src/utils/format-time';

const dayNamesShort = ['Dim', 'Lun', 'Mar', 'Mer', 'Jeu', 'Ven', 'Sam'];

export default function PlanMonth({ employees }) {
  const theme = useTheme();
  const month = 5; // June (0-based)
  const year = 2025;

  const rowHeight = 40;
  const cellMinWidth = 60;
  const nameColumnWidth = 250;

  const daysInMonth = new Date(year, month + 1, 0).getDate();

  const daysArray = Array.from({ length: daysInMonth }, (_, i) => {
    const date = new Date(year, month, i + 1);
    const dayOfWeek = date.getDay();
    return {
      dayNumber: i + 1,
      dayLabel: dayNamesShort[dayOfWeek],
      fullDate: date,
      isWeekend: dayOfWeek === 0 || dayOfWeek === 6,
    };
  });

  const groupedByCompany = employees.reduce((acc, emp) => {
  if (!acc[emp.societe]) acc[emp.societe] = [];
  acc[emp.societe].push(emp);
  return acc;
}, {});


  return (
    <TableContainer sx={{ overflowX: 'auto' }}>
      <Table>
        <TableHead>
  <TableRow>
    {/* Société column */}
    <TableCell
      sx={{
        position: 'sticky',
        left: 0,
        zIndex: 3,
        minWidth: 160,
        bgcolor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography fontWeight={600}>Société</Typography>
    </TableCell>

    {/* Employé column */}
    <TableCell
      sx={{
        position: 'sticky',
        left: 160,
        zIndex: 3,
        minWidth: nameColumnWidth,
        bgcolor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      <Typography fontWeight={600}>Employé</Typography>
    </TableCell>

    {/* Jour travaillé column */}
    <TableCell
      sx={{
        position: 'sticky',
        left: 160 + nameColumnWidth,
        zIndex: 2,
        bgcolor: theme.palette.background.paper,
        borderBottom: `1px solid ${theme.palette.divider}`,
      }}
    >
      Jour travaillé
    </TableCell>

    {/* Day headers */}
    {daysArray.map(({ dayNumber, dayLabel, isWeekend }) => (
      <TableCell
        key={`header-${dayNumber}`}
        align="center"
        sx={{
          minWidth: cellMinWidth,
          bgcolor: isWeekend ? theme.palette.grey[200] : theme.palette.background.default,
          borderLeft: `1px solid ${theme.palette.divider}`,
          borderBottom: `1px solid ${theme.palette.divider}`,
          py: 0.5,
        }}
      >
        <Typography variant="caption" fontWeight="bold">
          {dayLabel}
        </Typography>
        <br />
        <Typography variant="caption">{dayNumber}</Typography>
      </TableCell>
    ))}
  </TableRow>
</TableHead>

        <TableBody>
  {Object.entries(groupedByCompany).map(([company, companyEmployees]) => (
    <React.Fragment key={company}>
      {/* Group Header Row */}
      <TableRow>
        <TableCell
          colSpan={daysArray.length + 3}
          sx={{
            bgcolor: theme.palette.grey[100],
            borderBottom: `2px solid ${theme.palette.divider}`,
          }}
        >
          <Typography variant="subtitle2" fontWeight="bold">
            {company}
          </Typography>
        </TableCell>
      </TableRow>

      {/* Employees under the company */}
      {companyEmployees.map((emp) => (
        <TableRow key={emp.id}>
          {/* Empty cell for Société column */}
          <TableCell />

          {/* Employé */}
          <TableCell
            sx={{
              minWidth: nameColumnWidth,
              height: rowHeight,
              borderBottom: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Stack direction="row" spacing={1} alignItems="center">
              <Avatar sx={{ width: 28, height: 28, bgcolor: emp.avatarColor }}>
                {emp.name.split(' ')[0][0]}
              </Avatar>
              <Typography variant="body2">{emp.name}</Typography>
            </Stack>
          </TableCell>

          {/* Worked Days */}
          <TableCell
            sx={{
              borderBottom: `1px solid ${theme.palette.divider}`,
            }}
          >
            <Typography variant="body2">{emp.workedDays}</Typography>
          </TableCell>

          {/* Daily cells */}
          {daysArray.map(({ fullDate, dayNumber, isWeekend }) => {
            const isHighlighted =
              emp.startDate &&
              emp.endDate &&
              fullDate >= new Date(emp.startDate) &&
              fullDate <= new Date(emp.endDate);

            return (
              <Tooltip key={`cell-${emp.id}-${dayNumber}`} title={fDate(fullDate)}>
                <TableCell
                  align="center"
                  sx={{
                    minWidth: cellMinWidth,
                    height: rowHeight,
                    bgcolor: isHighlighted
                      ? 'primary.main'
                      : isWeekend
                      ? theme.palette.grey[100]
                      : 'transparent',
                    opacity: isHighlighted ? 0.8 : 1,
                    borderLeft: `1px solid ${theme.palette.divider}`,
                    borderBottom: `1px solid ${theme.palette.divider}`,
                  }}
                />
              </Tooltip>
            );
          })}
        </TableRow>
      ))}
    </React.Fragment>
  ))}
</TableBody>


      </Table>
    </TableContainer>
  );
}
