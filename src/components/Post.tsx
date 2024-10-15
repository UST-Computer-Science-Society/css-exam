type PostProps = {
    post: {
        src: string;
        heading: string;
        posted: string;
    }
}

export const Post = ({ post }: PostProps) => {
    return(
        <>
            <div className="post-wrapper">
                <h6 className="post-heading">{post.heading}</h6>
                <p className="posted">{post.posted}</p>
            </div>
            <div className="post-wrapper-small">
                <h6 className="post-heading">{post.heading}</h6>
                <p className="posted">{post.posted}</p>
            </div>
        </>
    );
}