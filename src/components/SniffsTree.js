import { Tree, Icon } from 'antd';
import { red, volcano, blue } from '@ant-design/colors';

const { TreeNode } = Tree;

const SniffsTree = ({ onSelect, sniffs }) => {
  const renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.standard} key={item.key} selectable={false} style={{ paddingTop: 0 }}>
          {renderTreeNodes(item.children)}
        </TreeNode>
      );
    }

    let icon;
    if(item.action === "CheckWithError") icon = <Icon type="exclamation-circle" theme="twoTone" twoToneColor={ red[5] } />;
    else if(item.action === "CheckWithWarning") icon = <Icon type="warning" theme="twoTone" twoToneColor={ volcano[4] } />;
    else if(item.action === "DontCheck") icon = <Icon type="check-square" theme="twoTone" twoToneColor={ blue[5] } />;
    else icon = <Icon type="question" />;

    return <TreeNode icon={icon} key={item.key} title={item.title} style={{ padding: 0 }} />;
  })

  return (
    <Tree
      showIcon
      showLines
      blockNode
      defaultExpandAll
      onSelect={onSelect}
    >
      {renderTreeNodes(sniffs)}
    </Tree>
  );
};

export default SniffsTree;
