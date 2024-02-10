import { useState } from 'react'

type CommentVoteProps = {
    score: number;
}

export const CommentVote = ({ score }: CommentVoteProps) => {
    const [voteCount, setVoteCount] = useState(score);

    const increaseVoteCount = () => {
        setVoteCount( prev => prev + 1 );
    }

    const decreaseVoteCount = () => {
        setVoteCount( prev => prev - 1 );
    }

    return (
        <div className='flex flex-col bg-very-light-gray rounded-md font-bold'>
            <button className='text-light-grayish-blue px-3 py-1 hover:text-moderate-blue' onClick={increaseVoteCount}>+</button>
            <span className='text-center text-moderate-blue'>{voteCount}</span>
            <button className='text-light-grayish-blue px-3 py-1 hover:text-moderate-blue' onClick={decreaseVoteCount}>-</button>
        </div>
    )
}
