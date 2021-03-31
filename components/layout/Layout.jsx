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
                    <Link href={`/TablesTools`}>
                            <a><strong>Home |&nbsp; </strong></a>
                        </Link>
                        <Link href={`/TablesTools`}>
                            <a><strong>&nbsp; Salas | &nbsp;</strong> </a>
                        </Link>
                        <Link href={`/TablesAgendamento`}>
                            <a><strong>&nbsp; Reservar  Sala</strong> </a>
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