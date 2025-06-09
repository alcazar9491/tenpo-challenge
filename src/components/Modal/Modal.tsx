



interface IModal {
    closeModal: React.Dispatch<React.SetStateAction<boolean>>;
    title:string;
    children: React.ReactNode
}

export const Modal = ({ closeModal, title, children }:IModal) => {




  return (
    <div className="fixed inset-0 bg-[#0000003a] bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-xl max-w-md w-full">
        <div className="p-6">
          <h2 className="text-xl font-bold mb-4 capitalize">{title}</h2>
          <div className="space-y-4">

                 {children}

            <div className="flex space-x-3 pt-4 ">

              <button
                onClick={()=>closeModal(false)}
                className="flex-1 cursor-pointer bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700transition-colors font-medium"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
