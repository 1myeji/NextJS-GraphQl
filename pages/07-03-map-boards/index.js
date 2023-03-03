import { gql, useQuery } from '@apollo/client';
import styled from '@emotion/styled';

const FETCH_BOARDS = gql`
  query fetchBoards {
    fetchBoards {
      number
      writer
      title
      contents
    }
  }
`;

const Row = styled.div`
  display: flex;
`;

const Column = styled.div`
  width: 25%;
`;

export default function StaticRoutedPage() {
  const { data } = useQuery(FETCH_BOARDS);

  return (
    <>
      {data?.fetchBoards.map((el) => {
        return (
          <Row>
            <Column>
              <input type='checkbox' />
            </Column>
            <Column>{el.number}</Column>
            <Column>{el.title}</Column>
            <Column>{el.contents}</Column>
          </Row>
        );
      })}
      {/* // <div>1번 게시글로 이동이 완료되었습니다.</div>
      // <div>작성자: {data ? data.fetchBoards.writer : '로딩중입니다...'}</div>
      // <div>제목: {data && data.fetchBoards.title}</div>
      // <div>내용: {data?.fetchBoards.contents}</div> */}
    </>
  );
}
