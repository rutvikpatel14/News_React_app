import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articales = []
    constructor() {
        super();
        console.log('consturctor called');
        this.state = {
            articales: this.articales,
            loading: false
        }
    }

    async componentDidMount() {
        let url= "https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=5be166f7c10b438fa652ce9af6528651";
        let data= await fetch(url);
        let parseData= await data.json();
        console.log(parseData);
        this.setState({articales : parseData.articles});


    }


    render() {
        return (
            <div className='container my-3'>
                <h2 style={{alignContent:'center'}}>News Top Headlines</h2>
                <div className="row">
                    {this.state.articales.map((element) => {
                        return <div className="col-md-3" key={element.url} style={{height: ""}} >
                            {/* <NewsItem title={element.title?element.title.slice(0,40):""} description={element.description?element.discription.slice(0,50):""} imageURL={element.urlToImage} newsURL={element.url} /> */}
                            <NewsItem title={element.title.slice(0,40)} description={element.description} imageURL={element.urlToImage} newsURL={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News;

