import { useSnackbar, VariantType,ProviderContext } from "notistack"
import React from "react"

let useSnackbarRef:ProviderContext
export const SnackbarConfig:React.FC = ()=>{
    useSnackbarRef = useSnackbar()
    return null
}

export default {
    success(msg:string){
        this.toast(msg,"success")
    },
    error(msg:string){
        this.toast(msg,"error")
    },
    toast(msg:string, variant:VariantType = 'default'){
        useSnackbarRef.enqueueSnackbar(msg, {variant})
    }
}