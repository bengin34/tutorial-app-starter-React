import { useState } from "react";



const Modal = ({tutorial, onSave}) => {
    const [title,setTitle] = useState(tutorial.title)
    const [description, setDescription] = useState(tutorial.description)

    const handleSave = async() => {
        await onSave ({id:tutorial.id, title, description})
        setTitle("")
        setDescription("")
    }


  return (
    <div
      className="modal fade"
      id="edit-btn"
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
             Edit Tutorial
            </h1>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form>
              <div className="mb-3">
                <label htmlFor="title-input" className="form-label">
                 Title:
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="title-input"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>
              <div className="mb-3">
                <label htmlFor="description-textarea" className="form-label">
                  Message:
                </label>
                <textarea className="form-control" id="description-textarea" value={description}
                 onChange={e => setDescription(e.target.value)}
                ></textarea>
              </div>
            </form>
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-bs-dismiss="modal"
            >
              Close
            </button>
            <button type="button" className="btn btn-primary" 
            onClick={handleSave}>
              Send message
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Modal;
