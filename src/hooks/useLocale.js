import React from 'react'
import { useParams } from 'next/navigation'

function useLocale() {
    return {
        locale: useParams().locale ||'kn'
    };
  
}

export default useLocale