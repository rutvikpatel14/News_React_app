import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let { title, description, imageURL,newsURL } = this.props;
        return (
            <div className='my-3'>
                <div className="card" style={{ width: "18em",height:'100%'}}>
                    <img src={imageURL} className="card-img-top" alt="..." style={{width:'100%',height:'14rem'}} />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        <p className="card-text">{description}...</p>
                        <a href={newsURL} target='_blank' className="btn btn-sm btn-dark" rel="noreferrer" >Read more</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem;