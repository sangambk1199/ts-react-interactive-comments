import React from 'react'

type PrimaryButtonProps = {
    buttonLabel: string;
    handleClick: (...args: any[]) => any;
}

export const PrimaryButton = ({ buttonLabel, handleClick }: PrimaryButtonProps) => {
  return (
    <button className='bg-moderate-blue px-4 py-2 rounded-md text-white' onClick={handleClick}>{buttonLabel}</button>
  )
}
