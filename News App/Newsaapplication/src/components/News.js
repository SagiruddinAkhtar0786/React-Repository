import React, { useState, useEffect, useCallback } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);

  const apiKey = process.env.REACT_APP_NEWS_API_KEY;

  // Update document title on component mount
  useEffect(() => {
    document.title = `${props.category.charAt(0).toUpperCase() + props.category.slice(1)} - NewsMonkey`;
  }, [props.category]);

  // Fetch initial articles on component mount or when category changes
  useEffect(() => {
    const fetchInitialArticles = async () => {
      const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=1&pageSize=${props.pageSize}`;
      
      try {
        const response = await fetch(url);
        const data = await response.json();
        setArticles(data.articles);
        setTotalResults(data.totalResults);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchInitialArticles();
  }, [props.country, props.category, props.pageSize, apiKey]);

  // Fetch more data for infinite scroll
  const fetchMoreData = useCallback(async () => {
    const url = `https://newsapi.org/v2/top-headlines?country=${props.country}&category=${props.category}&apiKey=${apiKey}&page=${page + 1}&pageSize=${props.pageSize}`;
    
    try {
      const response = await fetch(url);
      const data = await response.json();
      setArticles(prevArticles => prevArticles.concat(data.articles));
      setPage(prevPage => prevPage + 1);
      setTotalResults(data.totalResults);
    } catch (error) {
      console.error("Error fetching more articles:", error);
    }
  }, [props.country, props.category, props.pageSize, apiKey, page]);

  return (
    <>
      <h1 className="text-center" style={{ margin: '30px 0', color: 'blue' }}>
        NewsMonkey - Top Headlines on {props.category.charAt(0).toUpperCase() + props.category.slice(1)}
      </h1>
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length !== totalResults}
        loader={<Spinner />}
        scrollableTarget="root"
      >
        <div className="container">
          <div className="row">
            {articles.map((element) => (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 50) + "..." : ""}
                  description={element.description ? element.description.slice(0, 80) + "..." : ""}
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  newsAuthor={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            ))}
          </div>
        </div>
      </InfiniteScroll>
    </>
  );
};

News.defaultProps = {
  country: 'us',
  pageSize: 8,
  category: 'general'
};

News.propTypes = {
  country: PropTypes.string,
  pageSize: PropTypes.number,
  category: PropTypes.string
};

export default News
