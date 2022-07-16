import React, { useEffect } from "react";
import moment from "moment";
import DatePicker from "antd/lib/date-picker";
import { Button, Form, Input, TimePicker } from 'antd';

const { RangePicker } = TimePicker;


const TimeLogInput = ({ getUserlogData, editFlag, editData }) => {
    const [form] = Form.useForm();
    useEffect(() => {
        if (editFlag) {
            form.setFieldsValue({
                details: editData.details,
                date: moment(editData.date, 'YYYY/MM/DD'),
                time_log: [moment(editData.start_time), moment(editData.end_time)],
            })
        }
    }, [editData, editFlag, form])
    const onCheck = async () => {
        try {
            const values = await form.validateFields();
            getUserlogData(values)
            form.resetFields();

        } catch (errorInfo) {
            console.log('Failed:', errorInfo);
        }
    };
    return (
        <div data-testid='user-input-component'>
            {editFlag ? <Form form={form} name="dynamic_rule"
                key={editData.id}
            >
                <Form.Item
                    name="details"
                    label="Details"
                    rules={[
                        {
                            required: true,
                            message: 'Please input time log details',
                        },
                    ]}
                >
                    <Input placeholder="Please input time log details" />
                </Form.Item>
                <Form.Item
                    name="time_log"
                    label="Time Log:"
                    rules={[
                        {
                            required: true,
                            message: 'Please input time log',
                        },
                    ]}
                >
                    <RangePicker showTime />
                </Form.Item>
                <Form.Item
                    name="date"
                    label="Date:"
                    rules={[
                        {
                            required: true,
                            message: 'Please input time log data',
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" onClick={onCheck}>
                        Update
                    </Button>
                </Form.Item>
            </Form> : <Form form={form} name="dynamic_rule">
                <Form.Item
                    name="details"
                    label="Details"
                    rules={[
                        {
                            required: true,
                            message: 'Please input time log details',
                        },
                    ]}
                >
                    <Input placeholder="Please input time log details" />
                </Form.Item>
                <Form.Item
                    name="time_log"
                    label="Time Log:"
                    rules={[
                        {
                            required: true,
                            message: 'Please input time log',
                        },
                    ]}
                >
                    <RangePicker showTime />
                </Form.Item>
                <Form.Item
                    name="date"
                    label="Date:"
                    rules={[
                        {
                            required: true,
                            message: 'Please input time log',
                        },
                    ]}
                >
                    <DatePicker />
                </Form.Item>
                <Form.Item >
                    <Button type="primary" onClick={onCheck}>
                        Add
                    </Button>
                </Form.Item>
            </Form>}
        </div>
    );

}

export default TimeLogInput;