import React from 'react';

class Header extends React.Component {
    render() {
        var headerStyle = {
            color: 'blue'
        }
        return (
            <h1 style={headerStyle}>
                {this.props.headerProp}
            </h1>
        );
    }
}

class TableRow extends React.Component {
    render() {
        return (
            <tr>
                <td>
                    <h2>{this.props.data.title}</h2>
                </td>
                <td>
                    <p>{this.props.data.content}</p>
                </td>
            </tr>
        );
    }
}

class Content extends React.Component {
    render() {
        return (
            <div>
                {this.props.contentProp.map((contentList, i) => < TableRow key = {
                    i
                }
                data = {
                    contentList
                } />)}
            </div>
        );
    }
}

class Page extends React.Component {
    constructor() {
      super();
        this.header = "This is a basic React App Header got from prop"
        this.listOfContent = {
            data: [
                {
                    title: "Content Title 1",
                    content: "Content 1"
                }, {
                    title: "Content Title 2",
                    content: "Content 2"
                }
            ]
        }
    }
    render() {
        return (
            <div>
                <Header headerProp= {this.header}/>
                <Content contentProp= {this.listOfContent.data}/>
            </div>
        );
    }
}

export default Page;
