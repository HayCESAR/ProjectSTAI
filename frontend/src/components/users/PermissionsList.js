import { PermissionTag } from './PermissionTag';
import React, { useEffect, useState } from 'react'

export const PermissionsList = ({email, permissoes}) => {
    
    return (
        permissoes?.map(permissao =>
            <>
            <PermissionTag email={email} tagname={permissao}/>
            <> </>
            </>
        )
    );
}