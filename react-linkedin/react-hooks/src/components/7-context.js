import { TreesContext, useTrees } from "..";
import { useContext } from "react";

const List = () => {
  // const { trees } = useContext(TreesContext);
  const {trees} = useTrees();

  return (
    <div>
      <h1>Trees I've heard Of</h1>
      <ul>
        {trees.map((tree) => (
          <li key={tree.id}>{tree.type}</li>
        ))}
      </ul>
    </div>
  );
};

export default List;
