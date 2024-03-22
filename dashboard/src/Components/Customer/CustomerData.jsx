
import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AddCustomer from './AddCustomer';


const columns = [
  { id: 'firstName', label: 'First Name', minWidth: 170 },
  { id: 'lastName', label: 'Last Name', minWidth: 170 },
  {
    id: 'email',
    label: 'Email',
    minWidth: 170,
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'accountStatus',
    label: 'Account Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'subscriptionStatus',
    label: 'Subscription Status',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toLocaleString('en-US'),
  },
  {
    id: 'domain',
    label: 'Domain',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'createdAt',
    label: 'Created At',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'updatedAt',
    label: 'Updated At',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
  {
    id: 'action',
    label: 'Action',
    minWidth: 170,
    align: 'right',
    format: (value) => value.toFixed(2),
  },
];

console.log(columns);


function createData(name, code, population, size) {
  const density = population / size;
  return { name, code, population, size, density };
}


const rows = [
  // Row 1
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    accountStatus: 'Active',
    subscriptionStatus: 'Subscribed',
    domain: 'example.com',
    createdAt: '2022-01-01',
    updatedAt: '2022-03-15',
    action: 'Edit',
  },
  // Row 2
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    accountStatus: 'Inactive',
    subscriptionStatus: 'Expired',
    domain: 'example.org',
    createdAt: '2021-12-10',
    updatedAt: '2022-02-28',
    action: 'Delete',
  },
  // Row 3
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    accountStatus: 'Active',
    subscriptionStatus: 'Subscribed',
    domain: 'example.net',
    createdAt: '2022-02-20',
    updatedAt: '2022-03-20',
    action: 'View',
  },
  {
    firstName: 'John',
    lastName: 'Doe',
    email: 'john.doe@example.com',
    accountStatus: 'Active',
    subscriptionStatus: 'Subscribed',
    domain: 'example.com',
    createdAt: '2022-01-01',
    updatedAt: '2022-03-15',
    action: 'Edit',
  },
  {
    firstName: 'Jane',
    lastName: 'Smith',
    email: 'jane.smith@example.com',
    accountStatus: 'Inactive',
    subscriptionStatus: 'Expired',
    domain: 'example.org',
    createdAt: '2021-12-10',
    updatedAt: '2022-02-28',
    action: 'Delete',
  },
  {
    firstName: 'Alice',
    lastName: 'Johnson',
    email: 'alice.johnson@example.com',
    accountStatus: 'Active',
    subscriptionStatus: 'Subscribed',
    domain: 'example.net',
    createdAt: '2022-02-20',
    updatedAt: '2022-03-20',
    action: 'View',
  },
  // Additional rows...
  {
    firstName: 'Michael',
    lastName: 'Brown',
    email: 'michael.brown@example.com',
    accountStatus: 'Active',
    subscriptionStatus: 'Subscribed',
    domain: 'example.org',
    createdAt: '2022-01-05',
    updatedAt: '2022-03-18',
    action: 'Edit',
  },
  {
    firstName: 'Emily',
    lastName: 'Davis',
    email: 'emily.davis@example.com',
    accountStatus: 'Inactive',
    subscriptionStatus: 'Expired',
    domain: 'example.net',
    createdAt: '2022-02-10',
    updatedAt: '2022-03-25',
    action: 'Delete',
  },
  {
    firstName: 'Daniel',
    lastName: 'Wilson',
    email: 'daniel.wilson@example.com',
    accountStatus: 'Active',
    subscriptionStatus: 'Subscribed',
    domain: 'example.com',
    createdAt: '2021-12-20',
    updatedAt: '2022-03-22',
    action: 'View',
  },
  {
    firstName: 'Olivia',
    lastName: 'Martinez',
    email: 'olivia.martinez@example.com',
    accountStatus: 'Active',
    subscriptionStatus: 'Subscribed',
    domain: 'example.org',
    createdAt: '2021-11-15',
    updatedAt: '2022-03-18',
    action: 'Edit',
  },
  {
    firstName: 'James',
    lastName: 'Taylor',
    email: 'james.taylor@example.com',
    accountStatus: 'Inactive',
    subscriptionStatus: 'Expired',
    domain: 'example.net',
    createdAt: '2022-02-05',
    updatedAt: '2022-03-20',
    action: 'Delete',
  },
  {
    firstName: 'Sophia',
    lastName: 'Anderson',
    email: 'sophia.anderson@example.com',
    accountStatus: 'Active',
    subscriptionStatus: 'Subscribed',
    domain: 'example.com',
    createdAt: '2021-12-25',
    updatedAt: '2022-03-25',
    action: 'View',
  },
  {
    firstName: 'Alexander',
    lastName: 'Thomas',
    email: 'alexander.thomas@example.com',
    accountStatus: 'Active',
    subscriptionStatus: 'Subscribed',
    domain: 'example.net',
    createdAt: '2022-01-10',
    updatedAt: '2022-03-18',
    action: 'Edit',
  }
];

export default function CustomerData() {
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  return (
    <>

      {/* <div className="container table-margin"> */}

        <div className="row">
          <div className='col text-end '>

            <Button
              variant="contained"
              sx={{
                marginRight: '10px',
                textTransform: "none"
              }} // Adjust the value as needed
            > + Add customer </Button>
          </div>
        </div>
        <div className="row mt-4 mb-4 d-flex align-center-center judtify-center-end">
          <div className="top col d-flex justify-content-between">

            <h3>Customers</h3>

            <div>
              <TextField
                id="outlined-size-small"
                placeholder="Search customer"

                size="small"
                sx={{
                  width: '200px',
                  marginRight: "10px"
                }} // Adjust the width as needed

              />
            </div>
          </div>

        </div>

        <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: 1, }}>
          <TableContainer sx={{ maxHeight: 500 }}>
            <Table stickyHeader aria-label="sticky table">
              <TableHead>
                <TableRow>
                  {columns.map((column) => (
                    <TableCell
                      key={column.id}
                      align={column.align}
                      style={{ minWidth: column.minWidth }}
                    >
                      {column.label}
                    </TableCell>
                  ))}
                </TableRow>
              </TableHead>
              <TableBody>
                {rows
                  .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                  .map((row) => {
                    return (
                      <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                        {columns.map((column) => {
                          const value = row[column.id];
                          return (
                            <TableCell key={column.id} align={column.align}>
                              {column.format && typeof value === 'number'
                                ? column.format(value)
                                : value}
                            </TableCell>
                          );
                        })}
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </TableContainer>
          <TablePagination
            rowsPerPageOptions={[10, 25, 100]}
            component="div"
            count={rows.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onPageChange={handleChangePage}
            onRowsPerPageChange={handleChangeRowsPerPage}
          />
        </Paper>
      {/* </div > */}
    </>
  );
}