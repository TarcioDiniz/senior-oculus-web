import React from 'react'
import {useParams} from "react-router-dom";
import {Box, useTheme} from "@mui/material";
import Grid from "@mui/material/Grid";
import {apiData} from "../../../data/MapNewAPI";
import { styled } from '@mui/material/styles';
import Paper from "@mui/material/Paper";
import {tokens} from "../../../theme";
import Typography from "@mui/material/Typography";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f6f6f6',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));

function SessionPacients() {
    const id = useParams();
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const object = apiData.find((item) => item.device_id === id.id);

    return (
        <div style={{display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Box sx={{ width: '60%' }}>
                <div className="TituloPacientes">
                    <Typography variant="h2" color={theme.palette.mode === 'dark' ? colors.greenAccent[500] : 'black'}>
                        {object.patient}
                    </Typography>
                </div>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={12}>
                        <Item>
                            <h3>Profissional: {object.professional}</h3>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <h3>Sobre a Sessão</h3>
                            {object.oculus.map((info) => (
                                <ul style={{listStyle: 'none'}}>
                                    <li>
                                        Level: {info.gamification.level}
                                    </li>
                                    <li>
                                        Scores: {info.gamification.scores}
                                    </li>
                                    <li>
                                        Erros: {info.gamification.errors}
                                    </li>
                                    <li>
                                        Acertos: {info.gamification.corrects}
                                    </li>
                                    <li>
                                        Duração: {info.gamification.session_duration}
                                    </li>
                                </ul>
                            ))}
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <h3>Interações</h3>
                            {object.oculus.map((info) => {
                                    return info.interactions.map((interaction) => (
                                        <ul style={{listStyle: 'none'}}>
                                            <li>
                                                Mão Utilizada: {interaction.hand_used === 'left' ? 'Esquerda' : 'Direita'}
                                            </li>
                                            <li>
                                                Timestamp: {interaction.timestamp}
                                            </li>
                                            <li>
                                                Duração: {interaction.duration}
                                            </li>
                                        </ul>
                                    ));
                                }
                            )}
                        </Item>
                    </Grid>
                </Grid>
            </Box>
        </div>
    );
}

export default SessionPacients;