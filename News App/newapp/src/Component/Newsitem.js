import React, { Component } from 'react'

export class Newsitem extends Component {


    render() {
        let { title, description, imageUrl, newsUrl, newsAuthor, date , source} = this.props;
        return (
            <div className="my-3">
                <div className="card" >
                    <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger" style={{left:"90%",zIndex:"1"}}>
                        {source ? source : "News"}
                    </span>
                    <img src={imageUrl ? imageUrl : 'https://s.yimg.com/os/en/reuters-finance.com/9747c4385ddaafcdab4da68af923026f'} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}</h5>
                        <p className="card-text mt-2">{description}</p>
                        <span className="badge bg-primary me-2">{newsAuthor ? newsAuthor : "Unknown Source"}</span>
                        <span className="badge bg-info">{date}</span>
                        <br/>
                        <a href={newsUrl} className="btn btn-primary btn-sm mt-2" target="_blank" rel="noopener noreferrer">Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
