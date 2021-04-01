import { AppBar } from '@material-ui/core'
import {node} from 'prop-types'
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Link from 'next/link'

const Layout = ({children}) => {
 
    return (

        <>
            <header>
                <AppBar>
                    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center'}}>
                    <Link href={`/`}>
                            <a><strong>Home |&nbsp; </strong></a>
                        </Link>
                        <Link href={`/TablesSalasFull`}>
                            <a><strong>&nbsp; Salas | &nbsp;</strong> </a>
                        </Link>
                        <Link href={`/TablesAgendamento`}>
                            <a><strong>&nbsp; Reservas/Reservar</strong> </a>
                        </Link>
                    </div>
                </AppBar>
                <br></br>
            </header>
        {children}
        <footer>
       
        </footer>
        </>
    );
    
}  


Layout.propTypes = {
    children: node.isRequired,
}

export default Layout;