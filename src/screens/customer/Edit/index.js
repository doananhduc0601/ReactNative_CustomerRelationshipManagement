import React from "react";
import { useRoute } from "@react-navigation/native";
import { useEditCustomer } from "../../../features/components/customer/hooks";
import Form from "../../../features/components/customer/components/Form";

const Edit = () => {
    const { params } = useRoute();
    const { customerID } = params;
    const { status, onSubmit } = useEditCustomer(customerID);

    return (
        <Form handleSubmit={onSubmit} status={status} customerID={customerID} />
    );
};

export default Edit;