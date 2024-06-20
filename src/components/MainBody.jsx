import React from 'react'

const MainBody = ({ name, sprite, abilities, height, weight, types, stats }) => {
  return (
    <div className='w-full'>
              <div className="border border-slate-200 shadow-lg gap-4 mx-auto mt-6 w-[400px] md:w-[700px] flex justify-evenly p-4 flex-col md:flex-row">
        <img src={sprite} className="bg-gray-300 w-[300px] h-[300px] md:w-[400px] md:h-[400px]" alt="" />
        
        <div className="">
            <p className="font-bold text-lg">{name}</p>
          <div className="left">
            <div className="mt-2">
              <p className="font-semibold">Abilities</p>
              <div className="gap-2">
                {abilities &&
                  abilities.map((ab, ind) => (
                    <p key={ind} className="text-md px-2 text-gray-600">
                      {ab.ability.name}
                    </p>
                  ))}
              </div>
            </div>
            <div className="mt-2">
              <p className="font-bold text-lg">Types</p>
              {types &&
                types.map((t, ind) => (
                  <div key={ind}>
                    <p className="px-2 text-gray-600">{t?.type?.name}</p>
                  </div>
                ))}
            </div>
            <div>
              <p className="mt-2 font-bold">Height: {height} feet</p>
              <p className="mt-2 font-bold">Weight: {weight} kg</p>
            </div>
          </div>
          <div className="mt-3">
          <p className="font-bold text-lg">Stats</p>
        {stats &&
          stats.map((s) => (
            <div>
              <div className="flex gap-1 px-2">
                <p className="font-base">{s?.stat?.name}</p>
                <p className="font-base">({s?.base_stat}%)</p>
              </div>
            </div>
          ))}
      </div>
        </div>
      </div>
    </div>
  )
}

export default MainBody;