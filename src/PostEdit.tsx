import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const PostEdit = () => (
    <Edit title="Edit Post">
        <SimpleForm>
            <TextInput source="title" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);