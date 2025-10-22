import { Link, useLocation, useParams, useSearchParams } from "@umijs/max"
import { PageContainer } from "@ant-design/pro-components"
import { useEffect, useState } from "react";

function ThreadTid() {
  const location  = useLocation();
  const { tid } = useParams();
  const [searchParams, setSearchParams] = useSearchParams();
  const [status, setStatus] = useState('init');
  const [first, setFirst] = useState(false);
  useEffect(() => {
    (window as any).searchParams = searchParams;
    setStatus('loaded');
    setFirst(true);
    return () => {
      setStatus('unloaded');
    }
  }, []);
  useEffect(() => {
    if (first) {
      setStatus(`active: ${searchParams.toString()}`);
    }
  }, [searchParams]);
  return (
    <PageContainer header={{
        title: '帖子详情',
      }}>
      <h2>路由信息</h2>
      <p>页面状态：{status}</p>
      <p>动态路由tid：{tid}</p>

      <h2>查询参数</h2>
      <p>from: {searchParams.get('from')}</p>
      <p>timestramp: {searchParams.get('timestramp')}</p> <button onClick={() => setSearchParams({
        ...Object.fromEntries(searchParams.entries()),
        timestramp: Date.now().toString(),
      })}>更新查询参数</button>

      <h2>Location</h2>
      <code>
        {JSON.stringify(location, null, 2)}
      </code>
    </PageContainer>
  )
}
export default ThreadTid
