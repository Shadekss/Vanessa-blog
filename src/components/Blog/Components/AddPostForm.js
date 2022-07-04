import './AddPostForm.css'

export const AddPostForm = () => {
    return (
        <>
            <form action="" className="addPostForm">
                <h2>Создание поста</h2>
                <div>
                    <input type="text" name="postTitle" placeholder="Заголовок поста"/>
                </div>
                <div>
                    <textarea name="postDescription" placeholder="Описание поста"/>
                </div>
                <div>
                    <button className="blackBtn" type="button">Добавить пост</button>
                </div>
            </form>
            <div className="overlay"></div>
        </>

    )
}