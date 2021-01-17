import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { DropzoneDialog } from 'material-ui-dropzone';

import * as modalActions from '../../redux/actions/modal/modalActions';
import * as imageFileActions from '../../redux/actions/imageFile/imageFileActions';

const PropertyDropzone = () => {

    const dispatch = useDispatch();
    const { propertyDropzoneModal } = useSelector(state => state.modal);

    return (
        <DropzoneDialog
            acceptedFiles={['image/*']}
            cancelButtonText={"cancel"}
            submitButtonText={"submit"}
            maxFileSize={5000000}
            open={propertyDropzoneModal}
            onClose={() => { dispatch(modalActions.closePropertyDropzone()); }}
            onSave={(files) => {
                console.log('Files:', files);
                dispatch(imageFileActions.setPropertyFileUpload(files));
                dispatch(modalActions.closePropertyDropzone());
            }}
            showPreviews={true}
            showFileNamesInPreview={true}
        />
    );
};

export default PropertyDropzone;
