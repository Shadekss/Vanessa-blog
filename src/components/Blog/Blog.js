import './Blog.css'
import {posts} from "../../Shared/ProjectData";
import {BlogCard} from "./Components/BlogCard";
import React from "react";
import {Component} from "react";
import {AddPostForm} from "./Components/AddPostForm";

export class Blog extends Component {
    state = {
        showAddForm: false,
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

    deletePost = pos => {
        if (window.confirm(`Удалить ${this.state.blogArr[pos].title}?`)) {
            const temp = [...this.state.blogArr]
            temp.splice(pos, 1)

            this.setState({
                blogArr: temp
            })

            localStorage.setItem('blogPosts', JSON.stringify(temp))

        }
    }

    handleAddFormShow = () => {
        this.setState({
            showAddForm: true
        })
    }

    handleAddFormHide = () => {
        this.setState({
            showAddForm: false
        })
    }


    render() {
        const blogPosts = this.state.blogArr.map((item, pos) => {
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
                {
                    this.state.showAddForm ? <AddPostForm handleAddFormHide={this.handleAddFormHide}> </AddPostForm>
                        : null
                }

                {
                        <>
                            <h1>Simple Blog</h1>
                            <button className="blackBtn" onClick={this.handleAddFormShow}>Создать новый пост</button>
                            <div className="posts">
                                {blogPosts}
                            </div>
                        </>
                }
            </>
        )
    }
}
