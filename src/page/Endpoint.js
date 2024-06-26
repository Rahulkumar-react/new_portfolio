import React from 'react';
import { Box, Grid, Stack, Typography } from '@mui/material';
import { FaFacebook, FaLinkedin, FaInstagram } from "react-icons/fa";
import { BsTwitterX } from "react-icons/bs";

const Endpoint = () => {
    const items = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" }
    ];

    return (
        <Grid container spacing={2} justifyContent="center" alignItems="center" sx={{ bgcolor: '#1c1c27' }} marginTop={0}>
            <Box sx={{ width: '85%', justifyContent: "center", alignItems: "center", paddingY: 4 }}>
                <Typography variant="h6" sx={{ color: 'white', fontWeight: 'bold', textAlign: "center", color: '#854CE6', marginBottom: 2 }}>
                    RAHULKUMAR R
                </Typography>
                <Stack direction={{ xs: 'column', sm: 'row' }} spacing={2} justifyContent="center" sx={{ textAlign: "center" }}>
                    {items.map(({ label, href }) => (
                        <Typography
                            key={label}
                            component="a"
                            href={href}
                            sx={{
                                color: 'white',
                                fontSize: "17px",
                                cursor: 'pointer',
                                textDecoration: 'none', // Ensures there's no underline
                                "&:hover": { color: "#854ce6" }
                            }}
                        >
                            {label}
                        </Typography>
                    ))}
                </Stack>
                <Stack direction="row" spacing={2} sx={{ textAlign: "center", justifyContent: 'center', marginTop: 2 }}>
                    <FaFacebook style={{ color: 'white', fontSize: "17px", cursor: 'pointer', "&:hover": { color: "#854ce6" } }} />
                    <FaLinkedin style={{ color: 'white', fontSize: "17px", cursor: 'pointer', "&:hover": { color: "#854ce6" } }} />
                    <BsTwitterX style={{ color: 'white', fontSize: "17px", cursor: 'pointer', "&:hover": { color: "#854ce6" } }} />
                    <FaInstagram style={{ color: 'white', fontSize: "17px", cursor: 'pointer', "&:hover": { color: "#854ce6" } }} />
                </Stack>
                <Typography sx={{ color: 'white', fontSize: '11px', textAlign: "center", marginTop: 2 }}>
                    © 2024 RAHUL KUMAR R. All rights reserved.
                </Typography>
            </Box>
        </Grid>
    );
}

export default Endpoint;
