export function Layout ({ children }) {
  return (
    <div className='bg-gray-900 min-h-screen h-full text-white py-10'>
      <main>
        {children}
      </main>
    </div>
  )
}
