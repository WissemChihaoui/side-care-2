import React, { useState } from 'react'
import { useSetState } from 'src/hooks/use-set-state';

const TABLE_HEAD = [
  { id: 'employe', label: 'Employé' },
  { id: 'soldPaid', label: 'Solde de congés payés' },
  { id: 'soldRtt', label: 'Solde de RTT' },
];

export default function CompteurTabContent() {

  const [tableData, setTableData] = useState([]);

  const filters = useSetState({
    name: '',
    service: [],
    status: 'all',
    startDate: null,
    endDate: null,
  });

  return (
    <div>CompteurTabContent</div>
  )
}
