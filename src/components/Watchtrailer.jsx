import React from 'react'
import Modal from 'react-bootstrap/Modal';


function Watchtrailer(props) {
    return (
        <div>
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                contentClassName="bg-transparent border-0"
                centered
            >
                <div style={{
                    backgroundColor: '#1E1E1E', 
                    color: 'white',
                    borderRadius: '10px',
                    border: '1px solid #333',  
                    borderTop: '4px solid #FF3D47' 
                }}>
                <Modal.Header closeButton closeVariant="white" className="border-0">
                    <Modal.Title id="contained-modal-title-vcenter">
                        Watch trailer
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>


                    <div>
                        <div>
                            {props.t ? (
                                <iframe
                                    width="100%"
                                    height="500"
                                    src={`https://www.youtube.com/embed/${props.t.key}`}
                                    title="Trailer"
                                    allowFullScreen
                                ></iframe>
                            ) :null}
                        </div>
                    </div>

                </Modal.Body>
            </div>
            </Modal>

        </div>
    )
}

export default Watchtrailer
