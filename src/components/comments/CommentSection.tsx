import { useCommentsData } from "../../contexts";
import { CommentThread } from "./CommentThread"


export const CommentSection = () => {

    const { comments } = useCommentsData();

    console.log( comments )
    return (
        <>
            {
                comments &&
                comments.map(comment => <CommentThread key={comment.id} comment={comment} />)
            }
        </>
    )
}
