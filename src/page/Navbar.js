import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { useTheme } from "styled-components";
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Menu from '@mui/material/Menu';
import MenuIcon from '@mui/icons-material/Menu';
import Container from '@mui/material/Container';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import { SvgIcon } from '@mui/material';
import {
    GitHubButton,
    MobileMenu,
    MobileLink,
} from './NavbarStyle';
import theme from '../themes/default';

const Navbar = () => {
    const svgPathData = "M13.632 5.289c-0.613 0.129-1.823 0.565-2.662 0.984-1.275 0.613-1.759 0.968-2.921 2.13s-1.517 1.646-2.13 2.921c-1.646 3.373-1.646 6.6 0 10.005 0.613 1.291 0.952 1.759 2.13 2.921 1.178 1.178 1.63 1.501 2.921 2.13 1.969 0.936 2.921 1.162 5.002 1.162s3.034-0.226 5.002-1.162c1.275-0.613 1.727-0.952 2.921-2.13 1.178-1.194 1.517-1.646 2.13-2.921 0.774-1.63 1-2.388 1.178-4.002l0.113-1h-3.195l-0.21 1.243c-1.017 6.471-8.907 9.069-13.587 4.47-3.792-3.712-2.969-10.005 1.678-12.732 0.871-0.516 2.63-1.049 3.437-1.049h0.532v-3.227l-0.597 0.016c-0.339 0-1.113 0.113-1.743 0.242zM14.213 9.645c-3.421 0.92-5.648 4.325-5.067 7.745 0.662 3.792 4.212 6.39 7.891 5.761 3.776-0.645 6.39-4.212 5.761-7.859-0.71-4.115-4.647-6.713-8.585-5.648z";
    const [isOpen, setIsOpen] = React.useState(false);
    const pages = ['About', 'Skills', 'Experience', 'Projects', 'Education'];
    const settings = [
        { label: "About", href: "#about" },
        { label: "Skills", href: "#skills" },
        { label: "Experience", href: "#experience" },
        { label: "Projects", href: "#projects" },
        { label: "Education", href: "#education" }
    ];

    const handleOpenNavMenu = (event) => {
        setIsOpen(!isOpen);
    };

    const scrollToSection = (id) => {
        const element = document.querySelector(id);
        if (element) {
            element.scrollIntoView({ behavior: "smooth" }); // Use smooth scrolling behavior
        }
    };
  
    return (
        <AppBar position="fixed" sx={{ bgcolor: '#191924' }}>
            <Box style={{ marginLeft: 1 }}>
                <Container maxWidth="xl">
                    <Toolbar disableGutters>
                        <Box sx={{ paddingLeft: 13, display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                        <Box>
                            <svg style={{ paddingTop: '-20px' }} stroke="currentColor" fill="currentColor" stroke-width="0" version="1.1" viewBox="0 0 32 32" height="3rem" width="3rem" xmlns="http://www.w3.org/2000/svg"><path d="M13.632 5.289c-0.613 0.129-1.823 0.565-2.662 0.984-1.275 0.613-1.759 0.968-2.921 2.13s-1.517 1.646-2.13 2.921c-1.646 3.373-1.646 6.6 0 10.005 0.613 1.291 0.952 1.759 2.13 2.921 1.178 1.178 1.63 1.501 2.921 2.13 1.969 0.936 2.921 1.162 5.002 1.162s3.034-0.226 5.002-1.162c1.275-0.613 1.727-0.952 2.921-2.13 1.178-1.194 1.517-1.646 2.13-2.921 0.774-1.63 1-2.388 1.178-4.002l0.113-1h-3.195l-0.21 1.243c-1.017 6.471-8.907 9.069-13.587 4.47-3.792-3.712-2.969-10.005 1.678-12.732 0.871-0.516 2.63-1.049 3.437-1.049h0.532v-3.227l-0.597 0.016c-0.339 0-1.113 0.113-1.743 0.242zM14.213 9.645c-3.421 0.92-5.648 4.325-5.067 7.745 0.662 3.792 4.212 6.39 7.891 5.761 3.776-0.645 6.39-4.212 5.761-7.859-0.71-4.115-4.647-6.713-8.585-5.648z" /></svg>
                        </Box>
                        <Typography
                            variant="h6"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'none', md: 'flex' },
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',

                            }}
                        >

                            PORTFOLIO
                        </Typography>
                        <Typography
                            variant="h5"
                            noWrap
                            component="a"
                            href="#app-bar-with-responsive-menu"
                            sx={{
                                mr: 2,
                                display: { xs: 'flex', md: 'none' },
                                flexGrow: 1,
                                fontFamily: 'monospace',
                                fontWeight: 700,
                                letterSpacing: '.3rem',
                                color: 'inherit',
                                textDecoration: 'none',
                            }}
                        >
                            PORTFOLIO
                        </Typography>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                        </Box>
                        <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
                            {settings.map(({ label, href }) => (
                                <MenuItem key={label} onClick={() => scrollToSection(href)}>
                                    <Typography
                                        component="a" // Change Typography component to anchor tag
                                        href={href}
                                        textAlign="center"
                                        sx={{
                                            color: 'white',
                                            fontWeight: 666,
                                            textDecoration: 'none',
                                            transition: 'background-color 0.5s, border-color 0.3s, color 0.3s', // Add smooth transition
                                            '&:hover': {
                                                fontWeight: 666,
                                                color: '#854ce6',
                                            },
                                        }}
                                    >
                                        {label}
                                    </Typography>
                                </MenuItem>
                            ))}
                        </Box>
                        <Box sx={{ flexGrow: 1, justifyContent: 'center', alignItems: 'center', display: { xs: 'flex', md: 'none' } }}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon />
                            </IconButton>
                            {isOpen && (
                                <MobileMenu isOpen={isOpen}>
                                    <MobileLink
                                        href="#about"
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                            scrollToSection("#about");
                                        }}
                                    >
                                        About
                                    </MobileLink>
                                    <MobileLink
                                        href="#skills"
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                            scrollToSection("#skills");
                                        }}
                                    >
                                        Skills
                                    </MobileLink>
                                    <MobileLink
                                        href="#experience"
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                            scrollToSection("#experience");
                                        }}
                                    >
                                        Experience
                                    </MobileLink>
                                    <MobileLink
                                        href="#projects"
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                            scrollToSection("#projects");
                                        }}
                                    >
                                        Projects
                                    </MobileLink>
                                    <MobileLink
                                        href="#education"
                                        onClick={() => {
                                            setIsOpen(!isOpen);
                                            scrollToSection("#education");
                                        }}
                                    >
                                        Education
                                    </MobileLink>
                                    <GitHubButton
                                        style={{
                                            padding: "10px 16px",
                                            background: `${theme.primary}`,
                                            color: "white",
                                            width: "max-content",
                                        }}
                                        // href={Bio.github}
                                        target="_blank"
                                    >
                                        Github Profile
                                    </GitHubButton>
                                </MobileMenu>
                            )}
                        </Box>
                        <Box sx={{ flexGrow: 0 }}>
                            <a href="https://github.com/Rahulkumar-react" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
                                <Button
                                    variant="outlined"
                                    sx={{
                                        display: { xs: 'none', md: 'flex' },
                                        borderRadius: '20px',
                                        borderColor: '#854ce6',
                                        color: '#854CE6',
                                        transition: 'background-color 0.5s, border-color 0.3s, color 0.3s',
                                        '&:hover': {
                                            backgroundColor: '#854ce6',
                                            borderColor: '#29223E',
                                            color: 'white',
                                        },
                                    }}
                                >
                                    {'Github Profile'}
                                </Button>
                            </a>
                            <Menu
                                sx={{ mt: '45px' }}
                                id="menu-appbar"
                                //   anchorEl={anchorElUser}
                                anchorOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'right',
                                }}
                            //   open={Boolean(anchorElUser)}
                            //   onClose={handleCloseUserMenu}
                            >
                                {pages.map((setting) => (
                                    <MenuItem key={setting} >
                                        <Typography textAlign="center">{setting}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Box sx={{ paddingLeft: 15, display: { xs: 'none', md: 'flex' }, mr: 1 }} />
                    </Toolbar>
                </Container>
            </Box>
        </AppBar>
    );
}

export default Navbar