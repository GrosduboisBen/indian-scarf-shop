import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

const Welcome = () => (
    <div style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        height: "100vh",
    }}>
    <Card style={{ textAlign: "center", marginTop: "4rem", width:'max-content' }}>
        <CardContent>
        <h1>Welcome to Indian Scarf Shop!</h1>
        <p>
            Discover a beautiful collection of authentic Indian scarves.<br />
            Enjoy browsing and happy shopping!
        </p>
        </CardContent>
    </Card>
    </div>
);

export default Welcome;