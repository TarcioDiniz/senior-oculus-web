import React, { useState, useEffect, useContext } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import AllInclusiveOutlinedIcon from "@mui/icons-material/AllInclusiveOutlined";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { ColorModeContext } from "../../theme";
import profileDataManager from "../../data/profileDataManager";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";

const Item = ({ title, to, icon, selected, setSelected, isCollapsed }) => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    return (
        <MenuItem
            active={selected === title}
            style={{
                color: theme.palette.mode === "dark" ? colors.grey[100] : "white",
            }}
            onClick={() => setSelected(title)}
            icon={icon}
        >
            {/* Only show the title when isCollapsed is false */}
            {!isCollapsed && <Typography>{title}</Typography>}
            <Link to={to} />
        </MenuItem>
    );
};

const Sidebar = () => {
    // Function to check if the screen width is less than 600
    const isScreenSmall = () => window.innerWidth < 600;

    // State to hold the current screen width and isCollapsed state
    const [screenWidth, setScreenWidth] = useState(window.innerWidth);
    const [isCollapsed, setIsCollapsed] = useState(false);

    // Function to update the isCollapsed state based on the screen width
    const updateIsCollapsed = () => {
        setIsCollapsed(isScreenSmall());
    };

    // Add event listener to update screen width when the window is resized
    useEffect(() => {
        const handleResize = () => {
            setScreenWidth(window.innerWidth);
        };

        window.addEventListener("resize", handleResize);

        // Cleanup the event listener on component unmount
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Update isCollapsed state when the screen width changes
    useEffect(() => {
        updateIsCollapsed();
        // eslint-disable-next-line
    }, [screenWidth]);

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [selected, setSelected] = useState("Dashboard");
    // eslint-disable-next-line
    const { toggleColorMode } = useContext(ColorModeContext);

    // Fetching profile data from profileDataManager
    const { profileName, profession, profilePicture } = profileDataManager;

    const handleToggleSidebar = () => {
        setIsCollapsed((prevState) => !prevState);
    };

    return (
        <Box
            className="sidebar"
            sx={{
                backgroundColor:
                    theme.palette.mode === "dark"
                        ? colors.primary[400]
                        : colors.greenAccent[400],
                "& .pro-sidebar-inner": {
                    background: `${
                        theme.palette.mode === "dark"
                            ? colors.primary[400]
                            : colors.greenAccent[400]
                    } !important`,
                },
                "& .pro-icon-wrapper": {
                    backgroundColor: "transparent !important",
                },
                "& .pro-inner-item": {
                    padding: "5px 35px 5px 20px !important",
                },
                "& .pro-inner-item:hover": {
                    color: "#868dfb !important",
                },
                "& .pro-menu-item.active": {
                    color: "#6870fa !important",
                },
            }}
        >
            <ProSidebar collapsed={isCollapsed}>
                <Box
                    sx={{
                        display: "flex",
                        justifyContent: isCollapsed ? "center" : "flex-end",
                        alignItems: "center",
                        padding: "8px",
                    }}
                >
                    <IconButton onClick={handleToggleSidebar}>
                        <MenuOutlinedIcon style={{
                            color: "white"
                        }} />
                    </IconButton>
                </Box>

                {!isCollapsed && (
                    <Box mb="25px">
                        <Box
                            display="flex"
                            justifyContent="center"
                            alignItems="center"
                        >
                            <img
                                alt="profile-user"
                                width="100px"
                                height="100px"
                                src={profilePicture}
                                style={{ cursor: "pointer", borderRadius: "50%" }}
                            />
                        </Box>
                        <Box textAlign="center">
                            <Typography
                                variant="h2"
                                color={colors.grey[100]}
                                fontWeight="bold"
                                sx={{ m: "10px 0 0 0" }}
                            >
                                {profileName || "Profile Name"}
                            </Typography>
                            <Typography
                                variant="h5"
                                color={
                                    theme.palette.mode === "dark"
                                        ? colors.greenAccent[500]
                                        : "white"
                                }
                            >
                                {profession || "Profession"}
                            </Typography>
                        </Box>
                    </Box>
                )}

                <Menu iconShape="square">
                    <Box
                        display="flex"
                        flexDirection="column"
                        alignItems={isCollapsed ? "flex-start" : "flex-start"}
                    >
                        {/* Removed the Data and Pages headers when sidebar is collapsed */}
                        {!isCollapsed && (
                            <Typography
                                variant="h6"
                                color={
                                    theme.palette.mode === "dark" ? colors.grey[300] : "white"
                                }
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                Data
                            </Typography>
                        )}

                        <Item
                            title="Oculus Meta"
                            to="/oculus-meta"
                            icon={<AllInclusiveOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed} // Pass isCollapsed to the Item component
                        />

                        {/* Removed Pages header when sidebar is collapsed */}
                        {!isCollapsed && (
                            <Typography
                                variant="h6"
                                color={
                                    theme.palette.mode === "dark" ? colors.grey[300] : "white"
                                }
                                sx={{ m: "15px 0 5px 20px" }}
                            >
                                Pages
                            </Typography>
                        )}

                        <Item
                            title="Profile Form"
                            to="/form"
                            icon={<PersonOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed} // Pass isCollapsed to the Item component
                        />
                        <Item
                            title="Calendar"
                            to="/calendar"
                            icon={<CalendarTodayOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed} // Pass isCollapsed to the Item component
                        />
                        <Item
                            title="FAQ Page"
                            to="/faq"
                            icon={<HelpOutlineOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                            isCollapsed={isCollapsed} // Pass isCollapsed to the Item component
                        />
                    </Box>
                </Menu>
            </ProSidebar>
        </Box>
    );
};

export default Sidebar;