import styles from './index.css';
import { connect } from 'dva';
import { Layout,  Breadcrumb } from 'antd';
import SniffsTree from '../components/SniffsTree';
import Sniff from '../components/Sniff';

const { Content, Sider } = Layout;

const Index = ({ dispatch, sniffs }) => {
  let handleSelect = (id) => {
    dispatch({
      type: 'sniffs/select',
      payload: id,
    });
  }

  let content;
  if(sniffs.selected) {
    content = <Sniff sniff={sniffs.selected} />;
  }

  return (
    <>
      <Sider width={500} className={styles.leftSider}>
        <h2>Sniffs</h2>
        <SniffsTree onSelect={handleSelect} sniffs={sniffs.list} />
      </Sider>
      <Layout className={styles.innerLayout}>
        <Breadcrumb className={styles.breadcrumb}>
          <Breadcrumb.Item>PSR2</Breadcrumb.Item>
          <Breadcrumb.Item>Array</Breadcrumb.Item>
          <Breadcrumb.Item>Close whenever</Breadcrumb.Item>
        </Breadcrumb>
        <Content className={styles.mainContent}>
          {content}
        </Content>
      </Layout>
    </>
  );
}

export default connect(({ sniffs }) => ({
  sniffs,
}))(Index);
