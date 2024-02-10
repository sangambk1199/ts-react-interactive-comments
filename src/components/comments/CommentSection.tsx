import { CommentThread } from "./CommentThread"

type Comment = {
    id: number;
    content: string;
    createdAt: string;
    score: number;
    user: {
        image: {
            png: string;
            webp: string;
        };
        username: string;
    };
    replies?: Comment[];
};

type CurrentUser = {
    image: {
        png: string;
        webp: string;
    };
    username: string;
};

type CommentSectionProps = {
    currentUser: CurrentUser;
    comments: Comment[];
};

export const CommentSection = ({ currentUser, comments }: CommentSectionProps) => {

    return (
        <>
            {JSON.stringify(currentUser)}
            {JSON.stringify(comments)}
            <CommentThread />
        </>
    )
}
