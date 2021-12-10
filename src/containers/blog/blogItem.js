import fire from '../../config/fire-config';
import {Link} from 'react-router-dom'
import { useEffect, useState } from 'react';
import { useRouter } from '../../utils/useRouter';

const Blog = (props) => {
 const [content, setContent] = useState({})
 const router = useRouter();



 useEffect(() => {
  (async () => {
    console.log('router', router)
    const blogId = router.query.blogId
    await fire.firestore()
      .collection('blog')
      .doc(blogId)
      .get()
      .then(result => {
        setContent(result.data())
        // content['title'] = result.data().title;
        // content['content'] = result.data().content;
      });
  })()

  // return () => {
  //   unsubscribeOrRemoveEventHandler() // 👍 
  // }
}, [])


console.log('content', content)
  return (
    <div>
      <h2>{props.title}</h2>
      <p>
        {props.content}
      </p>
      <Link to="/">
        <a>Back</a>
      </Link>
    </div>
  )
}
// export const getServerSideProps = async ({ query }) => {
//   const content = {}
//   await fire.firestore()
//     .collection('blog')
//     .doc(query.id)
//     .get()
//     .then(result => {
//       content['title'] = result.data().title;
//       content['content'] = result.data().content;
//     });
// return {
//     props: {
//       title: content.title,
//       content: content.content,
//     }
//   }
// }
export default Blog