import styles from './index.css';
import { connect } from 'dva';
import { Layout, Menu } from 'antd';
const { Header } = Layout;

const BasicLayout = ({ children, dispatch, sniffs }) => {
  return (
    <Layout>
      <Header className={styles.topHeader}>
        <h1 className={styles.brandName}>PHPCS Rulesets</h1>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['builder']}
          className={styles.topMenu}
        >
          <Menu.Item key="builder">Builder</Menu.Item>
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
