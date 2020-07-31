import React from 'react';
import {ButtonMaterial} from "../common/Button/Button";
import {PasswordInput} from "../common/passwordInput/PasswordInput";
import {Input} from "../common/Input/Input";
import {makeStyles} from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
        display: 'flex',
        justifyContent: 'center',
        flexWrap: 'wrap',
        '& > *': {
            margin: theme.spacing(1),
            width: '25ch',
        },
    },
    margin: {
        margin: theme.spacing(1),
    },
    withoutLabel: {
        marginTop: theme.spacing(1),
    },
    textField: {
        width: '100ch',
        marginTop: theme.spacing(1),
    },
    input: {
        margin: theme.spacing(1),
    },
    email: {
        margin: theme.spacing(1),
        width: '100ch',
    },
    form: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '500px',
        justifyContent: 'space-between',
        boxShadow: "0px 5px 10px #555"
    },

    error: {
        color: '#f44336',
        fontFamily: 'Roboto',
        fontSize: "12px",
        margin: "3px 14px 0px",

    }
}));

export const SignInForm =(props)=> {
    const classes = useStyles();

    return (
        <div className={classes.root}>
            <form className={classes.form} onSubmit={props.handleSubmit}>
                <h1 className={classes.header}>Please Sign In</h1>

                <Input
                    classes={classes.email}
                    label="Email"
                    placeholder={`example@gmail.com`}
                    type='email'
                    value={props.values.email}
                    error={props.errors.email}
                    helperText={props.helperText.email}
                    handleChange={props.handleChange('email')}
                />

                <PasswordInput
                    label='Password'
                    placeholder='Password'
                    value={props.values.password}
                    error={props.errors.password}
                    helperText={props.helperText.password}
                    labelWidth={60}
                    handleChange={props.handleChange("password")}
                />

                <ButtonMaterial
                    variant='contained'
                    color="primary"
                    type="submit"
                    text="Sign up"
                />

                <ButtonMaterial
                    variant='outlined'
                    color="primary"
                    type="button"
                    onClick={props.onClick}
                    text="Clear form"

                />
            </form>
        </div>
    );
}