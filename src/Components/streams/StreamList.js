import React, { useEffect } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { fetchStreams, createStream, filterStreams } from "../../actions";

const StreamList = ({
  fetchStreams,
  streams,
  currentUserId,
  isSignedIn,
  filterStreams,
  searchStreams,
}) => {
  useEffect(() => {
    fetchStreams();
  }, []);

  const filteredStreams = streams.filter((stream) => {
    return (
      stream.title.toLowerCase().indexOf(searchStreams.toLowerCase()) !== -1
    );
  });

  //sort list of streams by property value
  /*const sortObj = (list, key) => {
    function compare(a, b) {
      a = a[key];
      b = b[key];
      var type =
        typeof a === "string" || typeof b === "string" ? "string" : "number";
      var result;
      if (type === "string") result = a.localeCompare(b);
      else result = a - b;
      return result;
    }
    return list.sort(compare);
  };

  const newStreams = sortObj(streams, "title");

  //sort list of streams by id(descending)
  /*const newStreams = streams.sort(
    (a, b) => parseFloat(b.id) - parseFloat(a.id)
  );*/

  const renderAdmin = (stream) => {
    if (stream.userId === currentUserId) {
      return (
        <div className="right floated content">
          <Link to={`/streams/edit/${stream.id}`} className="ui button primary">
            Edit
          </Link>
          <Link
            to={`/streams/delete/${stream.id}`}
            className=" ui button negative"
          >
            Delete
          </Link>
        </div>
      );
    }
  };

  const renderCreate = () => {
    if (isSignedIn) {
      return (
        <div style={{ textAlign: "right" }}>
          <Link to="/streams/new" className="ui button primary">
            Create Stream
          </Link>
        </div>
      );
    }
  };

  const renderList = filteredStreams.map((stream) => {
    if (isSignedIn) {
      return (
        <div className="item" key={stream.id}>
          {renderAdmin(stream)}
          <i className="large middle aligned icon camera" />
          <div className="content">
            <Link to={`/streams/show/${stream.id}`} className="header">
              {stream.title}
            </Link>
            <div className="description">{stream.description}</div>
            <img src={stream.file} />
          </div>
        </div>
      );
    }
  });

  return (
    <div>
      <div className="ui secondary pointing menu">
        <h2>Streams</h2>
        <div className="right menu">
          <h2>Search:</h2>
          <input
            onChange={(e) => filterStreams(e.target.value)}
            value={searchStreams}
          />
        </div>
      </div>
      <div className="ui celled list">{renderList}</div>
      {renderCreate()}
    </div>
  );
};

//<input onChange={(e) => filterStreams(e.target.value)}value={searchStreams}/>

/*<select value={searchStreams} onChange={(e) => filterStreams(e.target.value)}>
<option value="">All</option>
<option value="High">High</option>
<option value="Medium">Medium</option>
<option value="low">Low</option>
</select>*/

const mapStateToProps = (state) => {
  return {
    streams: Object.values(state.streams),
    currentUserId: state.auth.userId,
    isSignedIn: state.auth.isSignedIn,
    searchStreams: state.searchStreams,
  };
};

export default connect(mapStateToProps, { fetchStreams, filterStreams })(
  StreamList
);
