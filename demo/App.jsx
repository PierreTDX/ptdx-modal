import { useState } from 'react'
import './App.scss'
import Modal from '../src/modal'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { vscDarkPlus } from 'react-syntax-highlighter/dist/esm/styles/prism';


function App() {

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isVariantModalOpen, setIsVariantModalOpen] = useState(false);
  const [isJsxModalOpen, setIsJsxModalOpen] = useState(false);
  const [isCustomModalOpen, setIsCustomModalOpen] = useState(false);
  const [isValidateCustomModalOpen, setIsValidateCustomModalOpen] = useState(false);

  return (
    <>
      <div>
        <h1><a className="link" href="https://www.npmjs.com/package/@ptdx/modal">npm i @ptdx/modal</a></h1>
        <p>npm package for a React modal</p>
        <br />
        <br />
        <h2>Global integration example</h2>
        <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers customStyle={{ borderRadius: '5px' }}>
          {`// integration example
import { useState } from 'react'
import { Modal } from '@ptdx/modal'

function App() {

const [isModalOpen, setIsModalOpen] = useState(false);

return (
    <>
      <button onClick={() => setIsModalOpen(true)}>
          Open Default Modal
      </button>

      <Modal
          isOpen={isModalOpen}
          onClose={() => { setIsModalOpen(false) }}
          // here other props
      />

    </>
  )
}

export default App`}
        </SyntaxHighlighter>
        <br />
        <br />
        <h2>examples of modals</h2>
        <div className='test-content'>
          <button onClick={() => setIsModalOpen(true)}>
            Open Default Modal
          </button>
          <br />
          <br />
          <Modal
            isOpen={isModalOpen}
            onClose={() => { setIsModalOpen(false) }}
            onConfirm={() => { setIsModalOpen(false) }}
            title='Title of the modal'
            content='custom modal text, custom modal text...'
          />
          <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers wrapLines customStyle={{ borderRadius: '5px' }}>
            {`<Modal
  isOpen={isModalOpen}
  onClose={() => { setIsModalOpen(false) }}
  onConfirm={() => { setIsModalOpen(false) }} // and other function you need
  title='Title of the modal'
  content='custom modal text, custom modal text...'
/>`}
          </SyntaxHighlighter>
        </div>
        <div className='test-content'>
          <button onClick={() => setIsVariantModalOpen(true)}>
            Open Variant Modal
          </button>
          <br />
          <br />
          <Modal
            isOpen={isVariantModalOpen}
            onClose={() => { setIsVariantModalOpen(false) }}
            showFooter={false}
            btnClose={false}
            content='custom modal text, custom modal text...'
            variant='error'
            timeToClose={2000}
          />
          <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers wrapLines customStyle={{ borderRadius: '5px' }}>
            {`<Modal
  isOpen={isVariantModalOpen}
  onClose={() => { setIsVariantModalOpen(false) }}
  showFooter={false}
  btnClose={false}
  content='custom modal text, custom modal text...'
  variant='error'
  timeToClose={2000}
/>`}
          </SyntaxHighlighter>
        </div>
        <div className='test-content'>
          <button onClick={() => setIsJsxModalOpen(true)}>
            Open JSX content Modal
          </button>
          <br />
          <br />
          <Modal
            isOpen={isJsxModalOpen}
            onClose={() => { setIsJsxModalOpen(false) }}
            onConfirm={() => { setIsJsxModalOpen(false) }}
            title='Title of the modal'
            content={
              <div>
                <p>Example Jsx content</p>
                <br />
                <form style={{ display: 'flex', flexDirection: 'column' }}>
                  <label htmlFor="">e-mail</label>
                  <input type="mail" style={{ height: '20px', borderRadius: '8px' }} />
                  <label htmlFor="">password</label>
                  <input type="password" style={{ height: '20px', borderRadius: '8px' }} />
                </form>
              </div>
            }
          />
          <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers wrapLines customStyle={{ borderRadius: '5px' }}>
            {`<Modal
  isOpen={isModalOpen}
  onClose={() => { setIsModalOpen(false) }}
  onConfirm={() => { setIsModalOpen(false) }} // and other function you need
  title='Title of the modal'
  content={
    <div>
      <form>
        <label htmlFor="mail">e-mail</label>
        <input type="mail"/>
        <label htmlFor="password">password</label>
        <input type="password"/>
      </form>
    </div>
  }
/>`}
          </SyntaxHighlighter>
        </div>
        <div className='test-content'>
          <button onClick={() => setIsCustomModalOpen(true)}>
            <p>Open Custom css Modal</p>
            <p>And multi Modal mode</p>
          </button>
          <br />
          <br />
          <Modal
            isOpen={isCustomModalOpen}
            onClose={() => { setIsCustomModalOpen(false) }}
            onConfirm={() => {
              setIsCustomModalOpen(false)
              setIsValidateCustomModalOpen(true)
            }}
            title={"Title of the modal"}
            content={"custom modal text, custom modal text..."}
            confirmText="Do"
            cancelText="Don't"
            className="custom-modal"
          />
          <Modal
            isOpen={isValidateCustomModalOpen}
            onClose={() => { setIsValidateCustomModalOpen(false) }}
            showFooter={false}
            btnClose={false}
            content='success'
            variant='success'
            width='200px'
            timeToClose={2000}
            className="custom-modal"
          />
          <SyntaxHighlighter language="jsx" style={vscDarkPlus} showLineNumbers wrapLines customStyle={{ borderRadius: '5px' }}>
            {`<Modal
  isOpen={isCustomModalOpen}
  onClose={() => { setIsCustomModalOpen(false) }}
  onConfirm={() => {
    setIsCustomModalOpen(false)
    setIsValidateCustomModalOpen(true)
  }}
  title={"Title of the modal"}
  content={"custom modal text, custom modal text..."}
  confirmText="Do"
  cancelText="Don't"
  className="custom-modal"
/>
<Modal
  isOpen={isValidateCustomModalOpen}
  onClose={() => { setIsValidateCustomModalOpen(false) }}
  showFooter={false}
  btnClose={false}
  content='success'
  variant='success'
  width='300px'
  timeToClose={2000}
  className="custom-modal"
/>`}
          </SyntaxHighlighter>
          <SyntaxHighlighter language="css" style={vscDarkPlus} showLineNumbers customStyle={{ borderRadius: '5px' }}>
            {`/* scss custom example*/

$defaultBackgroundButton: hsl(70.47deg 75.63% 38.63%);
$defaultTextColorButton: #000000;
$defaultBackgroundOverlay :hsl(70.47deg 75.63% 38.63% / 85%);
$defaultOutlineColor :hsl(70.47deg 75.63% 38.63% / 52%);


.custom-modal {

  .modal-overlay {
    background-color: $defaultBackgroundOverlay;
  }

  .modal-footer {
    gap: 20px;
  }

  .modal-border {
    --border-radius: 8px;
    --border-width: 3px;
  }

  .modal-container {
    border-color: $defaultBackgroundButton;
  }

  .modal-btn {
    background-color: $defaultBackgroundButton ;
    color: $defaultTextColorButton ;
    border: 2px solid;
    min-width: 90px;
  }

  .modal-btn-confirm {

    &:hover {
      background-color: green;
      border-color: green;
      color: white;
    }
  }

  .modal-btn-cancel {
    background-color: transparent;
    border-color: $defaultBackgroundButton;

    &:hover {
      background-color: red;
      border-color: red;
      color: white;
    }
  }

  .modal-btn:focus-visible,
  .modal-close:focus-visible {
    outline: 5px solid $defaultOutlineColor;
  }

  .modal-forceFocusVisible {
    outline: none;
  }

  .modal-container-success {
    padding: 0;

    .modal-content {
      margin: 0;
    }
  }
}`}
          </SyntaxHighlighter>
        </div>
      </div >
    </>
  )
}

export default App