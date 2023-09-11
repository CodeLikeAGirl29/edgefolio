import React from 'react'
import { useRouter } from 'next/router'

const useInfinitePaging = ({ enabled, currentPage, records }) => {
  const router = useRouter()
  const [infiniteRecords, setInfiniteRecords] = React.useState({})

  const {
    query: { infinite = false },
  } = router

  React.useEffect(() => {
    if (!records || !enabled) return

    const newRecords = {
      [currentPage]: { records },
    }

    setInfiniteRecords((records) =>
      infinite
        ? {
            ...records,
            ...newRecords,
          }
        : newRecords
    )
  }, [currentPage, enabled, infinite, records])

  return [infiniteRecords]
}

export default useInfinitePaging
