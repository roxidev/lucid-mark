import React from 'react'

const Modal = ({isVisible, onClose}) => {
    if(!isVisible) return null;

    const handleClose = (e) => {
if( e.target.id === 'roxy')  onClose();
    }
  return (
    <div
      className="fixed inset-0 bg-black opacity-80 flex justify-center items-center"
      id="roxy"
      onClick={handleClose}
    >
      <div className="w-4/6 lg:w-[500px] md:[400px]">
        <div className=" space-y-2 bg-white p-4 rounded-md">
          <div className="flex justify-between">
            <h2 className="md:text-lg"> Invite member</h2>
            <p
              className="md:text-xl font-medium hover:text-error pl-4"
              onClick={() => onClose()}
            >
              x
            </p>
          </div>
          {/* input-name */}
          <div className="flex flex-col gap-2 md:flex-row justify-between lg:gap-4 ">
            <input
              type="text"
              className="w-full placeholder-black border px-2 py-2 rounded-md outline-none"
              placeholder="First Name"
            />
            <input
              type="text"
              className="w-full placeholder-black border px-2 py-2 rounded-md outline-none"
              placeholder="Last Name"
            />
          </div>
          {/* input-email */}
          <div className="flex flex-col gap-2 md:flex-row justify-between lg:gap-4">
            <input
              type="text"
              className="w-full placeholder-black border px-2 py-2 rounded-md outline-none"
              placeholder="Email"
            />
            <div className="w-full px-2">
              <p className="text-sm">Role</p>
              <div className=" flex gap-2">
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
          </div>
          {/* button */}
          <div className="flex gap-2 md:gap-4 lg:gap-10 ">
            <button className="text-sm text-white rounded-full bg-secondary w-full p-2 hover:bg-secondary_dark">
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