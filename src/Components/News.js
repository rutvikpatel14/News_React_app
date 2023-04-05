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
        let url = "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5be166f7c10b438fa652ce9af6528651";
        let data = await fetch(url);
        let parseData = await data.json();
        this.setState({ articales: parseData.articles });


    }


    render() {
        return (
            <div className='container my-3' style={{ alignItems: 'center' }}>
                <h1 className="text-center">News Top Headlines</h1>
                <div className="row">
                    {this.state.articales.map((element) => {
                        return <div className="col-md-3" key={element.url}>
                            <NewsItem
                                title={element.title ? element.title.slice(0, 40) : ''}
                                description={element.description ? element.description.slice(0, 60) : ''}
                                imageURL={element.urlToImage}
                                newsURL={element.url} />
                        </div>
                    })}
                </div>
                
            </div>
        )
    }
}

export default News;

