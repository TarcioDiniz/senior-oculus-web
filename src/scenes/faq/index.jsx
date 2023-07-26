import {Container, Box} from "@mui/material";
import "./style.css";

import homePageOculusDev from "../../assets/img/pageOculusDev/homePageOculusDev.jpg"
import pageResoursesOculusDev from "../../assets/img/pageOculusDev/pageResoursesOculusDev.png"
import pageCreateAndGroupsApps from "../../assets/img/pageOculusDev/pageCreateAndGroupsApps.png"
import pageDevDashboard from "../../assets/img/pageOculusDev/pageDeveloperDashboard.png"
import pageDevDashboardLogin from "../../assets/img/pageOculusDev/pageDevDashboardLogin.png"
import PlayStore from "../../assets/img/play.store.png"
import AppStore from "../../assets/app.store.svg"
import homePageApp from "../../assets/img/homePageAppOculus.png"
import homePageSideQuest from "../../assets/img/homePageSideQuest.png"

import {BadgesApp, BadgesAppItem, FlexRow} from "./style";



function FAQ() {

    return (
        <div className="Faq">
            <Container fixed>
                <Box>
                    <h1>Guia de instalação do APK do jogo no Oculus Quest</h1>
                    <hr/>
                </Box>
                <Box>
                    <div className="ContentFaq">
                        <h2>Ativando o Modo Desenvolvedor e Preparando o Ambiente</h2>
                        <p><strong>Etapa 1: Meta Website - Criando Uma Organização</strong></p>
                    </div>
                    <div className="ContentFaq">
                        <p>Acesse <a href="https://developer.oculus.com/">https://developer.oculus.com/</a></p>
                        <img src={homePageOculusDev} alt="Home Page Site Oculus Developer" style={{ width: "100%", height: "100%"}}/>
                    </div>
                    <div className="ContentFaq">
                        <p>Vá na guia <strong>Resources</strong></p>
                        <img src={pageResoursesOculusDev} alt="Page Resources Oculus Developer" style={{ width: "100%", height: "100%"}}/>
                    </div>
                    <div className="ContentFaq">
                        <p>Clique em: <strong>“Manage Account”</strong> e em seguida em <strong>"Create Account & Org"</strong></p>
                        <img src={pageCreateAndGroupsApps} alt="Page Create and App Page" style={{ width: "100%", height: "100%"}}/>
                    </div>
                    <div className="ContentFaq">
                        <p>Va em <strong>”Developer Dashboard.”</strong></p>
                        <img src={pageDevDashboard} alt="Page Developer Dashboard" style={{ width: "100%", height: "100%"}}/>
                    </div>
                    <div className="ContentFaq">
                        <p>Cadastre-se no site e aceite o contrato de desenvolvedor</p>
                        <p>- Verifique a sua conta adicionando um cartão de crédito ou um número de telefone válido </p>
                        <img src={pageDevDashboardLogin} alt="Page Developer Dashboard Login on" style={{ width: "100%", height: "100%"}}/>
                    </div>
                </Box>
                <Box>
                    <div className="ContentFaq">
                        <p><strong>Etapa 2: Baixe o aplicativo Oculus em seu Celular.</strong></p>
                    </div>
                    <BadgesApp>
                        <FlexRow>
                            <div>
                                <BadgesAppItem
                                    href="https://play.google.com/store/apps/details?id=com.oculus.twilight&hl=pt_BR&gl=US"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="Google Play">
                                    <img src={PlayStore} alt="Aplicativo Oculus para plataforma Android"/>
                                </BadgesAppItem>
                            </div>
                            <div>
                                <BadgesAppItem
                                    href="https://apps.apple.com/br/app/meta-quest/id1366478176"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    title="App Store">
                                    <img src={AppStore} alt="Aplicativo Meta Quest para plataforma IOS"/>
                                </BadgesAppItem>
                            </div>
                        </FlexRow>
                    </BadgesApp>
                    <div className="ContentFaq">
                        <p><strong>Ativando o Modo De Desenvolvedor e Reiniciando</strong></p>
                        <ol>
                            <li>
                                Abra o aplicativo <strong>"Oculus"</strong> em seu smartphone ou tablet
                            </li>
                            <li>
                                Clique na guia de opção <strong>"Menu"</strong>
                            </li>
                            <li>
                                Acesse a guia <strong>"Devices"</strong>
                            </li>
                            <li>
                                Em Devices, na seção <strong>"Headset Settings"</strong> clique na opção <strong>"Developer Mode"</strong>
                            </li>
                            <li>
                                Ative a opção <strong>"Developer Mode"</strong>
                            </li>
                            <li>
                                Reinicie o óculos para garantir que as configurações foram feitas
                            </li>
                        </ol>
                        <img src={homePageApp} alt="Home Page App Oculus" style={{ width: "60%", height: "60%", marginLeft: "20%" }}/>
                    </div>
                </Box>
                <Box>
                    <div className="ContentFaq">
                        <p><strong>Etapa 3: Instalando o APK</strong></p>
                    </div>
                    <div className="ContentFaq">
                        <p>Acesse o site <a href="https://sidequestvr.com/setup-howto">https://sidequestvr.com/setup-howto</a></p>
                        <p>Faça o download do SideQuest na aba <strong>"Advanced Installer"</strong></p>
                        <img src={homePageSideQuest} alt="Home Page Side Quest Vr" style={{ width: "100%", height: "100%"}}/>
                        <p>No instalador, escolha a pasta de destino do SideQuest e clique em <strong>"Instalar"</strong></p>
                        <p>Com o SideQuest instalado, abra-o</p>
                    </div>
                </Box>
                <Box>
                    <div className="ContentFaq">
                        <p><strong>Etapa 3.1:</strong></p>
                    </div>
                    <div className="ContentFaq">
                        <p>Conectando o Cabo USB e Permitindo a Depuração USB</p>
                        <p>Conecte o cabo USB no óculos e no seu computador</p>
                        <p>- Ao colocar o óculos, a mensagem de permissão aparecerá <strong>"Allow USB debugging?"</strong>, clique
                            em <strong>"Allow"</strong></p>
                        <p>- Outra mensagem também aparecerá <strong>"Allow access to data"</strong>, clique no botão <strong>"Allow"</strong></p>
                    </div>
                </Box>
            </Container>
        </div>
    );
}

export default FAQ;
