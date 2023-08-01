import React from "react"
import {Box, Container, useTheme} from "@mui/material";
import {styled} from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import {Link} from "react-router-dom";
import oculusMetaQuest2 from "../../assets/img/oculus-meta.png"
import {oculusDisp} from "../../data/OculusDisp";
import WifiIcon from '@mui/icons-material/Wifi';
import WifiOffIcon from '@mui/icons-material/WifiOff';
import BatteryFullIcon from '@mui/icons-material/BatteryFull';
import Battery6BarIcon from '@mui/icons-material/Battery6Bar';
import Battery4BarIcon from '@mui/icons-material/Battery4Bar';
import Battery2BarIcon from '@mui/icons-material/Battery2Bar';
import Battery0BarIcon from '@mui/icons-material/Battery0Bar';
import {tokens} from "../../theme";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#f6f6f6',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
}));

function Oculus() {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const data = oculusDisp;

    return (
        <div className="oculus">
            <Link href="#" style={{textDecoration: 'none'}}>
                <Container fixed>
                    <Box sx={{ flexGrow: 1 }}>
                        <Grid container spacing={2} columns={16}>
                            {data.map((oculus) => (
                                <Grid item xs={8}>
                                    <Item>
                                        <div style={{
                                            display: 'flex',
                                            justifyContent: 'center',
                                            flexDirection: 'column'
                                        }}>
                                            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                                                <img src={oculusMetaQuest2} alt="Oculus Meta Quest 2" style={{ width: "50%", height: "50%" }} />
                                            </div>
                                            <div style={{ display: 'flex', justifyContent: 'space-around', alignItems: 'center' }}>
                                                <div style={{ marginRight: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    <div style={{
                                                        color: theme.palette.mode === 'dark' ? colors.greenAccent[500] : 'black'
                                                    }}>
                                                        Status:
                                                    </div>
                                                    <div style={{
                                                        margin: '3px'
                                                    }}>
                                                        {oculus.status === 'online' ? <WifiIcon style={{
                                                            color: 'green',

                                                        }}/> : <WifiOffIcon style={{
                                                            color: 'red'
                                                        }}/> }
                                                    </div>
                                                </div>
                                                <div style={{ marginRight: '5px', display: 'flex', justifyContent: 'center', alignItems: 'center'}}>
                                                    <div style={{
                                                        color: theme.palette.mode === 'dark' ? colors.greenAccent[500] : 'black'
                                                    }}>
                                                        Bateria:
                                                    </div>
                                                    <div style={{ margin: '3px' }}>
                                                        {(() => {
                                                            if (oculus.battery >= 100) {
                                                                return <BatteryFullIcon />;
                                                            } else if (oculus.battery >= 60) {
                                                                return <Battery6BarIcon />;
                                                            } else if (oculus.battery >= 30) {
                                                                return <Battery4BarIcon />;
                                                            } else if (oculus.battery >= 5) {
                                                                return <Battery2BarIcon />;
                                                            } else {
                                                                return <Battery0BarIcon />;
                                                            }
                                                        })()}
                                                    </div>
                                                </div>

                                            </div>
                                        </div>
                                    </Item>
                                </Grid>
                            ))}
                        </Grid>
                    </Box>
                </Container>
            </Link>
        </div>
    )
}

export default Oculus;