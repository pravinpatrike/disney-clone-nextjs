import React from 'react'

type Props ={
  params : {
    id: number;
  };
  searchParams: {
    genre: string;
  };
}

function GenrePage({params: {id}, searchParams: {genre}}: Props) {
    
  return (
    <div>
      GenrePage 
    </div>
  )
}

export default GenrePage
