import React from "react";
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { Typography } from '@mui/material';


const Message = ({ author, text }) => {
    return (
        <div className="message">
        <Card sx={{ minWith: 275 }}>
        <CardContent>
        <Typography variant="h4" component="div" color="primary">{author}:</Typography>
        <Typography variant="body3">{text}:</Typography>
        </CardContent>
        </Card>
        </div>
    );
};

export default Message;