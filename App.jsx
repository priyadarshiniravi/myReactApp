import React from 'react';

class Header extends React.Component {
    render() {
        var headerStyle = {
            color: 'blue'
        }
        return (
            <h1 style={headerStyle}>
                This is a basic React App
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
    constructor()
    {
        super();
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
                {this.listOfContent.data.map((contentList, i)=> < TableRow key = {i} data = {contentList} />)}
            </div>
        );
    }
}

class Page extends React.Component {
    render() {
        return (
            <div>
                <Header/>
                <Content/>
            </div>
        );
    }
}

export default Page;
