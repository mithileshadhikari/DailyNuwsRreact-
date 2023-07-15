import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Spinner from "./Spinner";
import PropTypes from 'prop-types'


export class News extends Component {

  static defaultProps = {
    countryname: 'in',
    pageSize: 6,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  capitalizeFirstLetter=(string)=>{
    return string.charAt(0).toUpperCase()+ string.slice(1);
  }

  articles = [

  ];
  constructor(props) {
    super(props);
    this.state = {
      articles: this.articles,
      loading: false,
      page:1

    }
    document.title= `DailyNuws- ${this.capitalizeFirstLetter(this.props.category)}`;
  }

  async componentDidMount() {
    console.log("cdm");
    let url =
      `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8d1a74a20ca4204b6d381ab1967211f&page=1&pageSize=${this.props.pageSize}`;
      this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    console.log(parsedData);
    this.setState({ articles: parsedData.articles, 
      totalResults:parsedData.totalResults,
     loading:false
    });
  }

handlePrevClick = async ()=>{
console.log("previous")

let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8d1a74a20ca4204b6d381ab1967211f&page=${this.state.page - 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
  let data = await fetch(url);
  let parsedData = await data.json();
  console.log(parsedData);

this.setState({
  page: this.state.page - 1,
  articles: parsedData.articles,
  loading:false

})

}

handleNextClick = async ()=>{
  console.log("next")
if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)))
{

 let url =
    `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=b8d1a74a20ca4204b6d381ab1967211f&page=${this.state.page + 1}&pageSize=${this.props.pageSize}`;
    this.setState({loading:true})
    let data = await fetch(url);
    let parsedData = await data.json();
    
  this.setState({
    page: this.state.page + 1,
    articles: parsedData.articles,
    loading:false

  })

 }


}













  render() {
    return (
      <div className="container-fluid justify-content-center my-3">
        <h2 className="text-center" style={{margin:'10px 0px'}}>DailyNuws - Top {this.capitalizeFirstLetter(this.props.category)} Headlines </h2>
        {this.state.loading && <Spinner/>}
        <div className="row  ">
          {!this.state.loading && this.state.articles.map((element) => {
            return (
              <div className="col-md-4" key={element.url}>
                <NewsItem
                  title={element.title ? element.title.slice(0, 45) : ""}
                  description={
                    element.description ? element.description.slice(0, 88) : ""
                  }
                  imageUrl={element.urlToImage}
                  newsUrl={element.url}
                  author={element.author}
                  date={element.publishedAt}
                  source={element.source.name}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-center">
        <button disabled={this.state.page<=1} type="button" className="btn btn-dark d-flex justify-content-center mx-3" onClick={this.handlePrevClick}>&laquo; Prev</button>
        <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize)} type="button" className="btn btn-dark d-flex justify-content-center mx-3"onClick={this.handleNextClick}>Next &raquo;</button>

        </div>
      </div>
    );
  }
}

export default News;
