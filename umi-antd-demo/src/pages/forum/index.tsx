import { Link } from "@umijs/max"
import { PageContainer } from "@ant-design/pro-components"

function ForumIndex() {
  return (
    <PageContainer header={{
        title: '论坛',
      }}>
      <div>论坛</div>
      <Link to="/thread/123?from=forum">查看帖子</Link>
    </PageContainer>
  )
}
export default ForumIndex