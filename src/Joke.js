import React from "react";
import "./Joke.css";

/** A single joke, along with vote up/down buttons. */

const Joke = ({ id, vote, votes, text, lock, locked }) => {
  return (
    <div className={`Joke${locked ? " Joke-locked" : ""}`}>
      <div className="Joke-votearea">
        <button onClick={() => vote(id, +1)}>
          <i className="fas fa-thumbs-up" />
        </button>

        <button onClick={() => vote(id, -1)}>
          <i className="fas fa-thumbs-down" />
        </button>

        {votes}
      </div>

      <div className="Joke-text">{text}</div>

      <button className="Joke-lockbtn" onClick={() => lock(id)}>
        {locked ? (
          <i className="fas fa-lock" />
        ) : (
          <i className="fas fa-lock-open" />
        )}
      </button>
    </div>
  );
};

export default Joke;


// import React, { Component } from "react";
// import "./Joke.css";

// /** A single joke, along with vote up/down buttons. */

// class Joke extends Component {
//   render() {
//     const { id, vote, votes, text } = this.props;

//     return (
//       <div className="Joke">
//         <div className="Joke-votearea">
//           <button onClick={evt => vote(id, +1)}>
//             <i className="fas fa-thumbs-up" />
//           </button>

//           <button onClick={evt => vote(id, -1)}>
//             <i className="fas fa-thumbs-down" />
//           </button>

//           {votes}
//         </div>

//         <div className="Joke-text">{text}</div>
//       </div>
//     );
//   }
// }

// export default Joke;