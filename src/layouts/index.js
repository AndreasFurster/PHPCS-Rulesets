import styles from './index.css';
import { connect } from 'dva';
import { Layout, Menu, Breadcrumb } from 'antd';
import SniffsTree from '../components/SniffsTree';

const { Header, Content, Sider } = Layout;

const BasicLayout = ({ children, dispatch, sniffs }) => {
  function handleDelete(id) {
    dispatch({
      type: 'sniffs/delete',
      payload: id,
    });
  }

  return (
    <Layout>
      <Header>
        <h1 className={styles.brandName}>PHPCS Ruleset Builder</h1>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['builder']}
          className={styles.topMenu}
        >
          <Menu.Item key="builder">Builder</Menu.Item>
          <Menu.Item key="github">Github</Menu.Item>
          <Menu.Item key="support">Support</Menu.Item>
        </Menu>
      </Header>
      <Layout>
        <Sider width={300} className={styles.leftSider}>
          <h2>Sniffs</h2>
          <SniffsTree onDelete={handleDelete} sniffs={sniffs} />
        </Sider>
        <Layout className={styles.innerLayout}>
          <Breadcrumb className={styles.breadcrumb}>
            <Breadcrumb.Item>PSR2</Breadcrumb.Item>
            <Breadcrumb.Item>Array</Breadcrumb.Item>
            <Breadcrumb.Item>Close whenever</Breadcrumb.Item>
          </Breadcrumb>
          <Content className={styles.mainContent}>
            {children}
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
}
export default connect(({ sniffs }) => ({
  sniffs,
}))(BasicLayout);
