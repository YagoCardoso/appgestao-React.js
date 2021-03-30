import React from 'react';
import { array, string } from 'prop-types';
import { TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import TableMaterial from '@material-ui/core/Table';

const Table = ({items}) => {
    return (
        
        items.map((e) => (
            <div>
                <TableMaterial>
                    <TableHead>
                        <TableRow>
                        <TableCell >Nº Sala</TableCell>
                        <TableCell >Nome Sala</TableCell>
                        </TableRow>
                    </TableHead>

                    <TableBody>
                        <TableRow>
                        <TableCell>{e.idsala}</TableCell>
                    <TableCell>{e.nome}</TableCell>
                        </TableRow>
                    </TableBody>
                </TableMaterial>
            </div>
     )  )
    
    )}  

    Table.propTypes = {
        items: array.isRequired
      }
      
      export default Table