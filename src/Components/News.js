import React, { Component } from 'react'
import NewsItem from './NewsItem'

export class News extends Component {

    articales = [
        {
            "source": {
                "id": "news24",
                "name": "News24"
            },
            "author": "sport",
            "title": "Netherlands matches crucial for Proteas' Cricket World Cup hopes",
            "description": "Two end-of-season one-day international matches between South Africa and the Netherlands would not normally attract much attention - but the games this weekend are crucial for the Proteas.",
            "url": "https://www.news24.com/sport/cricket/proteas/netherlands-matches-crucial-for-proteas-cricket-world-cup-hopes-20230330",
            "urlToImage": "https://cdn.24.co.za/files/Cms/General/d/3076/80ef6c8e43fc47879552e325c87828c6.jpg",
            "publishedAt": "2023-03-30T07:01:36+00:00",
            "content": "<ul><li>The Proteas' upcoming ODIs against the Netherlands are of utmost importance for their Cricket World Cup qualification.</li><li>South Africa need to win both World Cup Super League matches to … [+3055 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
            "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
            "publishedAt": "2020-04-27T11:41:47Z",
            "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
        },
        {
            "source": {
                "id": "espn-cric-info",
                "name": "ESPN Cric Info"
            },
            "author": null,
            "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
            "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
            "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
            "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
            "publishedAt": "2020-03-30T15:26:05Z",
            "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
        }
    ]
    constructor() {
        super();
        console.log('consturctor called');
        this.state = {
            articales: this.articales,
            loading: false
        }
    }

    render() {
        return (
            <div className='container my-3'>
                <h2>News Top Headlines</h2>
                <div className="row">
                    {this.state.articales.map((element) => {
                        return  <div className="col-md-4"  key={element.url} >
                            <NewsItem title={element.title} description={element.discription} imageURL={element.urlToImage} newsURL={element.url} />
                        </div>
                    })}
                </div>
            </div>
        )
    }
}

export default News;

