import { useParams } from 'react-router-dom'
import styles from './PostsSugeridos.module.css'
//import posts from 'json/posts.json'
import Post from 'Componentes/PostCard'

export default function PostsSugeridos({ posts }) {
  const parametros = useParams()
  // console.log({ posts })
  //console.log({ parametros })
  let postsSugeridos = posts.filter((post) => post.id !== Number(parametros.id))

  postsSugeridos = postsSugeridos.slice(0, 4)
  //console.log(postsSugeridos)

  return (
    <>
      <span>
        <h2 className={styles.titulo}>Outros posts que você pode gostar:</h2>
      </span>
      <ul className={styles.posts}>
        {postsSugeridos.map((post) => (
          <li key={post.id}>
            <Post post={post} />
          </li>
        ))}
      </ul>
    </>
  )
}
