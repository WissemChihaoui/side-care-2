import { Card, CardContent, CardHeader, Typography } from '@mui/material';
import React from 'react';
import { ChartDonut } from '../chart-donut';

export default function MoyenAge() {
  return (
    <Card>
      <CardHeader title="Moyenne d'âge" />
      <CardContent>
        <ChartDonut
          chart={{
            categories: ['-29 ans', '30 - 40 ', '+41'],
            series: [44, 55, 13],
          }}
        />
      </CardContent>
    </Card>
  );
}
