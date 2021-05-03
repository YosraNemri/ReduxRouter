import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./AddMovie.css";

function AddMovie({ getNewMovie }) {
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [newMovie, setNewMovie] = useState({});

    const handleSubmit = () => {
        getNewMovie(newMovie);
        handleClose();
    };
    return (
        <>
            <Button variant="primary" onClick={handleShow}>
                Add Movie
            </Button>

            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Add a New Movie...</Modal.Title>
                </Modal.Header>
                <Modal.Body className="inputArea">
                    <Form.Control
                        type="text"
                        placeholder="Enter Title..."
                        onChange={(e) =>
                            setNewMovie({ ...newMovie, title: e.target.value })
                        }
                    />
                    <Form.Control
                        type="text"
                        placeholder="Enter Description..."
                        onChange={(e) =>
                            setNewMovie({
                                ...newMovie,
                                description: e.target.value,
                            })
                        }
                    />
                    <Form.Control
                        type="text"
                        placeholder="Enter PosterUrl..."
                        onChange={(e) =>
                            setNewMovie({
                                ...newMovie,
                                posterUrl: e.target.value,
                            })
                        }
                    />
                    <Form.Control
                        type="text"
                        placeholder="Enter Rate..."
                        onChange={(e) =>
                            setNewMovie({ ...newMovie, rate: e.target.value })
                        }
                    />
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
                    </Button>
                    <Button variant="primary" onClick={handleSubmit}>
                        Add Movie
                    </Button>
                </Modal.Footer>
            </Modal>
        </>
    );
}

export default AddMovie;
