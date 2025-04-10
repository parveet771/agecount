import React from "react";
import { Stack, Typography } from "@mui/material";

const Result = ({day, month, year}) => {
    return (
    <Stack>
    <Typography className="result-text">
    <span>{year === ""? "- -": year}</span>years
    {/* style={{ color: "hsl(259, 100%, 65%)" }} */}
    </Typography>
    <Typography className="result-text">
    <span>{month === ""? "- -": month}</span>months
    </Typography>
    <Typography className="result-text">
    <span>{day === ""? "- -": day}</span>days
    </Typography>
    </Stack>
    );
};
export default Result;