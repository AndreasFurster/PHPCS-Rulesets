import { Tree } from 'antd';
const { TreeNode } = Tree;

const SniffsTree = ({ onSelect, sniffs }) => {
  const renderTreeNodes = data => data.map((item) => {
    if (item.children) {
      return (
        <TreeNode title={item.standard} key={item.key}>
          {renderTreeNodes(item.children)}
        </TreeNode>
      );
    }
    return <TreeNode {...item} />;
  })

  return (
    <Tree
      showLine
      defaultExpandAll
      onSelect={onSelect}
    >
      {renderTreeNodes(sniffs)}
    </Tree>
  );
};

export default SniffsTree;
