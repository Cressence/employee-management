import React, { Component } from 'react';
import {
    Grid, Col, Row, Table,
    Glyphicon, Button, Modal
} from 'react-bootstrap';
import './../css/ListEmployee.css';
import Header from '../components/Header';
import { getEmployees } from './../api/Employee';

class ListEmployee extends Component {

    constructor() {
        super();

        this.state = {
            employees: [],
            show: false,
            selectedEmployee: {}
        }

        this.setEmployeeList = this.setEmployeeList.bind(this);
        this.setSelectedEmployee = this.setSelectedEmployee.bind(this);
        this.showModal = this.showModal.bind(this);
        this.handleClose = this.handleClose.bind(this);
    }

    setEmployeeList(data) {
        this.setState({
            employees: data
        });
    }

    setSelectedEmployee(employeeData) {
        this.setState({ 
            selectedEmployee: employeeData
         });
    }

    showModal(employeeData) {
        this.setSelectedEmployee(employeeData);
        this.setState({ 
            show: true,
         });
    }

    handleClose() {
        this.setState({ show: false });
    }

    componentDidMount() {
        getEmployees(this.setEmployeeList);
    }

    render() {
        return (
            <div>
                <Header />

                <Grid>
                    <div id="content">
                        <section className="row colset-2-its">
                            <h1 style={{ textAlign: 'center' }}>Sprout.Inc</h1>
                            <br />
                            <h2 style={{ textAlign: 'center' }}>Employee Management</h2>

                            <div className="images-section" role="navigation">
                                <Row>
                                    <Col md={12} xs={12}>
                                        <Table striped responsive condensed bordered hover>
                                            <thead>
                                                <tr>
                                                    <th>#</th>
                                                    <th>First Name</th>
                                                    <th>Last Name</th>
                                                    <th>Username</th>
                                                    <th>Email</th>
                                                    <th>Country</th>
                                                    <th></th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {this.state.employees.map((employee) => (
                                                    <tr key={employee.id}>
                                                        <td>{employee.id}</td>
                                                        <td>{employee.firstname}</td>
                                                        <td>{employee.lastname}</td>
                                                        <td>{employee.username}</td>
                                                        <td>{employee.email}</td>
                                                        <td>{employee.country}</td>
                                                        <td>
                                                            <Button className="view-btn" onClick={this.showModal.bind(null, employee)}>
                                                                View
                                                            </Button>
                                                        </td>
                                                    </tr>
                                                )
                                                )}
                                            </tbody>
                                        </Table>
                                    </Col>
                                </Row>
                            </div>
                        </section>

                    </div>
                    <Button className="add-btn">
                        <Glyphicon glyph="plus" />
                    </Button>
                </Grid>

                {/* show individual employee */}
                <Modal
                    show={this.state.show}
                    onHide={this.handleHide}
                    bsSize="small"
                    aria-labelledby="contained-modal-title-sm"
                >
                    <Modal.Header closeButton>
                        <Modal.Title id="contained-modal-title-sm">Employee Details</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <p><strong>Name:</strong> {this.state.selectedEmployee.firstname + " " + this.state.selectedEmployee.lastname}</p>
                        <p><strong>Email:</strong> {this.state.selectedEmployee.email}</p>
                        <p><strong>Username:</strong> {this.state.selectedEmployee.username}</p>
                        <p><strong>Country:</strong> {this.state.selectedEmployee.country}</p>
                        <p><strong>State:</strong> {this.state.selectedEmployee.state}</p>
                        <p><strong>City:</strong> {this.state.selectedEmployee.city}</p>
                        <p><strong>Address:</strong> {this.state.selectedEmployee.address}</p>
                        <p><strong>Telephone: </strong> {this.state.selectedEmployee.telephone}</p>
                        <p><strong>Postal code:</strong> {this.state.selectedEmployee.postalCode}</p>
                    </Modal.Body>
                    <Modal.Footer>
                        <Button onClick={this.handleClose}>Close</Button>
                    </Modal.Footer>
                </Modal>
            </div>
        );
    }
}

export default ListEmployee;
