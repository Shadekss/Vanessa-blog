import './AddPostForm.css'
import CancelIcon from '@mui/icons-material/Cancel';
import { Component } from "react"

export class AddPostForm extends Component {

    state = {
        postTitle: '',
        postDesc: '',
        postTags: ''
    }

    handlePostTitleChange = e => {
        this.setState({
            postTitle: e.target.value
        })
    }

    handlePostDescChange = e => {
        this.setState({
            postDesc: e.target.value
        })
    }

    handlePostTagsChange = e => {
        this.setState({
            postTags: e.target.value
        })
    }

    render() {
        const handleAddFormHide = this.props.handleAddFormHide
        return (

            <>
                <form action="" className="addPostForm">
                    <button className="hideBtn" onClick={handleAddFormHide}>
                        <CancelIcon> </CancelIcon>
                    </button>
                    <h2>Создание поста</h2>
                    <div>
                        <input
                            className="addFormInput"
                            type="text"
                            name="postTitle"
                            placeholder="Заголовок поста"
                            value={this.state.postTitle}
                            onChange={this.handlePostTitleChange}
                        />
                    </div>
                    <div>
                        <textarea className="addFormInput"
                                  name="postDescription"
                                  placeholder="Описание поста"
                                  value={this.state.postDesc}
                                  onChange={this.handlePostDescChange}
                        />
                    </div>

                    <div>
                        <input className="addFormInput"
                               type="text"
                               name="postTags"
                               placeholder="Теги поста" 
                               value={this.state.postTags}
                               onChange={this.handlePostTagsChange}
                        />
                    </div>
                    <div>
                        <button onClick={handleAddFormHide}
                                className="blackBtn"
                                type="button">
                            Добавить пост</button>
                    </div>
                </form>
                <div onClick={handleAddFormHide} className="overlay"></div>
            </>

        )
    }

}
