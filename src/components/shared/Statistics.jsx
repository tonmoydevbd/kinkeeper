const Statistics = () => {

  const data = [
    { id: 0, stats: 10, title: 'total friend' },
    { id: 1, stats: 3, title: 'on track' },
    { id: 2, stats: 6, title: 'need attertion' },
    { id: 3, stats: 12, title: 'interactions this month' },
  ]

  const element = data.map(item => <div key={item.id} className="p-8 flex flex-col justify-center items-center shadow-lg">
    <h3 className="text-3xl font-semibold text-[#244D3F]">{item.stats}</h3>
    <p className="text-lg capitalize">{item.title}</p>
  </div>)

  return (
    <div className="my-10 max-w-277.5 mx-auto grid grid-cols-2 sm:grid-cols-4 gap-4 ">
      {element}
    </div>
  )
}

export default Statistics