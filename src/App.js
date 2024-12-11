import { Box, Typography } from '@mui/material';
import Task from './components/task';

function App() {
  return (
    <Box sx={{ backgroundColor: '#282c34', height: '100vh' }}>
      <Box sx={{ position: 'relative', top: '50px' }} textAlign={'center'}>
        <Typography variant="h3" sx={{ color: 'white' }}>
          TASK-MANAGER
        </Typography>
        <Task/>
      </Box>
    </Box>
  );
}

export default App;
