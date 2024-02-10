import { useCommentsData } from "../../contexts";
import { AddComment } from "./AddComment";
import { CommentThread } from "./CommentThread"


export const CommentSection = () => {

    const { comments } = useCommentsData();

    console.log( comments )
    return (
        <div className="container max-w-screen-md mx-auto px-4 my-24">
            {
                comments &&
                comments.map(comment => <CommentThread key={comment.id} comment={comment} />)
            }
            
            <AddComment />
        </div>
    )
}
