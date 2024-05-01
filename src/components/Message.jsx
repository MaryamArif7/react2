

const Message = ({ onGetPostClick}) => {
  return (
    <div><h1 className="message">  Welcome ! Share with others whats on your mind</h1>
    <button onClick={onGetPostClick }type="button" className="btn btn-secondary button">Fetch Posts</button>
    
    </div>
  )
}

export default Message