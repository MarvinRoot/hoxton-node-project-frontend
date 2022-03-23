import '../styling/Modal.css';

type Props = {
  modalMessage: string;
  setModalMessage: React.Dispatch<React.SetStateAction<string>>;
};

function Modal({ modalMessage, setModalMessage }: Props) {
  return (
    <div
      className='modal-wrapper'
      onClick={() => {
        return null;
      }}
    >
      <div className='modal' onClick={(e) => e.stopPropagation()}>
        <button
          onClick={() => {
            setModalMessage('');
          }}
          className='close-modal'
        >
          X
        </button>
        <h2 style={{ color: '#ee1144' }}>{modalMessage}</h2>
      </div>
    </div>
  );
}
export default Modal;
