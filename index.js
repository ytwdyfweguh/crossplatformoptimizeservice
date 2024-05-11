function rightSideView(root) {
  if (!root) return [];
  const result = [];
  let level = 0;
  const traverse = (node, level) => {
    if (!node) return;
    if (result[level] === undefined) result[level] = node.val;
    traverse(node.right, level + 1);
    traverse(node.left, level + 1);
  };
  traverse(root, level);
  return result;
}
