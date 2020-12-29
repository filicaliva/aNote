import react, { useState } from 'react'
import { useSelector } from 'react-redux'
import { useFirebase } from 'react-redux-firebase'
import { useHistory } from 'react-router-dom'

type ErrorProps = {
    validation: {
        show: boolean, 
        text: string
    }
}

export default function Error({ validation }: ErrorProps) {

    return (
        <div className={`text-white bg-danger p-1 rounded mb-2 ${validation.show ? 'd-block' : 'd-none'}`} >
            {validation.text}
        </div>

    )
}