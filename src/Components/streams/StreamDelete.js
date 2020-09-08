import React from "react";
import Modal from "../Modal";
import history from "../../history";

const StreamDelete = () => {
  const actions = (
    <div>
      <button className="ui button negative">Delete</button>
      <button onClick={() => history.push("/")} className="ui button">
        Cancel
      </button>
    </div>
  );

  return (
    <div>
      StreamDelete
      <Modal
        title="Delete Stream"
        content="Are you Sure you want to delete this stream"
        actions={actions}
      />
    </div>
  );
};

export default StreamDelete;
