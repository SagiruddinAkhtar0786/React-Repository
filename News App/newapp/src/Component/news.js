import React, { Component } from 'react'
import Newsitem from './Newsitem'

export class News extends Component {

   

    constructor() {
        super();
        console.log("Hello I am a constructor from news Component");
        this.state = {
            articles: [],
            loading: false
        };
    }

    async componentDidMount() {
        console.log("cdm");
        let url = "https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d135ac35a3b0441a9a35562bb4cc315e" ;
        let data = await fetch(url);
        console.log(data   );

        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({articles: parsedData.articles});
    }   

    render() {
        console.log("render");
        return (
            <div className="container my-3">
                <h2>NewsMonkey - Top Headlines</h2>
                <div className="row">
                {this.state.articles.map((element) => {
                    console.log(element);
                    return <div className="col-md-4" key={element.url}>
                        <Newsitem title={element.title?element.title.slice(0, 50) + "...":"" } description={element.description?element.description.slice(0, 80) + "..." :""} imageUrl={element.urlToImage} newsUrl={element.url} />
                    </div>
                })}
                </div>
                {/* <div className="row">
                    <div className="col-md-4">
                        <Newsitem title="News Title 1" description="This is the description for news item 1" imageUrl="https://images.ecestaticos.com/pbazR_JhG2eZ7_fgie5Y2cX8oXc=/0x322:2272x1515/600x315/filters:fill(white):format(jpg):quality(99):watermark(f.elconfidencial.com/file/bae/eea/fde/baeeeafde1b3229287b0c008f7602058.png,0,275,1)/f.elconfidencial.com/original/2ef/059/7f6/2ef0597f6bc5d74d739e949da76b7749.jpg" newsUrl="https://example.com/news1" />
                    </div>

                </div> */}
            </div>
        )
    }
}

export default News
