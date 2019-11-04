import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Input from '../../../UI/Inputs/Input';
import { Well, Form, Button, FormGroup, Col } from 'react-bootstrap';
import { returnInputConfiguration } from '../../../Utility/InputConfiguration';
import * as formUtilityActions from '../../../Utility/FormUtility';
import * as repositoryActions from '../../../store/Actions/repositoryActions';
import * as errorHandlerActions from '../../../store/Actions/errorHandlerActions';
import SuccessModal from '../../../components/Modals/SuccessModal/SuccessModal';
import ErrorModal from '../../../components/Modals/ErrorModal/ErrorModal';


const CreateOwner = (props) => {

    const [ownerForm, setOwnerForm] = useState({});
    const [isFormValid, setIsFormValid] = useState(false);

    const dispatch = useDispatch();

    const showSuccessModal = useSelector(state => state.repository.showSuccessModal);
    const showErrorModal = useSelector(state => state.errorHandler.showErrorModal);
    const errorMessage = useSelector(state => state.errorHandler.errorMessage);

    useEffect(() => {
        setOwnerForm(returnInputConfiguration())
    }, [])

    const formElementsArray = formUtilityActions.convertStateToArrayOfFormOnjects({ ...ownerForm });

    const createOwner = (e) => {
        e.preventDefault();

        const ownerToCreate = {
            name: ownerForm.name.value,
            address: ownerForm.address.value,
            dateOfBirth: ownerForm.dateOfBirth.value
        }
        const url = '/api/owner';
        dispatch(repositoryActions.postData(url, ownerToCreate, {...props}));
    }

    const handleChangeEvent = (event, id) => {
        const updatedOwnerForm = { ...ownerForm };
        updatedOwnerForm[id] = formUtilityActions.executeValidationAndReturnFormElement(event, updatedOwnerForm, id);

        const counter = formUtilityActions.countInvalidElements(updatedOwnerForm);

        setOwnerForm(updatedOwnerForm);
        setIsFormValid(counter === 0);
    }

    const redirectToOwnerList = () => {
        props.history.push('/owner-List');
    }

    return (
        <Well>
            <Form horizontal onSubmit={createOwner}>
                {
                    formElementsArray.map(element => {
                        return <Input key={element.id} elementType={element.config.element}
                            id={element.id} label={element.config.label}
                            type={element.config.type} value={element.config.value}
                            changed={(event) => handleChangeEvent(event, element.id)}
                            errorMessage={element.config.errorMessage}
                            invalid={!element.config.valid} shouldValidate={element.config.validation}
                            touched={element.config.touched}
                            blur={(event) => handleChangeEvent(event, element.id)} />
                    })
                }
                <br />
                <FormGroup>
                    <Col mdOffset={6} md={1}>
                        <Button type='submit' bsStyle='info' disabled={!isFormValid}>Create</Button>
                    </Col>
                    <Col md={1}>
                        <Button bsStyle='danger' onClick={redirectToOwnerList}>Cancel</Button>
                    </Col>
                </FormGroup>
            </Form>
            <SuccessModal show={showSuccessModal}
                modalHeaderText={'Success message'}
                modalBodyText={'Action completed successfully'}
                okButtonText={'OK'}
                successClick={() => dispatch(repositoryActions.closeSuccessModal({ ...props }, '/owner-List'))} />

            <ErrorModal show={showErrorModal}
                modalHeaderText={'Error message'}
                modalBodyText={errorMessage}
                okButtonText={'OK'} closeModal={() => dispatch(errorHandlerActions.closeErrorModal())} />
        </Well>
    );
}

export default CreateOwner;