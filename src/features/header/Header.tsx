import { AppBar, Container, Toolbar, Typography } from '@mui/material';
import { useEffect } from 'react';
import { Navigate, useNavigate } from 'react-router';

export function Header() {

    let navigate = useNavigate();
    useEffect(() => {
        setTimeout(() => {
            navigate("/logout");
        }, 30000);
    }, []);

    return (
        <AppBar position="static">
            <Container maxWidth="xl">
                <Toolbar disableGutters>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                        onClick={() => navigate("/home")}
                    >
                        Nostalgia
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                    >
                        Acceuil
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                    >
                        Reglement
                    </Typography>
                    <Typography
                        variant="h6"
                        noWrap
                        component="div"
                        sx={{ mr: 2, display: { xs: "none", md: "flex" } }}
                    >
                        Équipe
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
