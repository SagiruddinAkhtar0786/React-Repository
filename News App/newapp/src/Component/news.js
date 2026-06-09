import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
export class News extends Component {

    static defaultProps = {
        country: 'us',
        pageSize: 8,
        category: 'general'
    }

    static propTypes = {
        country: PropTypes.string,
        pageSize: PropTypes.number, //ptn
        category: PropTypes.string //pts
    }

    constructor() {
        super();
        console.log("Hello I am a constructor from news Component");
        this.state = {
            articles: [],
            loading: false,
            page: 1
        };
    }

    async componentDidMount() {
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d135ac35a3b0441a9a35562bb4cc315e&page=1&pageSize=${this.props.pageSize}`;

        this.setState({ loading: true });
        let data = await fetch(url);
        console.log(data);

        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults ,loading: false });
    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d135ac35a3b0441a9a35562bb4cc315e&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
       // {this.props.pageSize}
        this.setState({ loading: true });
        let data = await fetch(url);
        console.log(data);

        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles,
            loading: false
        });
    }

    handleNextClick = async () => {
        console.log("Next");

        if (!Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=d135ac35a3b0441a9a35562bb4cc315e&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            this.setState({ loading: true });
            let data = await fetch(url);
            console.log(data);

            let parsedData = await data.json();
            console.log(parsedData);


          //  this.setState({ loading: false });
            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles,
                loading: false
            });
        } else {

        }
    }

    render() {
        console.log("render");
        return (
            <div className="container my-3">
                <h1 className="text-center" style={{ margin: '30px 0', color: 'blue' }}>NewsMonkey - Top Headlines</h1>
                {this.state.loading && <Spinner />}
                <div className="row">
                    {!this.state.loading && this.state.articles.map((element) => {
                        console.log(element);
                        return <div className="col-md-4" key={element.url}>
                            <Newsitem title={element.title ? element.title.slice(0, 50) + "..." : ""}
                                    description={element.description ? element.description.slice(0, 80) + "..." : ""}
                                    imageUrl={element.urlToImage}
                                    newsUrl={element.url}
                                    newsAuthor={element.author}
                                    date={element.publishedAt} 
                                    source={element.source.name}
                                    
                                    />
                        </div>
                    })}
                </div>

                <div>
                    <div className="container d-flex justify-content-between">
                        <button disabled={this.state.page <= 1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                        <button disabled={Math.ceil(this.state.totalResults / this.props.pageSize) <= this.state.page} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &#8594;</button>
                    </div>
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
