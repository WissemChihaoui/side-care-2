import React from 'react';
import { Box, Tooltip, Typography } from '@mui/material';
import { useTheme } from '@emotion/react';
import { fDate } from 'src/utils/format-time';

export default function PlanWeek({ employees }) {
  const theme = useTheme();
  const rowHeight = 40;

  const startOfWeek = new Date(2025, 6, 9); // May 26
  const visibleDays = Array.from({ length: 7 }, (_, i) => new Date(startOfWeek.getFullYear(), startOfWeek.getMonth(), startOfWeek.getDate() + i));

  return (
    <Box sx={{ overflowX: 'scroll' }}>
      {/* Days Header */}
      <Box display="flex">
        {visibleDays.map((day) => (
          <Box
            key={day.toISOString()}
            width={80}
            textAlign="center"
            borderLeft={`1px solid ${theme.palette.divider}`}
            py={1}
          >
            <Typography variant="caption">
              {day.getDate()} {day.toLocaleDateString('fr-FR', { weekday: 'short' })}
            </Typography>
          </Box>
        ))}
      </Box>

      {/* Employees rows */}
      {employees?.map((emp) => (
        <Box display="flex" key={emp.id}>
          {visibleDays.map((day) => {
            const isHighlighted =
              emp.startDate &&
              emp.endDate &&
              day >= new Date(emp.startDate) &&
              day <= new Date(emp.endDate);

            return (
              <Tooltip key={day.toISOString()} title={isHighlighted ? fDate(day) : ''}>
                <Box
                  width={80}
                  height={rowHeight}
                  borderLeft={`1px solid ${theme.palette.divider}`}
                  borderBottom={`1px solid ${theme.palette.divider}`}
                  bgcolor={isHighlighted ? 'primary.main' : 'transparent'}
                  sx={{ opacity: isHighlighted ? 0.8 : 1 }}
                />
              </Tooltip>
            );
          })}
        </Box>
      ))}
    </Box>
  );
}
