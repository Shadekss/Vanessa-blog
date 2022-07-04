import './Blog.css'
import {posts} from "../../Shared/ProjectData";
import {BlogCard} from "./Components/BlogCard";
import React from "react";
import {Component} from "react";

export class Blog extends Component {
    state = {
        showBlog: true,
        blogArr: JSON.parse(localStorage.getItem('blogPosts')) || posts
    }

    likePost = pos => {
        const temp = [...this.state.blogArr];
        temp[pos].liked = !temp[pos].liked;

        this.setState({
            blogArr: temp
        })

        localStorage.setItem('blogPosts', JSON.stringify(temp))
    }

    toggleBlog = () => {
        this.setState({
                showBlog:!this.state.showBlog
            }
        )
    }

    deletePost = pos => {
        if (window.confirm(`Удалить ${this.state.blogArr[pos].title}?`)) {
            const temp = [...this.state.blogArr]
            temp.splice(pos, 1)

            this.setState({
                blogArr:temp
            })

            localStorage.setItem('blogPosts', JSON.stringify(temp))

        }
    }

    render() {
        const blogPosts = this.state.blogArr.map((item,pos) => {
            return (
                <BlogCard
                    key={item.id}
                    title={item.title}
                    description={item.description}
                    liked={item.liked}
                    likePost={() => this.likePost(pos)}
                    deletePost={() => this.deletePost(pos)}
                >
                </BlogCard>
            )
        });

        return (
            <>
                <button onClick={this.toggleBlog}>
                    {
                        this.state.showBlog ? 'Cкрыть блог' : 'Показать блог'
                    }
                </button>
                {
                    this.state.showBlog ?
                        <>
                            <h1>Simple Blog</h1>
                            <div className="posts">
                                {blogPosts}
                            </div>
                        </>
                        : null
                }
            </>
        )
    }
}
