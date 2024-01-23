import React from 'react'

const Modal = ({isVisible, onClose}) => {
    if(!isVisible) return null;

    const handleClose = (e) => {
if( e.target.id === 'roxy')  onClose();
    }
  return (
    <div
      className="fixed inset-0 bg-black bg-opacity-80 backdrop-blur-sm flex justify-center items-center"
      id="roxy"
      onClick={handleClose}
    >
      <div className="w-[500px] md:[400px]">
        <button
          className=" text-white text-xl  flex flex-col place-self-end"
          onClick={() => onClose()}
        >
          x
        </button>
        <div className="flex flex-col space-y-4 bg-white p-4 rounded-md">
          <div className="flex justify-between">
            <h2 className="text-lg"> Invite member</h2>
            <p
              className="text-xl font-medium hover:text-error pl-4"
              onClick={() => onClose()}
            >
              x
            </p>
          </div>
          {/* input-name */}
          <div className="flex justify-between lg:gap-4">
            <input
              type="text"
              className="placeholder-black border px-2 py-1 rounded-sm outline-none"
              placeholder="First Name"
            />
            <input
              type="text"
              className="placeholder-black border px-2 py-1 rounded-sm outline-none"
              placeholder="Last Name"
            />
          </div>
          {/* input-email */}
          <div className="flex justify-between lg:gap-4">
            <input
              type="text"
              className="placeholder-black border px-2 py-1 rounded-sm  outline-none"
              placeholder="Email"
            />
            <div className="flex gap-2">
              <div className="flex items-center gap-1">
                <input type="radio" />
                <p className="text-sm">Reviewer</p>
              </div>
              <div className="flex items-center gap-1">
                <input type="radio" />
                <p className="text-sm">Administrator</p>
              </div>
            </div>
          </div>
          {/* button */}
          <div className="flex gap-6 ">
            <button className="text-sm text-white rounded-full bg-secondary w-full p-2">
              Done
            </button>
            <button
              className="text-sm rounded-full bg-default w-full p-2 hover:bg-default_dark"
              onClick={() => onClose()}
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Modal