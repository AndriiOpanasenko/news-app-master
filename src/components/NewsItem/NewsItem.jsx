import * as React from "react";
import {
    Card,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography,
} from "@mui/material";

import notFound from "../../images/not-found.png";
import { Link } from "react-router-dom";

const NewsItem = ({ newsData, id }) => {
    return (
        <Card sx={{ margin: "0 auto" }} key={newsData.publishedAt}>
            {newsData.urlToImage ? (
                <CardMedia
                    component="img"
                    alt={newsData.title}
                    height="200"
                    image={newsData.urlToImage}
                />
            ) : (
                <CardMedia
                    component="img"
                    alt="Not Found"
                    height="200"
                    image={notFound}
                />
            )}
            <CardContent>
                <Typography gutterBottom variant="h5" component="div">
                    {newsData.title}
                </Typography>
                <Typography gutterBottom variant="h6">
                    {newsData.author}
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    {newsData.description}
                </Typography>
            </CardContent>
            <CardActions>
                <Link to={`/article/${id}`}>
                    <Button variant="contained" size="small">
                        Read More
                    </Button>
                </Link>
            </CardActions>
        </Card>
    );
};

export default NewsItem;
