import { useState } from "react";
import { Card, CardContent } from "./components/ui/card"; 
import { Button } from "./components/ui/button";
import { Input } from "./components/ui/input";
import { Avatar } from "./components/ui/avatar";
import "./styles/CommentList.css";

const Comment = ({ comment, onReply, onDelete }) => {
  return (
    <div className="container">
    <Card className="comment-card">
      <div className="comment-container">
        <Avatar className="avatar" />
        <div className="comment-content">
          <p className="comment-author">{comment.author}</p>
          <p className="comment-text">{comment.text}</p>
          <div className="comment-actions">
            <Button className="comment-button" onClick={() => onReply(comment.id)}>
              Reply
            </Button>
            <Button className="comment-button" onClick={() => onDelete(comment.id)}>
              Delete
            </Button>
          </div>
        </div>
      </div>
    </Card>
    </div>
  );
};
const CommentForm = ({ onSubmit }) => {
  const [text, setText] = useState("");

  const handleSubmit = () => {
    if (text.trim()) {
      onSubmit(text);
      setText("");
    }
  };

  return (
    <div className="comment-form">
      <Input
        className="comment-input"
        placeholder="Write a comment..."
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <Button className="submit-button" onClick={handleSubmit}>Submit</Button>
    </div>
  );
};

const CommentList = () => {
  const [comments, setComments] = useState([]);
  const [replyTo, setReplyTo] = useState(null);

  const addComment = (text, parentId = null) => {
    const newComment = {
      id: Date.now(),
      author: "Linda",
      text,
      parentId,
    };
    setComments([...comments, newComment]);
    setReplyTo(null);
  };

  const deleteComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  return (
    <div className="comment-list">
      <CommentForm onSubmit={addComment} />
      <div className="comments">
        {comments.map((comment) => (
          <div key={comment.id}>
            <Comment comment={comment} onReply={setReplyTo} onDelete={deleteComment} />
            {replyTo === comment.id && (
              <div className="reply-form">
                <CommentForm onSubmit={(text) => addComment(text, comment.id)} />
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
