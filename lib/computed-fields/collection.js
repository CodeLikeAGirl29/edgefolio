import matter from 'gray-matter'
import sift from 'sift'
import { getManyFilesBySlug } from '../mdx-files'

const collection = {
  hasSubFields: true,
  resolve: async (collection, { mdxOptions, shallow }) => {
    // Skip collections without path
    if (!collection?.path) {
      return {
        ...collection,
        infinitePaging: false,
        totalPages: 0,
        records: [],
      }
    }

    const {
      path,
      sortBy,
      filterBy,
      limit,
      // reduceTo,
      infinitePaging = false,
      recordsPerPage = 6,
    } = collection

    // Already resolved?
    if (collection.records) return collection

    // Get all collection files excluding collection's index page
    const files = await getManyFilesBySlug(path.split('/'), mdxOptions)

    let records = await Promise.all(
      files.map(async ({ slug, filePath }) => {
        const file = await matter.read(filePath)
        return { ...file.data, slug }
      })
    )

    if (records && records.length > 0) {
      if (filterBy) {
        records = records.filter(sift(filterBy))
      }

      if (sortBy) {
        records.sort((p1, p2) => (p1[sortBy] > p2[sortBy] ? '-1' : '1'))
      }

      // if (reduceTo) {
      //   const reducedRecords = records
      //     .reduce((acc, record) => {
      //       if (record[reduceTo]) acc.push(record[reduceTo])
      //       return acc
      //     }, [])
      //     .flat()
      //   const test = Array.from(new Set(reducedRecords))
      // }

      if (limit) {
        records = records.slice(0, limit)
      }
    }

    return {
      ...collection,
      infinitePaging,
      totalRecords: records.length,
      totalPages: recordsPerPage ? Math.ceil(records.length / recordsPerPage) : 1,
      recordsPerPage: recordsPerPage || records.length,
      records: shallow ? [] : records,
    }
  },
}

export default collection
