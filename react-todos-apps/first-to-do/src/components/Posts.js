import React, { Component } from 'react'

export default class Posts extends Component {
    
    state = {
        posts: []
    }

    async componentDidMount(){
        const response = await fetch('https://jsonplaceholder.typicode.com/posts')
        const data = await response.json();
        console.log(data);
        this.setState({posts: data});
    }
    
    render() {
        return (
            <div>
                <h1>Posts</h1>
                {
                    this.state.posts.map(post => {
                        return <div key={post.id}>
                            <h3>{post.title}</h3>
                            <p>{post.body}</p>
                        </div>
                    })
                }
            </div>
        )
    }
}

