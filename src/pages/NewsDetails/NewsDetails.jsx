/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable eqeqeq */
import { Box, Container } from "@mui/material";
import { useEffect, useRef, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import { fetchNewsData } from "../../api";
import Button from "@mui/material/Button";
import { KeyboardArrowLeft, ChevronRight } from "@mui/icons-material";

import notFound from "../../images/not-found.png";
import s from "./newsDeatails.module.scss";

const NewsDetails = () => {
    const [newsDataItem, setNewsDataItem] = useState([]);
    const { id } = useParams();
    const navigate = useNavigate();
    const scrollToTop = useRef(null);

    // Get all news into details page
    useEffect(() => {
        const getNews = async () => {
            const { articles } = await fetchNewsData();
            setNewsDataItem(articles);
        };

        getNews();
    }, []);

    // Scrolling to to after load detail page
    useEffect(() => {
        scrollToTop?.current?.scrollIntoView({ block: "start" });
    }, [id]);

    // Generate new object for comfortable sort by id
    const clearArray = newsDataItem.map((item, index) => ({
        id: index + 1,
        details: item,
    }));

    // Finding a specific object and ouput him
    const filteredItems = clearArray.find((item) => item.id == id);
    const displayData = filteredItems?.details;

    return (
        <Container maxWidth="xxl" ref={scrollToTop}>
            <Box sx={{ flexGrow: 1, paddingTop: 12, paddingBottom: 5 }}>
                <>
                    <Button variant="contained" onClick={() => navigate(-1)}>
                        <KeyboardArrowLeft />
                        Go back
                    </Button>
                    <h1 className={s.title}>{displayData?.title}</h1>
                    <h3 className={s.author}>
                        Author:{" "}
                        {displayData?.author ? displayData?.author : "unknown"}
                    </h3>
                    <p className={s.descr}>
                        <strong>Description:</strong> {displayData?.description}
                    </p>
                    <p className={s.link}>
                        <Link to={displayData?.url} target="_blank">
                            <Button
                                variant="contained"
                            >
                                Click to go to the original article
                                <ChevronRight />
                            </Button>
                        </Link>
                    </p>
                    {displayData?.urlToImage ? (
                        <img
                            className={s.poster}
                            src={displayData?.urlToImage}
                            alt={displayData?.title}
                        />
                    ) : (
                        <img
                            className={s.poster}
                            src={notFound}
                            alt={displayData?.title}
                        />
                    )}
                </>
            </Box>
        </Container>
    );
};

export default NewsDetails;
