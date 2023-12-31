import React, { Component } from "react";

export class NewsItem extends Component {
 
  render() {
    let { title, description, imageUrl, newsUrl, author , date, source} = this.props;
    return (
      <div className="container my-3">
        <div className="card ms-3 me-3">
        <div style={{display:'flex', justifyContent:'flex-end', position:'absolute', right:'0'}}>
        <span className="badge rounded-pill bg-danger">{source} </span>
        </div>
          <img src={!imageUrl? "https://images.moneycontrol.com/static-mcnews/2023/07/stocks_in_news-1-770x433.jpg":imageUrl} className="card-img-top" alt="..." />
          <div className="card-body">
            <h5 className="card-title">{title}...</h5>
            <p className="card-text">{description}</p>
            <p className="card-text"><small class="text-body-secondary">By {author}  On {new Date(date).toGMTString()}</small></p>
            <a rel="noreferrer" href={newsUrl} target="_blank" className="btn btn-sm btn-dark">
              Read more
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default NewsItem;
