import React, { Component } from 'react'

export default class Footer extends Component {
  render() {
    return (
      <div>
        <footer className="page-footer">
          <div className="footer-copyright">
            <div className="container">
              © {new Date().getFullYear()}  Copyright Text
              <a className="grey-text text-lighten-4 right" href="#">Movies</a>
            </div>
          </div>
        </footer>
      </div>
    )
  }
}
