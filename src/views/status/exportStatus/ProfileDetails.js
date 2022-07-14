import React, { useState } from 'react';
import clsx from 'clsx';
import PropTypes from 'prop-types';
import {
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  Divider,
  Grid,
  TextField,
  makeStyles
} from '@material-ui/core';
import { Link as RouterLink, useNavigate } from 'react-router-dom';

const states = [
  {
    value: 'dropbox',
    label: 'Dropbox'
  },
  {
    value: 'medium',
    label: 'Medium Corporation'
  },
  {
    value: 'slack',
    label: 'Slack'
  },
  {
    value: 'lyft',
    label: 'Lyft'
  },
  {
    value: 'github',
    label: 'Github'
  },
  {
    value: 'squarespace',
    label: 'Squarespace'
  },
  {
    value: 'myreports',
    label: 'Meus Reports'
  }
];

const useStyles = makeStyles(() => ({
  root: {}
}));

const ProfileDetails = ({ className, ...rest }) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const [values, setValues] = useState({
  });

  const handleChange = (event) => {
    setValues({
      ...values,
      [event.target.name]: event.target.value
    });
  };

  const handleSaveButton = () => {
    navigate('/app/dashboard', { replace: true });
  }

  return (
    <form
      autoComplete="off"
      noValidate
      className={clsx(classes.root, className)}
      {...rest}
    >
      <Card>
        <CardHeader
          subheader="Selecione o Serviço que deseja gerar o relatorio."
          title="Gerar Relatorio do Serviço"
        />
        <Divider />
        <CardContent>
          <Grid
            container
            spacing={3}
          >
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Data de Inicio do Reporte"
                value={new Date()}
                name="firstName"
                type='date'
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={6}
              xs={12}
            >
              <TextField
                fullWidth
                helperText="Data de Fim do Reporte"
                name="firstName"
                type='date'
                value={new Date()}
                required
                variant="outlined"
              />
            </Grid>
            <Grid
              item
              md={12}
              xs={12}
            >
              <TextField
                fullWidth
                label="Selecioce o Serviço"
                name="state"
                onChange={handleChange}
                required
                select
                SelectProps={{ native: true }}
                value={values.state}
                variant="outlined"
              >
                {states.map((option) => (
                  <option
                    key={option.value}
                    value={option.value}
                  >
                    {option.label}
                  </option>
                ))}
              </TextField>
            </Grid>
          </Grid>
        </CardContent>
        <Divider />
        <Box
          display="flex"
          justifyContent="flex-end"
          p={2}
        >
          <Button
            color="primary"
            variant="contained"
            onClick={handleSaveButton}
          >
            Enviar
          </Button>
        </Box>
      </Card>
    </form>
  );
};

ProfileDetails.propTypes = {
  className: PropTypes.string
};

export default ProfileDetails;
