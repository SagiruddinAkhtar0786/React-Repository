import React, { Component } from 'react'
import Newsitem from './Newsitem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";
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

    constructor(props) {
        super(props);
        console.log("Hello I am a constructor from news Component");
        this.state = {
            articles: [],
            page: 1,
            totalResults: 0
        };

        document.title = `${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)} - NewsMonkey`;
    }

    async componentDidMount() {
        console.log("cdm");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=1&pageSize=${this.props.pageSize}`;

        let data = await fetch(url);
        console.log(data);

        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({ articles: parsedData.articles, totalResults: parsedData.totalResults });
    }

    handlePrevClick = async () => {
        console.log("Previous");
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
        let data = await fetch(url);
        console.log(data);

        let parsedData = await data.json();
        console.log(parsedData);
        this.setState({
            page: this.state.page - 1,
            articles: parsedData.articles
        });
    }

    handleNextClick = async () => {
        console.log("Next");

        if (!Math.ceil(this.state.totalResults / this.props.pageSize) < this.state.page + 1) {
            let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
            let data = await fetch(url);
            console.log(data);

            let parsedData = await data.json();
            console.log(parsedData);

            this.setState({
                page: this.state.page + 1,
                articles: parsedData.articles
            });
        } else {

        }
    }

    fetchMoreData = async () => {
        const url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
        this.setState({ page: this.state.page + 1 });
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
            articles: this.state.articles.concat(parsedData.articles),
            totalResults: parsedData.totalResults
        });
    }

    render() {
        console.log("render");
        return (
            <>
            
                <h1 className="text-center" style={{ margin: '30px 0', color: 'blue' }}>NewsMonkey - Top Headlines on {this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}</h1>
                <InfiniteScroll
                    dataLength={this.state.articles.length}
                    next={this.fetchMoreData}
                    hasMore={this.state.articles.length !== this.state.totalResults}
                    loader={<Spinner />}
                    scrollableTarget="root"
                >
                    <div className="container">
                    <div className="row">
                        {this.state.articles.map((element) => {
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
                    </div>
                </InfiniteScroll>
             
            
            </>
        )
    }
}

export default News
