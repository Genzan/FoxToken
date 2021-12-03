// Import external libraries
import React, { useState } from 'react';
import { Form, Modal, Input, Button, notification } from 'antd';

// Import Internal Components

const Login = ({visible, setModalLoginVisible,}) => {

    // State Variables
    const [loading, setLoading] = useState({
        state: false,
        message: 'Login'
    });

    const [form, setForm] = useState({
        email: "Prueba@BadBunnyStudios.org",
        password: "Password123ThisIsSoObvious",
      });


    // Constants
    const layout = {
        labelCol: { span: 4 },
        wrapperCol: { span: 16 },
    };

    const tailLayout = {
        wrapperCol: { offset: 4, span: 16 },
      };

    // Functions
    const handleSubmit = event => {
        setLoading({
          state: true,
          message: 'Wait a sec, we are login you...'
        });
    };

    const handleInput = event => {
        setForm({
          ...form,
          [event.target.id]: event.target.value
        })
      };

    return (
        <>
            <Modal
                title="Login"
                centered
                visible={visible}
                onCancel={setModalLoginVisible}
                footer={null}
            >
                <Form
                    {...layout}
                    name="basic"
                    onFinish={handleSubmit}
                >
                    <Form.Item
                        label="User"
                        name="username"
                    >
                        <Input
                            id="email"
                            type="text"
                            placeholder="Correo"
                            defaultValue={form.email}
                            onChange={handleInput}
                        />
                    </Form.Item>

                    <Form.Item
                        label="Password"
                        name="password"
                    >
                        <Input 
                            id="password"
                            type="password"
                            placeholder="Contraseña"
                            defaultValue={form.password}
                            onChange={handleInput}
                        />
                    </Form.Item>
                    <Form.Item {...tailLayout}>
                        <Button
                            type="primary"
                            loading={loading.state}
                            htmlType="submit"
                        >
                            {loading.message}
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    );
};
    
export default Login;