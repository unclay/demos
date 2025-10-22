import { connect } from 'umi';
import yayJpg from '../assets/yay.jpg';
import { useCallback, useEffect } from 'react';

function HomePage({ global, user, dispatch }: { global: any; user: any; dispatch: any }) {
  const randomName = useCallback(() => {
    return Math.random().toString(36).substring(2, 6);
  }, []);
  return (
    <div>
      <p>status: {global.status}</p>
      <p>user age: {user.age}</p>
      <p>user name: {user.name}</p>
      <button onClick={() => dispatch({
        type: 'global/setStatus',
        payload: Date.now(),
      })}>set loaded</button>
      <button onClick={() => dispatch({
        type: 'user/setName',
        payload: randomName(),
      })}>set name</button>
    </div>
  );
}
export default connect((state: any) => {
  console.log(state);
  return ({ global: state.global, user: state.user })
})(HomePage);