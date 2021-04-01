import Head from 'next/head'
import styles from '../styles/Home.module.css'
import Link from 'next/link';
import  Edit  from '@material-ui/icons/Edit';
import HomeIcon from '@material-ui/icons/Home';
import MeetingRoomIcon from '@material-ui/icons/MeetingRoom';
import ListAltIcon from '@material-ui/icons/ListAlt';

export default function Home() {
  return (
    <div style={{display: 'flex',  justifyContent:'center', alignItems:'center', marginTop: '260px'}}>
    <Link href={`/TablesSalasFull`}>
            <a title="Home" ><strong>&nbsp;<HomeIcon /> |&nbsp; </strong></a>
        </Link>
        <Link href={`/TablesSalasFull`}>
            <a title="Salas"><strong>&nbsp; <MeetingRoomIcon/> &nbsp;&nbsp;| </strong> </a>
        </Link>
        <Link href={`/TablesAgendamento`}>
            <a title="Reservas/Reservar"><strong>&nbsp; <ListAltIcon/></strong> </a>
        </Link>
    </div>
  )
}
