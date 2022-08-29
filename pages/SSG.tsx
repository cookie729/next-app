import { NextPage } from "next";
import Head from 'next/head'
import styled from 'styled-components'

type SSGProps = {}

const SSG: NextPage<SSGProps> = () => {
  return (
    <div>
      {/* アプリ名 */}
      <Head>
        <title>タスク管理</title>
      </Head>

      <Main>

        {/* ヘッダー */}
        <HeaderDiv>
          <SH1Header>タスク管理</SH1Header>
          {/* 入力項目 */}
          <HeaderInputArea>
            <Input placeholder=" タスク入力" />
            <Button>作成</Button>
          </HeaderInputArea>
          {/* 設定ボタン */}
          <SettingButton>...</SettingButton>
        </HeaderDiv>


        {/* タスク表示エリア */}
        <DisplayArea>
          {/* タスクタイトル表示エリア */}
          <IncompleteTask>
            <ul>
              <TaskList>
                <TaskTitle>タスクタイトル</TaskTitle>
                <Button>完了</Button>
                <Button>削除</Button>
              </TaskList>
            </ul>
          </IncompleteTask>

          {/* タスク内表示エリア */}
          <InsideDisplayArea>

            {/* タスク内インプットエリア */}
            <InsideInput>
              <InsideTitle>タスクタイトル</InsideTitle>
              {/* 入力項目 */}
              <InsideInputArea>
                <Input placeholder=" タスクを追加" />
                <Button>追加</Button>
              </InsideInputArea>
            </InsideInput>

            {/* タスクリスト表示 */}
            <ul>
              <TaskList>
                <TaskTitle>タスク名</TaskTitle>
                <Button>完了</Button>
                <Button>削除</Button>
              </TaskList>

              <TaskList>
                <TaskTitle>タスク管理作成</TaskTitle>
                <Button>完了</Button>
                <Button>削除</Button>
              </TaskList>
            </ul>
          </InsideDisplayArea>
        </DisplayArea>

        <Footer>
          <FooterTitle>&copy Ring tech.ico</FooterTitle>
        </Footer>

      </Main>
    </div>
  );
};



// common
const Main = styled.main`
  height: 100vh;
`;

const Input = styled.input`
  height: 25px;
  width: 250px;
  border-radius: 8px;
  border: none;
  margin-right: 8px;
  `;
  
  const Button = styled.button`
  height: 25px;
  border-radius: 8px;
  border: none;
  margin-right: 8px;
  `;

// タスクリスト、タスクタイトル
  const TaskList = styled.div`
    display: flex;
    margin-bottom: 12px;
  `;
  
  const TaskTitle = styled.li`
    width: 50%;
    margin-right: 8px;
  `;


// ヘッダー
const HeaderDiv = styled.header`
  background: linear-gradient(to right, #ff006f, #b50099);
  display: flex;
  height: 10%;
`;

const SH1Header = styled.h1`
  color: #fff;
  font-size: 40px;
  margin-left: 20px;
`;

const SettingButton = styled.button`
  display: inline-block;
  margin: 50px 30px 50px auto;
  width: 30px;
  height: 25px;
  border-radius: 8px;
  background: #fff;
  border: none;
  `;


const HeaderInputArea = styled.div`
  display: flex;
  margin: 50px 0 auto 40px;
  `;

// タスク表示エリア
const DisplayArea = styled.div`
  width: 100%;
  height: 86%;
  display: flex;
`;

// 未完了の項目表示エリア
const IncompleteTask = styled.div`
  width: 30%;
  height: 100%;
  border-right: 1px solid #999;
  background: #fff;
`;
  
// タスク内表示エリア
const InsideDisplayArea = styled.div`
  width: 70%;
  background: #fff;
  height: 100%
`;

const InsideInput = styled.div`
  display: flex;
  background: #fff;
  height: 50px;
  border-bottom: .5px solid #999;
`;

const InsideInputArea = styled.div`
  margin: auto 20px auto auto;
`;

const InsideTitle = styled.h2`
  margin: auto;
  margin-left: 30px;
`;


// フッター
const Footer = styled.footer`
  width: 100%;
  height: 4%;
  text-align: center;
  background: #b50099;
  display: flex;
  flex-direction: column;
`;
  
  const FooterTitle = styled.p`
  color: #fff;
  font-weight: 300;
  font-size: .8rem;
`;

export default SSG