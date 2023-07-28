import React, { useState } from 'react';
import { useTheme } from "@mui/material";
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import FaqInstallAPK from "./faq-installAPK";
import "./style.css"
import {tokens} from "../../theme";

function FAQ() {
    const [expanded, setExpanded] = useState(false);
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const handleChange = (panel) => (event, isExpanded) => {
        setExpanded(isExpanded ? panel : false);
    };

    return (
        <div className="Faq">
            <div>
                <div className="TituloFaq">
                    <Typography
                        variant="h2"
                        color={
                            theme.palette.mode === "dark"
                                ? colors.greenAccent[500]
                                : "black"
                        }
                    >
                        Dúvidas Frequêntes
                    </Typography>
                </div>

                <Accordion className="Accordion" expanded={expanded === 'panel1'} onChange={handleChange('panel1')} style={{
                    backgroundColor:
                    theme.palette.mode === "dark"
                        ? colors.greenAccent[500]
                        : "white"
                }}>
                    <AccordionSummary
                        expandIcon={<ExpandMoreIcon />}
                        aria-controls="panel1bh-content"
                        id="panel1bh-header"
                    >
                        <Typography sx={{ width: '33%', flexShrink: 0 }}>
                            <strong>Instalação APK do Jogo no Oculus</strong>
                        </Typography>
                    </AccordionSummary>
                    <AccordionDetails>
                        <Typography>
                            <FaqInstallAPK/>
                        </Typography>
                    </AccordionDetails>
                </Accordion>

            </div>
        </div>
    );
}

export default FAQ;