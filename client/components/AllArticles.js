import React, { Component } from 'react';
import axios from 'axios';
import Article from './Article';

export default class AllArticles extends Component {
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      selectedSource: ''
    };
    this.sortArticles = this.sortArticles.bind(this);
  }

  componentDidMount() {
    this.getArticles();
  }

  async getArticles() {
    try {
      const allArticles = await axios.get('/api/');
      let articles = allArticles.data.articles;
      articles = this.sortArticles(articles);
      this.setState({ articles });
    } catch (error) {
      console.error('error fetching articles', error);
    }
  }

  async getArticlesBySource() {
    try {
      const allArticles = await axios.get('/api/:source');
      let articles = allArticles.data.articles;
      articles = this.sortArticles(articles);
      this.setState({ articles });
    } catch (error) {
      console.error('error fetching articles', error);
    }
  }

  sortArticles(articles) {
    let sortedArticles;
    if (this.state.articles) {
      sortedArticles = articles.sort((a, b) => {
        let dateA = new Date(a.publishedAt);
        let dateB = new Date(b.publishedAt);
        return dateA < dateB ? 1 : -1;
      });
    }
    return sortedArticles;
  }

  render() {
    const { articles } = this.state;
    console.log(articles);
    return (
      <div>
        {!articles || articles.length === 0 ? (
          <div>No articles to load!</div>
        ) : (
          articles.map(article => (
            <Article key={article.id} articleInfo={article} />
          ))
        )}
      </div>
    );
  }
}
