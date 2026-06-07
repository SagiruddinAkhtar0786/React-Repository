import React, { Component } from 'react'

export class Newsitem extends Component {


    render() {
        let {title, description, imageUrl, newsUrl} = this.props;
        return (
            <div className="my-3">
                <div className="card" style={{"width": "18rem"}}>
                    <img src={imageUrl?imageUrl:'https://s.yimg.com/os/en/reuters-finance.com/9747c4385ddaafcdab4da68af923026f'} className="card-img-top" alt="..."/>
                        <div className="card-body">
                            <h5 className="card-title">{title}</h5>
                            <p className="card-text">{description}</p>
                            <a href={newsUrl} className="btn btn-primary btn-sm" target="_blank" rel="noopener noreferrer">Read more</a>
                        </div>
                </div>
            </div>
        )
    }
}

export default Newsitem
