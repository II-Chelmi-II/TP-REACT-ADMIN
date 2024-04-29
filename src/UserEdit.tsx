import { Edit, SimpleForm, TextInput, useRecordContext } from 'react-admin';

const PageTitle = () => {
    const record = useRecordContext();
    return <>Edit "{record?.name}"</>;
}

export const UserEdit = () => (
    <Edit title={<PageTitle />} mutationMode='pessimistic'>
        <SimpleForm>
            <TextInput source="name" />
            <TextInput source="username" />
            <TextInput source="email" />
            <TextInput source="address.street" />
            <TextInput source="phone" />
            <TextInput source="website" />
            <TextInput source="company.name" />
        </SimpleForm>
    </Edit>
);
