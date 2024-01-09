import { log } from 'console'
import { notFound } from 'next/navigation';
import React from 'react'

type Props = {
  params: {
    term: string;
  }
}

function SearchPage({params: {term}}: Props) {

  if(!term) notFound();
    
  const termToUse = decodeURI(term)

  // API to get movies
  // API to get popular movies
  
  return (
    <div>
      Search Page {termToUse}
    </div>
  )
}

export default SearchPage
