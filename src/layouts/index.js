import styles from './index.css';
import { connect } from 'dva';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const BasicLayout = ({ children, dispatch, sniffs }) => {


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
        {children}
      </Layout>
    </Layout>
  );
}
export default connect(({ sniffs }) => ({
  sniffs,
}))(BasicLayout);
