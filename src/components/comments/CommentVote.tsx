import { useState } from 'react'

export const CommentVote = () => {
    const [voteCount, setVoteCount] = useState(12);

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
