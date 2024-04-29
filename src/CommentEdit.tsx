import { Edit, ReferenceInput, SimpleForm, TextInput } from 'react-admin';

export const CommentEdit = () => (
    <Edit title="Edit Comment" mutationMode='pessimistic'>
        <SimpleForm>
            <ReferenceInput source="postId" reference="posts" />
            <TextInput source="name" />
            <TextInput source="email" />
            <TextInput source="body" />
        </SimpleForm>
    </Edit>
);