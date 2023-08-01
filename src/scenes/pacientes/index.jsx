import React from 'react';
import './style.css';
import { tokens } from '../../theme';
import Typography from '@mui/material/Typography';
import { apiData } from '../../data/MapNewAPI';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import {Container, useTheme} from '@mui/material';
import AddTaskIcon from '@mui/icons-material/AddTask';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import SearchIcon from '@mui/icons-material/Search';
import {Link} from "react-router-dom";

function Pacientes() {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const data = apiData;

    return (
        <div className="Pacientes">
            <div>
                <div className="TituloPacientes">
                    <Typography variant="h2" color={theme.palette.mode === 'dark' ? colors.greenAccent[500] : 'black'}>
                        Pacientes
                    </Typography>
                </div>
                <Container fixed>
                    <TableContainer component={Paper}>
                        <Table sx={{ minWidth: 650 }} aria-label="simple table">
                            <TableHead>
                                <TableRow>
                                    <TableCell><strong>Id</strong></TableCell>
                                    <TableCell><strong>Paciente</strong></TableCell>
                                    <TableCell><strong>Status</strong></TableCell>
                                    <TableCell><strong>Ações</strong></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((row) => (
                                    <TableRow key={row.patient} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                                        <TableCell>
                                            {row.device_id}
                                        </TableCell>
                                        <TableCell component="th" scope="row">
                                            {row.patient}
                                        </TableCell>
                                        <TableCell>
                                            {row.oculus[0].gamification.session_completed === true ? <AddTaskIcon sx={{color: 'green'}}/> : <HighlightOffIcon sx={{color: 'red'}}/>}
                                        </TableCell>
                                        <TableCell>
                                            <Link style={{textDecoration: "none"}} to={`/Pacientes/Sessoes/${row.device_id}`}>
                                                <SearchIcon />
                                            </Link>
                                        </TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Container>
            </div>
        </div>
    );
}

export default Pacientes;