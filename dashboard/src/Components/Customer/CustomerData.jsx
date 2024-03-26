import React, { useEffect } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Chip from '@mui/material/Chip';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import axios from 'axios';
import Dialog1 from './Dialog1';
import { useNavigate } from 'react-router-dom';

const columns = [
  { id: 'first_name', label: 'First Name', minWidth: 170 },
  { id: 'last_name', label: 'Last Name', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'account_status', label: 'Account Status', minWidth: 170, align: 'center' },
  { id: 'subscription_status', label: 'Subscription Status', minWidth: 170, align: 'center' },
  { id: 'status', label: 'Status', minWidth: 170, align: 'center' },
  { id: 'total_domains', label: 'Domain', minWidth: 170, align: 'center' },
  { id: 'createdAt', label: 'Created At', minWidth: 170, align: 'center' },

  { id: 'updatedAt', label: 'Updated At', minWidth: 170, align: 'center' },
  { id: 'action', label: 'Action', minWidth: 170, align: 'center' },
];

export default function CustomerData() {
  const [loader, setloader] = React.useState(false)
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);
  const [customerData, setCustomerData] = React.useState([]);
  const [refershTable, setRefreshTable] = React.useState(false)
  const navigate = useNavigate()
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };
  const centerStyle = {
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    display: 'flex'

  };
  useEffect(() => {
    const token = localStorage.getItem("token");
    setloader(true)
    axios.post("http://146.190.164.174:4000/api/customer/get_customers", {}, {
      headers: {
        'x-sh-auth': token
      }
    })
      .then(response => {
        console.log(response.data);
        setCustomerData(response.data.customer);
        setloader(false)

      })
      .catch(error => {
        console.error('Error fetching customers:', error);
        setloader(false)

      });
  }, [refershTable]);

  return (
    <>
    {  loader &&

      <Box sx={{
        ...centerStyle
      }}>
        <CircularProgress />
      </Box>
    }
      <div className="row asdf">
        <div className='col text-end '>
          <Button
            variant="contained"
            onClick={() => navigate("/addcustomer")}
            sx={{
              marginRight: '10px',
              textTransform: "none"
            }}
          >
            + Add customer
          </Button>
        </div>
      </div>
      <div className="row mt-4 mb-4 d-flex align-center-center justify-center-end">
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
              }}
            />
          </div>
        </div>
      </div>

      {  !loader &&
      <Paper sx={{ width: '100%', overflow: 'hidden', marginTop: 1 }}>
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
              {customerData
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((customer, index) => (
                  <TableRow hover role="checkbox" tabIndex={-1} key={index}>
                    <TableCell align="left" style={{ minWidth: columns[0].minWidth }}>{customer.first_name}</TableCell>
                    <TableCell align="left" style={{ minWidth: columns[1].minWidth }}>{customer.last_name}</TableCell>
                    <TableCell align="left" style={{ minWidth: columns[2].minWidth }}>{customer.user.email}</TableCell>
                    <TableCell align="center" style={{ minWidth: columns[3].minWidth }}>
                      <Chip
                        label={customer.account_status}
                        sx={{
                          backgroundColor: "green"
                        }}
                      />
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: columns[4].minWidth }}>{customer.subscription_status}</TableCell>
                    <TableCell align="center" style={{ minWidth: columns[5].minWidth }}>
                      <Chip
                        label={customer.status ? 'active' : 'Non active'}
                        sx={{
                          backgroundColor: "green"
                        }}
                      />
                    </TableCell>
                    <TableCell align="center" style={{ minWidth: columns[6].minWidth }}>{customer.total_domains}</TableCell>
                    <TableCell align="center" style={{ minWidth: columns[7].minWidth }}>{customer.createdAt}</TableCell>
                    <TableCell align="center" style={{ minWidth: columns[8].minWidth }}>{customer.updatedAt}</TableCell>
                    <TableCell align="center" style={{ minWidth: columns[9].minWidth }}>
                      <Dialog1 customerId={customer.user._id}
                        setRefreshTable={setRefreshTable}
                        customerData={customer}
                      />
                    </TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
        <TablePagination
          rowsPerPageOptions={[10, 25, 100]}
          component="div"
          count={customerData.length}
          rowsPerPage={rowsPerPage}
          page={page}
          onPageChange={handleChangePage}
          onRowsPerPageChange={handleChangeRowsPerPage}
        />
      </Paper>

                      }
    </>
  );
}
