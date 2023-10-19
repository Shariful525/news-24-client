import React from 'react';
import Card from 'react-bootstrap/Card';

import { Link } from 'react-router-dom';
import { FaBookmark, FaEye, FaShareFromSquare, FaStar } from "react-icons/fa6";

const NewsSummaryCard = ({ news }) => {
    return <Card style={{ width: '30rem', margin: "20px auto" }}>

        <Card.Header className='d-flex justify-content-between align-items-center'>
            <div className='d-flex align-items-center gap-2 '>
                <img width='50px' style={{ borderRadius: "50%" }} alt={news.author.name} src={news.author.img} />
                <div className='d-block'>
                    <small>{news.author.name}</small><br />
                    <small>{news.author.published_date}</small>
                </div>
            </div>

            <div className='d-flex gap-2'>
                <FaBookmark />
                <FaShareFromSquare />
            </div>
        </Card.Header>
        <Card.Body>
            <Card.Title>{news.title}</Card.Title>

        </Card.Body>

        <Card.Img variant="top" src={news.image_url} />

        <Card.Body>
            <Card.Text>
                {
                    news.details.length > 200 ?
                        <p>{news.details.slice(0, 250) + '...'} <Link to={`/news/${news?._id}`}>Read More</Link></p>
                        :
                        <p>{news.details}</p>
                }
            </Card.Text>


        </Card.Body>

        <Card.Footer className='d-flex align-items-center justify-content-between'>
            <div className='d-flex align-items-center'>
                <div className='text-warning'>
                    <FaStar />

                </div>
                <span>{news.rating.number}</span>
            </div>
            <div className='d-flex align-items-center gap-2'>

                <FaEye />

                <span>{news.total_view}</span>
            </div>
        </Card.Footer>

    </Card>;
};

export default NewsSummaryCard;