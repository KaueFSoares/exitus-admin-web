import Header from '../header/Header.tsx'

const PageWrapper = ({ children }: any) => {
  return (
    <div className='h-screen w-full flex align-center justify-start flex-col'>
      <Header/>
      {children}
    </div>
  )
}

export default PageWrapper