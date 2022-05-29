const TitleBar = ({ taskList }) => {
  return (
    <div className="titlebox">
      <h1>You have {taskList.length} todos</h1>
    </div>
  );
};

export default TitleBar;
