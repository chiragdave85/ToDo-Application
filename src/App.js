import React, { useState } from 'react';
import { Container, Typography, Box, Button, TextField, List, ListItem, ListItemText, IconButton, CssBaseline, ThemeProvider, createTheme, useMediaQuery } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';

function App() {
  const [tasks, setTasks] = useState([]);
  const [task, setTask] = useState('');

  const addTask = () => {
    if (task.trim()) {
      setTasks([...tasks, task]);
      setTask('');
    }
  };

  const deleteTask = (index) => {
    const newTasks = tasks.filter((_, i) => i !== index);
    setTasks(newTasks);
  };

  const prefersDarkMode = useMediaQuery('(prefers-color-scheme: dark)');
  const theme = createTheme({
    palette: {
      mode: prefersDarkMode ? 'dark' : 'light',
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Container maxWidth="sm">
        <Box sx={{ my: 4 }}>
          <Typography variant="h4" component="h1" gutterBottom>
            ToDo Application
          </Typography>
          <TextField
            fullWidth
            label="Enter a task"
            variant="outlined"
            value={task}
            onChange={(e) => setTask(e.target.value)}
            sx={{ mb: 2 }}
          />
          <Button variant="contained" color="primary" fullWidth onClick={addTask}>
            Add Task
          </Button>
          <List>
            {tasks.map((t, index) => (
              <ListItem
                key={index}
                secondaryAction={
                  <IconButton edge="end" aria-label="delete" onClick={() => deleteTask(index)}>
                    <DeleteIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={t} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Container>
    </ThemeProvider>
  );
}

export default App;
