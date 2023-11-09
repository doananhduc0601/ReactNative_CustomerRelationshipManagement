import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { PENDING } from "../../../utils/status";
import * as actions from "./reducers";

export const useUpdateFields = (customerID = null) => {
    const dispatch = useDispatch();
    const status = useSelector((state) => state.customer.edit.status);
    const fields = useSelector((state) => state.customer.form.fields);


    useEffect(() => {
        if (customerID && status === PENDING) {
            dispatch(actions.setForm(customerID));
        }
    }, [customerID, status]);

    return {
        fields,
        setFormField: (field, value) => {

            dispatch(actions.setFormField({ field, value }));
        },
    };
};

export const useNewCustomer = () => {
    const dispatch = useDispatch();

    return {
        onSubmit: () => {
            dispatch(actions.createCustomer());
        },
    };
};

export const useCreateCustomerStatus = () => {
    return useSelector((state) => state.customer.create.status);
};

export const useEditCustomer = (customerID) => {
    const dispatch = useDispatch();
    const status = useEditCustomerStatus();

    return {
        status,
        onSubmit: () => {
            dispatch(actions.editCustomer(customerID));
        },
    };
};

export const useEditCustomerStatus = () => {
    return useSelector((state) => state.customer.edit.status);
};

export const useListCustomers = () => {
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(actions.loadCustomers());
    }, [dispatch]);

    return useSelector((state) => state.customer.list.customers);
};