import Sep from '@/components/Sep'

const PageTitle = ({ children }) => (
  <div className="-mx-3 -mt-3 md:m-0">
    <div className="bg-gradient-to-b from-omega-800 to-omega-800 p-6 pb-2 md:bg-none md:p-0">
      {children}
    </div>
    <Sep className="md:bg-none" line />
  </div>
)

export default PageTitle
