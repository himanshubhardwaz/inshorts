import React from 'react';
import './NewsCard.css';

const NewsCard = ({ newsItem }) => {
    return (
        <div className="newsCard">
            <img className="newsImage" alt="cannot load" src={newsItem.urlToImage ? newsItem.urlToImage : "data:image/png;base64,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"} />
            <div className="newsText">
                <div>
                    <span className="title">
                        {newsItem.title}
                    </span>
                    <span className="author">
                        <a href={newsItem.url} target="__blank">
                            <strong> Short </strong>
                        </a>
                        <span className="muted">
                            by {newsItem.author ? newsItem.author : "unknown"}
                        </span>
                    </span>
                </div>
                <div className="lowerNewsText">
                    <div className="description">
                        {newsItem.description}
                    </div>
                    <span className="readmore">
                        read more at
                        <a href={newsItem.url} target="__blank">
                            <strong> {newsItem.source.name} </strong>
                        </a>
                    </span>
                </div>
            </div>
        </div>
    )
}

export default NewsCard;
