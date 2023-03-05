import { Button } from '@mui/material'
import { useNavigate } from 'react-router-dom';
import { LOGIN_ROUTE } from '../../routers/consts';


type Props = {}

function HomeLayout({}: Props) {

  const navigate = useNavigate();


  return (
    <><div>HomeLayout</div>
    <Button onClick={() => navigate(LOGIN_ROUTE)}>Login</Button>
  </>
  )
}

export default HomeLayout