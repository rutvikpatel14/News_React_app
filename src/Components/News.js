import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articales = []
    constructor() {
        super();
        this.state = {
            articales: this.articales,
            loading: false,
            page: 1
        }
    }

    async componentDidMount() {
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5be166f7c10b438fa652ce9af6528651&page=1&pageSize=20";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articales: parseData.articles, totalResults: parseData.totalResults });


    }

    handlePrevClick = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5be166f7c10b438fa652ce9af6528651&page=${this.state.page - 1}&pageSize=20`;
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({
            page: this.state.page - 1,
            articales: parseData.articles
        })
    }

    handleNextClick = async () => {
        if (this.state.page + 1 > Math.ceil(this.state.totalResults / 20)) {

        }
        else {
            let url = `https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5be166f7c10b438fa652ce9af6528651&page=${this.state.page + 1}&pageSize=20`;
            let data = await fetch(url);
            let parseData = await data.json();
            this.setState({
                page: this.state.page + 1,
                articales: parseData.articles
            })
        }
    }


    render() {
        return (
            <div className='container my-3' style={{ alignItems: 'center' }}>
                <h1 className="text-center">News Top Headlines</h1>
                <div className="row">
                    {this.state.articales.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem
                                title={element.title ? element.title.slice(0, 35) : ''}
                                description={element.description ? element.description.slice(0, 60) : ''}
                                imageURL={element.urlToImage}
                                newsURL={element.url} />
                        </div>
                    })}
                </div>
                <div className="container d-flex justify-content-between">
                    <button type="button" disabled={this.state.page <= 1} className="btn btn-dark" onClick={this.handlePrevClick}> &larr; Previous</button>
                    <button type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next &rarr;</button>
                </div>
            </div>
        )
    }
}

export default News;

