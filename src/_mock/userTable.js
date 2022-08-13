const headCells = [
  {
    id: 'name',
    numeric: false,
    disablePadding: true,
    label: 'Name',
  },
  {
    id: 'company',
    numeric: false,
    disablePadding: false,
    label: 'Company',
  },
  {
    id: 'role',
    numeric: false,
    disablePadding: false,
    label: 'Role',
  },
  {
    id: 'isVerified',
    numeric: false,
    disablePadding: false,
    label: 'IsVerified',
  },
  {
    id: 'status',
    numeric: false,
    disablePadding: false,
    label: 'Status',
  },
];

const rows = [
  {
    name: 'Andy Renner',
    company: 'Swaniawski and Sons',
    role: '	Backend Developer',
    isVerified: true,
    status: 'Active',
  },
  {
    name: 'Benny Ferry',
    company: 'Stroman - Larson',
    role: 'Front End Developer',
    isVerified: true,
    status: 'Active',
  },
  {
    name: 'Caroline Turcotte',
    company: 'Mosciski - Crooks',
    role: '	UI Designer',
    isVerified: true,
    status: 'Active',
  },
  {
    name: 'Cary Fadel',
    company: 'Stroman - Larson',
    role: 'Leader',
    isVerified: true,
    status: 'Banned',
  },
  {
    name: 'Andy Renner',
    company: 'Swaniawski and Sons',
    role: '	Backend Developer',
    isVerified: true,
    status: 'Active',
  },
  {
    name: 'Benny Ferry',
    company: 'Stroman - Larson',
    role: 'Front End Developer',
    isVerified: true,
    status: 'Active',
  },
  {
    name: 'Caroline Turcotte',
    company: 'Mosciski - Crooks',
    role: '	UI Designer',
    isVerified: true,
    status: 'Active',
  },
  {
    name: 'Cary Fadel',
    company: 'Stroman - Larson',
    role: 'Leader',
    isVerified: true,
    status: 'Banned',
  },
];
export default { rows, headCells };
export { rows, headCells };
