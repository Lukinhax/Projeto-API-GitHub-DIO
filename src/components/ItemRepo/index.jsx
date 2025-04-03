import React from 'react'
import { ItemContainer } from './styles'

export default function IntemRepo({repo, removerRepo}) {
  return (
    <ItemContainer>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a href={repo.html_url} target="_blank">Ver Repositório</a>
        <br />
        <button onClick={() => removerRepo(repo.id)} className='remove'>Remover</button>
        <hr />
    </ItemContainer>
  )
}
